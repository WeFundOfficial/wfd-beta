import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { BigNumber, ethers } from "ethers";
import { WEFUND_TRON_WALLET, ERC20_ABI } from "../config/Constants";

declare let window: any;

export interface TronLinkStore {
  connected: boolean;
  account: string;
  balance: BigNumber;
  initialized: boolean;
  initializing: boolean;
  tronWeb: any;

  readonly clear: () => void;
  readonly connect: () => Promise<void>;
  readonly disconnect: () => void | Promise<void>;
  readonly getBalance: () => BigNumber;
  readonly getBalanceString: () => string;
  readonly sendTokens: (
    amount: number,
    denom: string,
    account: string,
    native: boolean
  ) => void;
}

export type WalletContextType = TronLinkStore;

const defaultStates = {
  connected: false,
  account: "",
  balance: BigNumber.from("0"),
  initialized: false,
  initializing: true,
  tronWeb: undefined,
};

export const useTronLinkStore = create(
  subscribeWithSelector<TronLinkStore>((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        if (window.tronWeb) {
          const tronWeb = window.tronWeb;
          const tronLink = window.tronLink;
          await tronLink.request({
            method: "tron_requestAccounts",
          });
          const account = tronWeb.defaultAddress.base58;

          set({
            connected: true,
            account: account,
            tronWeb: tronWeb,
          });
        }
      } catch (err: any) {
        console.log(err);
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance!,
    getBalanceString: () => {
      return get().balance.toString() + " tronLInk";
    },
    sendTokens: async (
      amount: number,
      denom: string,
      address: string,
      native: boolean
    ) => {
      const account = get().account;
      const tronWeb = get().tronWeb;

      if (native) {
        const tx = await tronWeb.transactionBuilder.sendTrx(
          WEFUND_TRON_WALLET,
          amount,
          account
        );
        const signedTx = await tronWeb.trx.sign(tx);
        const broastTx = await tronWeb.trx.sendRawTransaction(signedTx);
      } else {
console.log(address)
        const contract = await tronWeb.contract().at(address);

        // const balance = await contract.balanceOf(account).call();
        // const val = BigNumber.from(balance);

        await contract.transfer(WEFUND_TRON_WALLET, amount).send();
      }
    },
  }))
);
export const useTronLink =
  createTrackedSelector<TronLinkStore>(useTronLinkStore);

export const TronLinkProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useTronLinkStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const tronWeb = useTronLinkStore.getState().tronWeb;
        console.log(tronWeb);
        const balance = await tronWeb.trx.getBalance(
          useTronLinkStore.getState().account
        );
        console.log(balance);
        useTronLinkStore.setState({ balance: balance });
        useTronLinkStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};
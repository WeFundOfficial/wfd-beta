import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/fonts.css";
import "../styles/CreateProject.css";
import "../styles/transition.css";
import "../styles/ConnectWallet.css";

import Layout from "../components/Layout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
          
          <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false} />
        </Layout>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;

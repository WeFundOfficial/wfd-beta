import React from "react";
import { Image, Flex, Text, Stack, Container, chakra } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      width="100%"
      id="heroComponent"
      textAlign="left"
      position="relative"
      alignItems="left"
      flexDirection="column"
      height="40vh"
    >
      <Stack
        mt={{ base: "50px", md: "200px" }}
        ml={{ base: "10px", md: "128px" }}
      >
        <Text
          fontFamily="PilatExtended-Regular"
          fontWeight="900"
          fontSize={{ base: "16px", md: "36px" }}
          lineHeight="54px"
          letterSpacing={{ base: "0.1em" }}
          textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
        >
          Dashboard{" "}
          <chakra.span fontFamily="PilatExtended-Bold" color={"#0FB1F5"}>
            WEFUND
          </chakra.span>
        </Text>
        <Text
          fontFamily="PilatExtended-Regular"
          fontWeight="900"
          fontSize="24px"
          lineHeight="26px"
          letterSpacing={{ base: "0.1em" }}
          textShadow="0px 10px 10px rgba(9, 2, 90, 0.73)"
        >
          Details of Project Backed
        </Text>
      </Stack>
      <Image
        top="-150"
        width="100%"
        objectFit="contain"
        position="absolute"
        src="/media/Home/bg_coin_2.svg"
      />
    </Flex>
  );
}

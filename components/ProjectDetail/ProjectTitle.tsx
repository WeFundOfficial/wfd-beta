import React from "react";
import { Avatar, Flex, VStack, Text, Box, Spacer } from "@chakra-ui/react";
import { useOneProjectData } from "../../contexts/store";

export default function ProjectTitle({ data }: { data: any }) {
  return (
    <>
      <Flex
        alignSelf={{
          base: "center",
          md: "center",
          lg: "flex-start",
        }}
        color="white"
      >
        <Avatar
          size="2xl"
          border="3px solid #0FB1F5"
          name="Example"
          mt={1}
          src={data?.project_logo}
        />
        <VStack align="flex-start" paddingStart="64px">
          <Text
            fontSize="40px"
            fontWeight={"900"}
            textAlign={{ base: "center", lg: "left" }}
          >
            {data?.project_title}
          </Text>
          <Text
            textAlign="left"
            fontWeight="400"
            fontSize={{ base: "16px", md: "16px", lg: "18px" }}
          >
            {data?.project_description}
          </Text>
        </VStack>
      </Flex>
    </>
  );
}

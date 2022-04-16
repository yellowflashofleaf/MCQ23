import {
  Container,
  SimpleGrid,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Divider,
  Box,
  Radio,
  HStack,
} from "@chakra-ui/react";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Radio>
        <Text ml="8" fontWeight={600} fontSize="2xl">
          {text}
        </Text>
      </Radio>
    </Stack>
  );
};

export default function Question({ question, questionNumber }) {
  return (
    <Container ml='0' mt={24}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Question No {questionNumber + 1}
          </Text>
          <Text fontSize="3xl">
            {question?.fk_question.statement}
          </Text>
        </Stack>

        <Flex>
          <Divider
            orientation="vertical"
            marginLeft="2"
            borderColor={useColorModeValue("gray.300", "gray.700")}
          ></Divider>
          <SimpleGrid ml="6" columns={1} spacingX="20px" spacingY="20px">
            <Stack spacing={16} mt="16">
              <Feature text="Option1"></Feature>
              <Feature text="Option2"></Feature>
              <Feature text="Option3"></Feature>
              <Feature text="Option4"></Feature>
            </Stack>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>

      {/* <Button
          marginTop={24}
          ml={4}
          onClick={() => Router.push("/testsubmission")}
        >
          Submit Test
    </Button> */}

     
    </Container>
  );
}

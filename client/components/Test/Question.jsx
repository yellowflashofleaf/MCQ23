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
  RadioGroup,
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

export default function Questions() {

  const [value, setValue] = useState('1')

  return (
    <Container maxW={"6xl"} ml={20} mt={24}>
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
            Question No
          </Text>
          <Text fontSize="3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
        </Stack>

        <Flex>
          <Divider
            orientation="vertical"
            marginLeft="2"
            borderColor={useColorModeValue("gray.300", "gray.700")}
          ></Divider>
          <SimpleGrid ml="6" columns={1} spacingX="20px" spacingY="20px">
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column" spacing={16} mt="16">
                <Radio value="1"> <Text fontWeight={600} fontSize='x-large' ml='4'>First</Text></Radio>
                <Radio value="2"><Text fontWeight={600} fontSize='x-large' ml='4'>Second</Text></Radio>
                <Radio value="3"><Text fontWeight={600} fontSize='x-large' ml='4'>Third</Text></Radio>
                <Radio value="4"><Text fontWeight={600} fontSize='x-large' ml='4'>Fourth</Text> </Radio>
              </Stack>
            </RadioGroup>
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

      <Box mt={48}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <HStack>
            <Button variant="outline">
              <ArrowBackIcon /> Previous
            </Button>
            <Button ml={8} variant="outline">
              Next <ArrowForwardIcon />
            </Button>
            <Button colorScheme="red" variant="solid">
              {" "}
              Clear{" "}
            </Button>
            <Button colorScheme="yellow" variant="solid">
              {" "}
              Mark for Review
            </Button>
          </HStack>
        </Container>
      </Box>
    </Container>
  );
}

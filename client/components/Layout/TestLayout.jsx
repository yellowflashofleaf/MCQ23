import {
  Box,
  Stack,
  Flex,
  Text,
  Container,
  SimpleGrid,
  useColorModeValue,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Nav from "../Navbar";
import Questions from "../Test/Question";

function TestLayout() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ];

  return (
    <>
      <Nav />

      <Flex h="92.5vh">
        {/* Question section start */}

        <Box>
          <Questions />
        </Box>

        {/* Question section end */}

        {/* Side section for showing legends and question completion status */}

        <Container maxW={"sm"} py={10} ml={64} mt={6} height="auto">
          {/*  legends section start*/}
          <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
            <Box
              height="auto"
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"md"}
              p={"6"}
            >
              <Text fontWeight={600} fontSize="2xl">
                Questions
              </Text>
              <Center>
                <SimpleGrid columns={3} mt={8} spacingX='50px' mb="8" spacingY="10px">
                  {array.map((val) => (
                    <Button
                      w="15%"
                      borderRadius={"3rem"}
                      colorScheme="blue"
                      key={val}
                    >
                      {val}
                    </Button>
                  ))}
                </SimpleGrid>
              </Center>
              <Button colorScheme={"green"} w="100%">
                {" "}
                Submit Test{" "}
              </Button>
            </Box>
          </SimpleGrid>

          {/*  legends section end*/}
        </Container>
      </Flex>
    </>
  );
}

export default TestLayout;

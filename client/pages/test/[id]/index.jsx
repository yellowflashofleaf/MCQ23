import { Box, Stack,Flex ,Text, Container,SimpleGrid,useColorModeValue,Button} from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/navbar";
import Questions from "../../components/question";


function MCQ_TEST() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ];

  return (
    <React.Fragment>
      <Nav />

      <Flex>

        {/* Question section start */}

        <Box>
          <Questions />
        </Box>
          
        {/* Question section end */}

        {/* Side section for showing legends and question completion status */} 

        <Container maxW={"md"} py={10} ml={64} mt={6} height="auto">
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
                Legends
              </Text>
              <Stack direction="column" mt={6}>
                <Flex>
                  <Box
                    as="button"
                    borderRadius="md"
                    bg="green.300"
                    color="white"
                    px={3}
                    h={6}
                  ></Box>
                  <Text fontWeight={600} ml="4">
                    Answered Questions
                  </Text>
                </Flex>
                <Flex>
                  <Box
                    as="button"
                    borderRadius="md"
                    bg="tomato"
                    color="white"
                    px={3}
                    h={6}
                  ></Box>
                  <Text fontWeight={600} ml="4">
                    Unanswered Questions
                  </Text>
                </Flex>
                <Flex>
                  <Box
                    as="button"
                    borderRadius="md"
                    bg="yellow.300"
                    color="white"
                    px={3}
                    h={6}
                  ></Box>
                  <Text fontWeight={600} ml="4">
                    Bookmarked Questions
                  </Text>
                </Flex>
              </Stack>

              <Text fontWeight={600} mt={16} fontSize="2xl">
                Attempt Summary
              </Text>
              <SimpleGrid columns={3} mt={8} spacingX="20px" spacingY="10px">
                {array.map((val) => (
                  <Button colorScheme="teal" variant="outline" key={val} 
                 
                  >
                    {val}
                  </Button>
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>
          
           {/*  legends section end*/}
        </Container>
          
      </Flex>
    </React.Fragment>
  );
}

export default MCQ_TEST;

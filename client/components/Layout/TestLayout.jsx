import {
  Box,
  Flex,
  Text,
  Container,
  SimpleGrid,
  useColorModeValue,
  Button,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../Navbar";
import Questions from "../Test/Question";
import { fetchData } from "../../api/API";
import useSWR from "swr";
import { apiData } from "../../util/apiData";
import Instruction from "../Test/Instruction";

function TestLayout() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ];
  const router = useRouter();

  const { id } = router.query;
  const [alert, setAlert] = useState(document.fullscreenElement);
  const [exitCount, setExitCount] = useState(0);

  function toggleFullscreen() {
    document.documentElement.requestFullscreen();
    setAlert(false);
  }
  
  function getQuestion(){
    const { data,error } = useSWR(`${apiData.url}api/question/list/${id}`, fetchData);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
  
  const { data, isLoading, isError } = getQuestion();


  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setAlert(document.fullscreenElement);
      if (!document.fullscreenElement) {
        setExitCount(exitCount + 1);
      }
    });
  }, [document.fullscreenElement]);


  if(isLoading){
    return (
      <Center >
         <Spinner size="xl" />;
      </Center>
    );
  }

  if(isError) {
    return(
      <Center>
         Questions not found
      </Center>
    )
  }

  return (
    <>
      {alert ? (
        <>
          <Nav />
          <Instruction />
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
                    <SimpleGrid
                      columns={3}
                      mt={8}
                      spacingX="50px"
                      mb="8"
                      spacingY="10px"
                    >
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
      ) : (
        <Alert
          status="warning"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="100vh"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Warning
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Test can only be given in Full Screen Mode
          </AlertDescription>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={toggleFullscreen}
          >
            Full Screen
          </Button>
        </Alert>
      )}
    </>
  );
}

export default TestLayout;

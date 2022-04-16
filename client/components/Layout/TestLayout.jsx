import {
  Box,
  Flex,
  Text,
  Container,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Button,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Nav from "../Navbar";
import Question from "../Test/Question";
import { fetchData } from "../../api/API";
import useSWR from "swr";
import { apiData } from "../../util/apiData";
import Instruction from "../Test/Instruction";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { handleSubmission, sendAnswer } from "../../api/TestAPI";
function TestLayout() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ];
  const router = useRouter();

  const { id } = router.query;
  const [alert, setAlert] = useState(document.fullscreenElement);
  const [exitCount, setExitCount] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState();

  function getQuestion() {
    const { data, error } = useSWR(
      `${apiData.url}api/question/list/${id}`,
      fetchData
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }

  const Submit = () =>{
       handleSubmission(id).then((res) => {
        Router.push("/submit");
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Test could'nt be submitted",
          status: "error",
          duration: 2000,
        });
      });
       
  }



  const { data, isLoading, isError } = getQuestion();
  useEffect(() => {
    setQuestions(data);
  }, [data]);

  function toggleFullscreen() {
    document.documentElement.requestFullscreen();
    setAlert(false);
  }
  const onClick = (event) => {
    if (event === "next") {
      if (questionNumber < data.length - 1) {
        setQuestionNumber(questionNumber + 1);
      }
    } else if (event === "previous") {
      if (questionNumber > 0) {
        setQuestionNumber(questionNumber - 1);
      }
    } else if (event === "clear") {
      //IndexDB reset momentum
    } else if (event === "review") {
      // Review Momentum
    }
  };
  const onSelectOption = (option) => {
    let temp = questions;
    temp[questionNumber].answer = option;
    sendAnswer(temp[questionNumber]).then(() => setQuestions(temp));
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setAlert(document.fullscreenElement);
      if (!document.fullscreenElement) {
        setExitCount(exitCount + 1);
      }
      if(exitCount==3){
        handleSubmission(id).then((res) => {
          Router.push("/autosubmit");
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Test could'nt be submitted",
            status: "error",
            duration: 2000,
          });
        });
      }
    });
  }, [document.fullscreenElement]);

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />;
      </Center>
    );
  }

  if (isError) {
    return <Center>Questions not found</Center>;
  }

  return (
    <>
      {alert ? (
        <>
          <Nav />
          <Instruction />
          <Flex h="80.5vh">
            {/* Question section start */}

            <Box w="80%" px="2%">
              {questions && (
                <Question
                  question={questions[questionNumber]}
                  questionNumber={questionNumber}
                  onSelectOption={onSelectOption}
                />
              )}
            </Box>

            {/* Question section end */}

            {/* Side section for showing legends and question completion status */}

            <Container w={"20%"} px="2%" py={10} mt={6} height="auto">
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
                      {data.map((val, index) => (
                        <Button
                          w="15%"
                          borderRadius={"3rem"}
                          colorScheme={val.review_status ? "yellow" : "blue"}
                          key={index}
                          onClick={() => setQuestionNumber(index)}
                        >
                          {index + 1}
                        </Button>
                      ))}
                    </SimpleGrid>
                  </Center>
                  <Button colorScheme={"green"} w="100%" onClick={Submit}>
                    {" "}
                    Submit Test{" "}
                  </Button>
                </Box>
              </SimpleGrid>

              {/*  legends section end*/}
            </Container>
          </Flex>
          <HStack ml="3%">
            <Button variant="outline" onClick={() => onClick("previous")}>
              <ArrowBackIcon /> Previous
            </Button>
            <Button variant="outline" onClick={() => onClick("next")}>
              Next <ArrowForwardIcon />
            </Button>
            <Button
              colorScheme="red"
              variant="solid"
              onClick={() => onClick("clear")}
            >
              {" "}
              Clear{" "}
            </Button>
            <Button
              colorScheme="yellow"
              variant="solid"
              onClick={() => onClick("review")}
            >
              {" "}
              Mark for Review
            </Button>
          </HStack>
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

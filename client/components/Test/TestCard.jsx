import {
  Button,
  chakra,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Router from "next/router";

function TestCard(props) {
  const { fk_event, id, started, finished } = props;
  const onClick = () => {
    Router.push(`/test/${id}`);
  };
  const checkDates = () => {
    console.log(new Date(fk_event.start_time));
    console.log(new Date());
    console.log(new Date(fk_event.end_time));
    if (
      (new Date() - new Date(fk_event.end_time)) / 60000 < 0 &&
      (new Date() - new Date(fk_event.start_time)) / 60000 > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Flex
      boxShadow={"lg"}
      width={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        {/* TODO: Check test redirect */}
        {/* TODO: Code and image in question */}
        {/* TODO: Event Images */}
        {/* TODO: Style Countdown and final touchups */}
        <Text fontWeight={"bold"} fontSize={"4xl"}>
          {fk_event.name}
        </Text>
        <Text fontSize={"2xl"}>Time:</Text>
        {finished ? (
          <Text mt={3}>Already Attempted</Text>
        ) : (
          <Button
            mt={4}
            width={40}
            colorScheme={"teal"}
            disabled={checkDates() ? false : true}
            onClick={onClick}
          >
            Give Contest
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default TestCard;

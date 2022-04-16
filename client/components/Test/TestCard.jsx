import { Button, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import Router from "next/router";

function TestCard(props) {
  const { fk_event, id, started } = props;
  const onClick = () => {
    Router.push(`/test/${id}`);
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
        <chakra.h1 fontWeight={"bold"} fontSize={30}>
          {fk_event.name}
        </chakra.h1>

        <chakra.h3 fontWeight={"bold"} fontSize={30}>
          Status - {started ? "Available" : "Not Available"}
        </chakra.h3>

        <Button
          mt={4}
          width={40}
          colorScheme={"teal"}
          disabled={
            (new Date() - new Date(fk_event.end_time)) / 60000 > 0
              ? true
              : false
          }
          onClick={onClick}
        >
          Give Contest
        </Button>
      </Flex>
    </Flex>
  );
}

export default TestCard;

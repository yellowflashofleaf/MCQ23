import { Button, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
function TestCard(props) {
  const { fk_event, id, started } = props;
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

        <Button mt={4} width={40} colorScheme={"teal"} disabled={!started}>
          Give Contest
        </Button>
      </Flex>
    </Flex>
  );
}

export default TestCard;

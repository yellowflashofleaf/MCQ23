import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import Nav from '../../components/Navbar'
import useSWR from "swr";
import { apiData } from "../../util/apiData";
import { getEvents } from "../../components/Layout/UserAPI";

import TestCard from "../../components/Test/TestCard";

export default function availableTests() {
 

  function getEvent() {
    const { data,error } = useSWR(`${apiData.url}event/list`, getEvents);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }

  const { data, isLoading, isError } = getEvent();

  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (isError) {
    return <div>Error Loading</div>;
  }

  return (
    <div>
      <Nav/>

      <Flex
        textAlign={"center"}
        pt={3}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <chakra.h1
            py={5}
            fontSize={48}
            fontWeight={"bold"}
            color={useColorModeValue("gray.700", "gray.50")}
          >
            Registered Contests
          </chakra.h1>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          {data.map((cardInfo, index) => (
            <TestCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </div>
  );
}

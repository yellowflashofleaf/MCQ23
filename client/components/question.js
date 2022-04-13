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
  } from '@chakra-ui/react';
  
 import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'; 
import { useState } from 'react';


  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Radio><Text ml='8' fontWeight={600} fontSize='2xl'>{text}</Text></Radio> 
      </Stack>
    );
  };
  
  export default function Questions() {

    const[status,showStatus] = useState(false);
    

    return (
      <Container maxW={"6xl"} py={12} ml={20} mt={24}>
       
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
              <Flex spacing={4}>
                <Button colorScheme="red" variant="solid" ml="32">
                  {" "}
                  Clear{" "}
                </Button>
                <Button colorScheme="yellow" variant="solid" ml="16">
                  {" "}
                  Mark for Review
                </Button>
              </Flex>
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
            <Stack direction={"row"}>
              <Button colorScheme="teal"> Submit Test </Button>
            </Stack>
            <Flex>
              <Button colorScheme="teal" variant="outline">
                <ArrowBackIcon mr={2} /> Previous
              </Button>
              <Button ml={8} colorScheme="teal" variant="outline">
                Next <ArrowForwardIcon ml={2} />
              </Button>
            </Flex>
          </Container>
        </Box>
      </Container>
    );
  }
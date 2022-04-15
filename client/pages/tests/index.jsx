import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { SwitchThemeButton } from '../../components/Util/SwitchTheme';



const testimonials = [
  {
    contestName: 'Contest1',
    contestId:1,
    Availablity: true,
  
  },
  {
    contestName: 'Contest2',
    contestId:2,
    Availablity: false,
  },
  {
    contestName: 'Contest3',
    contestId:3,
    Availablity: false,
  },
  {
    contestName: 'Contest4',
    contestId:1,
    Availablity: true,
  },
];



function TestimonialCard(props) {
  const { contestName, contestId, Availablity } = props;
  return (
    <Flex
      boxShadow={'lg'}
      width={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
     >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.h1
        
         fontWeight={"bold"}
         fontSize={30}>
         {contestName}
        </chakra.h1> 

        <chakra.h3
         fontWeight={"bold"}
         fontSize={30}>
         Status - {Availablity ? 'Available' : 'Not Available'}
        </chakra.h3> 
        
        <Button mt={4} width={40} colorScheme={'teal'}
        disabled={!Availablity}>Give Contest</Button>
       
      </Flex>
    
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <>
      <Flex align={"flex-end"}>
        <SwitchThemeButton />
      </Flex>

      <Flex
        textAlign={"center"}
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <chakra.h3
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"purple.400"}
          >
            Pulzion 22
          </chakra.h3>
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
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
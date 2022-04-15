import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";
import { SwitchThemeButton } from "../../components/Util/SwitchTheme";
import Router from "next/router";

function Loginpage() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validate(email) {
    return re.test(email.toLowerCase());
  }

  function Submit() {
    if (!validate(email)) {
      window.alert("Incorrect Email");
      return;
    }
    Router.push("/availableTests");
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={"8"} maxW={"max"} mx={"auto"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"md"}
            p={"8"}
          >
            <Stack spacing={"8"}>
              <FormControl id="email" isRequired>
                <FormLabel fontWeight={"semibold"}>Email Address</FormLabel>
                <Input
                  type={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel fontWeight={"semibold"}>Password</FormLabel>
                <Input
                  type={"password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={Submit}
              >
                Sign in
              </Button>
            </Stack>
          </Box>

          <Center>
            <SwitchThemeButton />
          </Center>
        </Stack>
      </Flex>
    </>
  );
}

export default Loginpage;

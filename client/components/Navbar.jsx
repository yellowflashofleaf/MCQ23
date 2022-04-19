import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Center,
  Text,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { SwitchThemeButton } from "./Util/SwitchTheme";
import { userLogout } from "../api/UserAPI";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiData } from "../util/apiData";
import { fetchData } from "../api/API";
function Nav() {
  const { data } = useSWR(`${apiData.url}auth/users/me`, fetchData, {
    refreshInterval: 0,
  });
  const router = useRouter();
  return (
    <>
      <Box bg={useColorModeValue("light.100", "dark.100")} p={4} h="7.5vh">
        <Flex h="auto" alignItems={"center"} w="100%">
          <HStack spacing={7} w="100%">
            <Box>
              <Text fontWeight={800} fontSize="3xl">
                Pulzion 2022
              </Text>
            </Box>
            <Spacer />
            <SwitchThemeButton />
            {data && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"} p="3">
                  <Center>
                    <Stack>
                      <div>{data.username}</div>
                      <Button
                        onClick={() => {
                          userLogout();
                          router.push("/");
                        }}
                        variant="ghost"
                      >
                        Logout
                      </Button>
                    </Stack>
                  </Center>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;

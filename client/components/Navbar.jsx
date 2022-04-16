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
} from "@chakra-ui/react";
import { SwitchThemeButton } from "./Util/SwitchTheme";

function Nav() {

  //TODO: Write User Fetching for dynamic Menu Rendering
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
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Button>Logout</Button>
                </Center>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;

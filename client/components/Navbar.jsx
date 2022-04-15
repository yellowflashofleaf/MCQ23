import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, TimeIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("light.100", "dark.100")} p={4} h='7.5vh'>
        <Flex h="auto" alignItems={"center"}  w='100%'>
          <HStack spacing={7} w='100%'>
            <Box>
              <Text fontWeight={800} fontSize="3xl">
                Pulzion 2022
              </Text>
            </Box>
            <Spacer/>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

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
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
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

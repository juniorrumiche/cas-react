import {
  Avatar,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as LinkRoute } from "react-router-dom";

import {
  MdDashboard,
  MdEqualizer,
  MdHowToReg,
  MdLogout,
  MdPerson,
  MdSpatialAudio,
  MdWorkHistory,
} from "react-icons/md";

interface NavitemProps {
  children?: ReactNode;
}
const NavItem = ({ children }: NavitemProps) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      width="100%"
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("gray.50", "whiteAlpha.50"),
        }}
      >
        <HStack mx={5}>{children}</HStack>
      </Flex>
    </Link>
  );
};

interface SidebarProps {
  isOpen: boolean;
  onClose: any;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent
          boxShadow="lg"
          bg={useColorModeValue("white", "gray.900")}
        >
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Center>
              <Avatar size={"xl"} />
            </Center>
            <br />
            <Center>
              <Text>Username</Text>
            </Center>
          </DrawerHeader>

          <DrawerBody p={0}>
            <NavItem>
              <MdDashboard size={25} />
              <LinkRoute to="/admin/dashboard">Dashborad</LinkRoute>
            </NavItem>

            <NavItem>
              <MdPerson size={25} />
              <LinkRoute to="/admin/buyman">Comprador</LinkRoute>
            </NavItem>

            <NavItem>
              <MdHowToReg size={25} />
              <Text>Vendedores</Text>
            </NavItem>

            <NavItem>
              <MdSpatialAudio size={25} />
              <Text>Contactos</Text>
            </NavItem>

            <NavItem>
              <MdWorkHistory size={25} />
              <Text>Inmubles</Text>
            </NavItem>

            <NavItem>
              <MdEqualizer size={25} />
              <Text>Reportes</Text>
            </NavItem>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Username</Text>
              <IconButton icon={<MdLogout size={25} />} aria-label=".." />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

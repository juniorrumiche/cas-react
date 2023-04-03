import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useColorModeValue,
  Center,
  Box,
  Stack,
  Text,
  Avatar,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  MdAttachMoney,
  MdCalendarToday,
  MdEmail,
  MdFoodBank,
  MdMoney,
  MdPhone,
} from "react-icons/md";
import { DetailsDialogBuymanProps } from "../../types/componets.t";

//
export const DetailDialogBuyman = ({
  onClose,
  isOpen,
  buyman,
}: DetailsDialogBuymanProps) => {
  // return
  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius={5}
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("gray.500", "whiteAlpha.800")}
      >
        <ModalCloseButton />
        <ModalBody>
          <Center py={6}>
            <Box
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              p={2}
            >
              <Stack>
                <Stack direction={"column"} spacing={4} align={"center"}>
                  <Avatar
                    size="2xl"
                    src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                  />
                  <Text fontWeight={600} fontSize="lg" align='center'>
                    {buyman.name_comprador}
                  </Text>
                  <Text color="gray.500" fontSize="md">
                    {buyman.dni_comprador}
                  </Text>
                </Stack>

                <Text color={"gray.500"} align="center">
                  {buyman.history}
                </Text>
                <Grid mt={10} pt={5} templateColumns="repeat(2, 1fr)" gap={5}>
                  <GridItem w="100%" h="10" mb={2}>
                    <Stack spacing={2} align={"center"}>
                      <MdPhone size={20} />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {buyman.telf_comprador}
                      </Text>
                    </Stack>
                  </GridItem>

                  <GridItem w="100%" h="10" mb={2}>
                    <Stack spacing={2} align={"center"}>
                      <MdEmail size={20} />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {buyman.email_comprador}
                      </Text>
                    </Stack>
                  </GridItem>

                  <GridItem w="100%" h="10" mb={2}>
                    <Stack spacing={2} align={"center"}>
                      <MdCalendarToday size={20} />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {buyman.birthdate_comprador}
                      </Text>
                    </Stack>
                  </GridItem>

                  <GridItem w="100%" h="10" mb={2}>
                    <Stack spacing={2} align={"center"}>
                      <MdFoodBank size={20} />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {buyman.cod_banco ? buyman.cod_banco : "No definido"}
                      </Text>
                    </Stack>
                  </GridItem>

                  <GridItem w="100%" h="10" mb={2}>
                    <Stack spacing={2} align={"center"}>
                      <MdAttachMoney size={20} />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        ${buyman.importOriginal}
                      </Text>
                    </Stack>
                  </GridItem>

                  <GridItem w="100%" h="10" mb={2}>
                    <Stack spacing={2} align={"center"}>
                      <MdMoney size={20} />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        ${buyman.IngreBruto}
                      </Text>
                    </Stack>
                  </GridItem>
                </Grid>
              </Stack>
            </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

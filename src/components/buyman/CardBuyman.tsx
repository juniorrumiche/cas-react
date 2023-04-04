// imports
//
import { memo } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { CardBuymanProps } from "../../types/componets.t";
import { DeleteDialogBuyman } from "./DeleteDialogBuyman";
import { DetailDialogBuyman } from "./DetailsDialogBuyman";
import { EditDialogBuyman } from "./EditDialogBuyman";

//component
export const CardBuyman = memo((props: CardBuymanProps) => {
  // para los modales
  // //for delete
  const {
    isOpen: isOpenDelete,
    onOpen: openDelete,
    onClose: closeDelete,
  } = useDisclosure();

  //for details
  const {
    isOpen: isOpenDetails,
    onOpen: openDetails,
    onClose: closeDetails,
  } = useDisclosure();

  // for edit
  const {
    isOpen: isOpenEdit,
    onOpen: openEdit,
    onClose: closeEdit,
  } = useDisclosure();

  // para los modales
  // return card for buyman
  return (
    <>
      <Box
        my={3}
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://www.contabeis.com.br/assets/img/news/a_6353_5636cbbbf9d5624b172862ee276bec73.jpg"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading
              fontSize={18}
              textAlign="center"
              fontWeight={500}
              fontFamily={"body"}
            >
              {props.buyman.name_comprador}
            </Heading>
            <Text color={"gray.500"}>{props.buyman.dni_comprador}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>Telefono</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                {props.buyman.telf_comprador}
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>Importe</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                ${props.buyman.IngreBruto}
              </Text>
            </Stack>
          </Stack>

          <Flex justifyContent="center" gap={3} p={3}>
            <IconButton
              onClick={openDetails}
              rounded="3xl"
              aria-label="..."
              icon={<MdRemoveRedEye />}
            />
            <IconButton
              onClick={openDelete}
              rounded="3xl"
              aria-label="..."
              icon={<MdDelete />}
            />
            <IconButton
              onClick={openEdit}
              rounded="3xl"
              aria-label="..."
              icon={<MdEdit />}
            />
          </Flex>
          <DeleteDialogBuyman
            {...props.buyman}
            isOpen={isOpenDelete}
            onClose={closeDelete}
          />

          <DetailDialogBuyman
            isOpen={isOpenDetails}
            onClose={closeDetails}
            buyman={props.buyman}
          />
          <EditDialogBuyman
            onClose={closeEdit}
            isOpen={isOpenEdit}
            buyman={props.buyman}
          />
        </Box>
      </Box>
    </>
  );
});

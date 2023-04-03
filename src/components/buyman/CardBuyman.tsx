// imports
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { CardBuymanProps } from "../../types/componets.t";
import { BaseCard } from "../base/BaseCard";
import { DeleteDialogBuyman } from "./DeleteDialogBuyman";
import { DetailDialogBuyman } from "./DetailsDialogBuyman";
import { EditDialogBuyman } from "./EditDialogBuyman";

//component
export const CardBuyman = (props: CardBuymanProps) => {
    console.log('renderizando')
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
    <BaseCard>
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
          rounded="3xl" aria-label="..." icon={<MdEdit />} />
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
        <EditDialogBuyman onClose={closeEdit} isOpen={isOpenEdit} buyman={props.buyman} />
      </Box>
    </BaseCard>
  );
};

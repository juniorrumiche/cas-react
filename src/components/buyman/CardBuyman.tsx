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

//component
export const CardBuyman = (props: CardBuymanProps) => {
  // para los modales
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
            rounded="3xl"
            aria-label="..."
            icon={<MdRemoveRedEye />}
          />
          <IconButton
            onClick={openEdit}
            rounded="3xl"
            aria-label="..."
            icon={<MdDelete />}
          />
          <IconButton rounded="3xl" aria-label="..." icon={<MdEdit />} />
        </Flex>
        <DeleteDialogBuyman
          {...props.buyman}
          isOpen={isOpenEdit}
          onClose={closeEdit}
        />
      </Box>
    </BaseCard>
  );
};

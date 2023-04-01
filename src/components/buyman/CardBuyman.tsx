// imports
import { Box, Stack, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { BuymanProps } from "../../types/buyman.t";
import { BaseCard } from "../base/BaseCard";

//component
export const CardBuyman = (props: BuymanProps) => {
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
            {props.name_comprador}
          </Heading>
          <Text color={"gray.500"}>{props.dni_comprador}</Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Telefono</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {props.telf_comprador}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Importe</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              ${props.IngreBruto}
            </Text>
          </Stack>
        </Stack>

        <Flex justifyContent="center" gap={3} p={3}>
          <IconButton
            rounded="3xl"
            aria-label="..."
            icon={<MdRemoveRedEye />}
          />
          <IconButton rounded="3xl" aria-label="..." icon={<MdDelete />} />
          <IconButton rounded="3xl" aria-label="..." icon={<MdEdit />} />
        </Flex>
      </Box>
    </BaseCard>
  );
};

import {
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sleep } from "../../api/buyman";
import { refreshing } from "../../redux/slices/global/slices";
import { DeleteDialgoBuymanProps } from "../../types/componets.t";
import { BaseDeleteDialog } from "../base/BaseDeleteDialog";

export const DeleteDialogBuyman = (props: DeleteDialgoBuymanProps) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  //delete buyman
  const deleteBuyman = async () => {
    setLoading(true);
    await sleep(1000);
    try {
      await axios.delete(`/api/buyman/delete/${props.cod_comprador}`);
      props.onClose();
      dispatch(refreshing(Math.random()));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;
        toast({
          status: "error",
          title: "error",
          isClosable: true,
          description: data.error,
          duration: 1500,
        });
      }
    }
    setLoading(false);
  };
  //return componente
  return (
    <BaseDeleteDialog isOpen={props.isOpen} onClose={props.onClose}>
      <AlertDialogBody>
        Estas seguro que deseas eliminar <b>{props.name_comprador} </b>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button onClick={props.onClose}>Cancelar</Button>
        <Button
          loadingText=""
          isLoading={loading}
          colorScheme="red"
          ml={3}
          onClick={deleteBuyman}
        >
          Eliminar
        </Button>
      </AlertDialogFooter>
    </BaseDeleteDialog>
  );
};

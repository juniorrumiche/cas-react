import { AlertDialogBody, AlertDialogFooter, Button } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshing } from "../../redux/slices/global/slices";
import { DeleteDialgoBuymanProps } from "../../types/componets.t";
import { BaseDeleteDialog } from "../base/BaseDeleteDialog";

export const DeleteDialogBuyman = (props: DeleteDialgoBuymanProps) => {
  const dispatch = useDispatch();
  //delete buyman
  const deleteBuyman = async () => {
    try {
      axios.delete(`/api/buyman/delete/${props.cod_comprador}`);
      props.onClose();
      dispatch(refreshing(Math.random()));
    } catch (error) {
      console.log(error);
    }
  };
  //return componente
  return (
    <BaseDeleteDialog isOpen={props.isOpen} onClose={props.onClose}>
      <AlertDialogBody>
        Estas seguro que deseas eliminar <b>{props.name_comprador} </b>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button onClick={props.onClose}>Cancelar</Button>
        <Button colorScheme="red" ml={3} onClick={deleteBuyman}>
          Eliminar
        </Button>
      </AlertDialogFooter>
    </BaseDeleteDialog>
  );
};

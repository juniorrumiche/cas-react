import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BaseDialogProps } from "../../types/componets.t";

export const BaseDeleteDialog = ({
  isOpen,
  children,
  onClose,
}: BaseDialogProps) => {
  const cancelRef = useRef(null);
  /*
   * =========================================================*/
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar
            </AlertDialogHeader>

            {children}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

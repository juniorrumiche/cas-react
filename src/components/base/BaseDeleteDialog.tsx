import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  useColorModeValue,
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
          <AlertDialogContent
            borderRadius={5}
            boxShadow={"2xl"}
            bg={useColorModeValue("white", "gray.900")}
            color={useColorModeValue("gray.500", "whiteAlpha.800")}
          >
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

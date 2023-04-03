import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  FormControl,
  ModalCloseButton,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  useColorModeValue,
  Textarea,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { MdCardTravel, MdEmail, MdMoney } from "react-icons/md";
import { useDispatch } from "react-redux";
import { sleep } from "../../api/buyman";
import { refreshing } from "../../redux/slices/global/slices";
import { BuymanProps } from "../../types/buyman.t";

import { EditDialogBuymanProps } from "../../types/componets.t";

export const EditDialogBuyman = ({
  onClose,
  isOpen,
  buyman,
}: EditDialogBuymanProps) => {
  //states
  const [formData, setFormData] = useState<BuymanProps>(buyman);
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  //refs
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  // functions

  const handleForm = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    let target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //get dni
  //envia el formulario
  const sendForm = async () => {
    setloading(true);
    await sleep(2000);

    //converts the object to a form data
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    try {
      let response = await axios.post(
        `/api/buyman/edit/${buyman.cod_comprador}`,
        form
      );
      if (response.status == 201) {
        onClose();
        dispatch(refreshing(Math.random()));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let data = error.response?.data;
        toast({
          position: "bottom-right",
          status: "error",
          title: "error",
          description: data.error,
        });
      }
    }
    setloading(false);
  };

  // clears the form when the form is closed
  useEffect(() => {
    setFormData(buyman);
    return () => {
      // setFormData({});
    };
  }, [isOpen]);

  //return jsx
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={5}
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.900")}
          color={useColorModeValue("gray.500", "whiteAlpha.800")}
        >
          <ModalHeader>Agregar Comprador </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4} isRequired>
              <FormLabel>Correo</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdEmail />} />
                <Input
                  value={formData.email_comprador}
                  variant={useColorModeValue("outline", "filled")}
                  name="email_comprador"
                  onChange={(e) => handleForm(e)}
                  type="telf"
                  placeholder="Corero Electronico"
                />
              </InputGroup>
            </FormControl>

            <HStack mt={4} spacing={3}>
              <FormControl isRequired>
                <FormLabel>Importe Original</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdMoney />} />
                  <Input
                    value={formData.importOriginal}
                    variant={useColorModeValue("outline", "filled")}
                    name="importOriginal"
                    onChange={(e) => handleForm(e)}
                    type="number"
                    placeholder="Importe Original"
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Importe Bruto</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdMoney />} />
                  <Input
                    value={formData.IngreBruto}
                    variant={useColorModeValue("outline", "filled")}
                    name="IngreBruto"
                    onChange={(e) => handleForm(e)}
                    type="telf"
                    placeholder="Importe Bruto"
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <FormControl mt={4} isRequired>
              <FormLabel>Historial Cliente</FormLabel>
              <Textarea
                value={formData.history}
                variant={useColorModeValue("outline", "filled")}
                name="history"
                onChange={(e) => handleForm(e)}
                rows={5}
              ></Textarea>
            </FormControl>

            <HStack mt={4} spacing={3}>
              <FormControl isRequired>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdCardTravel />} />
                  <Input
                    value={formData.telf_comprador}
                    variant={useColorModeValue("outline", "filled")}
                    name="telf_comprador"
                    onChange={(e) => handleForm(e)}
                    maxLength={9}
                    type="telf"
                    placeholder="Telefono"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Cumpleaños</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdMoney />} />
                  <Input
                    value={formData.birthdate_comprador}
                    variant={useColorModeValue("outline", "filled")}
                    name="birthdate_comprador"
                    onChange={(e) => handleForm(e)}
                    type="date"
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <FormControl mt={4} isRequired>
              <FormLabel>Banco</FormLabel>
              <Select
                value={formData.cod_banco}
                onChange={(e) => handleForm(e)}
                name="cod_banco"
                variant={useColorModeValue("outline", "filled")}
              >
                <option> seleccionar..</option>
                <option value="3"> No se</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              loadingText="actualizando"
              onClick={() => sendForm()}
              colorScheme="teal"
              mr={3}
            >
              Guarar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

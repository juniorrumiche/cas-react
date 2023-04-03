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
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import { MdCardTravel, MdEmail, MdMoney, MdPerson2 } from "react-icons/md";
import { useDispatch } from "react-redux";
import { refreshing } from "../../redux/slices/global/slices";
import { BuymanProps } from "../../types/buyman.t";

import { BaseDialogProps } from "../../types/componets.t";

export const DialogAddBuyman = ({ onClose, isOpen }: BaseDialogProps) => {
  //states
  const [formData, setFormData] = useState<BuymanProps>({});
  const dispatch = useDispatch();

  //refs
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  // functions

  const handleForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = async () => {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    try {
      let response = await axios({
        url: "/api/buyman/add",
        method: "POST",
        data: form,
      });

      if (response.status == 201) {
        onClose();
        dispatch(refreshing(Math.random()));
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        <ModalContent color={useColorModeValue("gray.500", "whiteAlpha.800")}>
          <ModalHeader>Agregar Comprador </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdPerson2 />} />
                <Input
                  onChange={(e) => handleForm(e)}
                  name="name_comprador"
                  variant={useColorModeValue("outline", "filled")}
                  // value="hola mundo"
                  placeholder="Nombres "
                />
              </InputGroup>
            </FormControl>

            <HStack mt={4} spacing={3}>
              <FormControl isRequired>
                <FormLabel>DNI</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdCardTravel />} />
                  <Input
                    variant={useColorModeValue("outline", "filled")}
                    name="dni_comprador"
                    onChange={(e) => handleForm(e)}
                    ref={initialRef}
                    maxLength={9}
                    type="telf"
                    placeholder="DNI"
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Telefono</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdCardTravel />} />
                  <Input
                    variant={useColorModeValue("outline", "filled")}
                    name="telf_comprador"
                    onChange={(e) => handleForm(e)}
                    maxLength={9}
                    type="telf"
                    placeholder="Telefono"
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <FormControl mt={4} isRequired>
              <FormLabel>Historial Cliente</FormLabel>
              <Textarea
                variant={useColorModeValue("outline", "filled")}
                name="history"
                onChange={(e) => handleForm(e)}
                rows={5}
              ></Textarea>
            </FormControl>

            <HStack mt={4} spacing={3}>
              <FormControl isRequired>
                <FormLabel>Importe Original</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdMoney />} />
                  <Input
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
              <FormLabel>Correo</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdEmail />} />
                <Input
                  variant={useColorModeValue("outline", "filled")}
                  name="email_comprador"
                  onChange={(e) => handleForm(e)}
                  type="telf"
                  placeholder="Importe Bruto"
                />
              </InputGroup>
            </FormControl>

            <HStack mt={4} spacing={3}>
              <FormControl isRequired>
                <FormLabel>Cumpleaños</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdMoney />} />
                  <Input
                    variant={useColorModeValue("outline", "filled")}
                    name="birthdate_comprador"
                    onChange={(e) => handleForm(e)}
                    type="date"
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Modalidad Contrato</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdMoney />} />
                  <Input
                    variant={useColorModeValue("outline", "filled")}
                    type="text"
                    placeholder="Modalidad"
                  />
                </InputGroup>
              </FormControl>
            </HStack>

            <FormControl mt={4} isRequired>
              <FormLabel>Banco</FormLabel>
              <Select variant={useColorModeValue("outline", "filled")}>
                <option value="1">...</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => sendForm()} colorScheme="blue" mr={3}>
              Guarar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

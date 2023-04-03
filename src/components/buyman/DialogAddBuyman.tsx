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
import {
  MdCardTravel,
  MdEmail,
  MdMergeType,
  MdMoney,
  MdPerson2,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { getNameByDNI, sleep } from "../../api/buyman";
import { refreshing } from "../../redux/slices/global/slices";
import { BuymanProps } from "../../types/buyman.t";

import { BaseDialogProps } from "../../types/componets.t";

export const DialogAddBuyman = ({ onClose, isOpen }: BaseDialogProps) => {
  //states
  const [formData, setFormData] = useState<BuymanProps>({});
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  //refs
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // functions

  const handleForm = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let target = e.target;

    // change the value when the ID is complete
    if (target.name == "dni_comprador") {
      if (target.value.length == 8) {
        let name = await getNameByDNI(target.value);
        nameRef.current?.setAttribute("value", name);
      } else {
        nameRef.current?.setAttribute("value", "");
      }
    }

    //defines the value of the inputs
    setFormData({
      ...formData,
      [target.name]: target.value,
      name_comprador: nameRef.current?.value,
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
      let response = await axios.post("/api/buyman/add", form);
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
    return () => {
      setFormData({});
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
        <ModalContent color={useColorModeValue("gray.500", "whiteAlpha.800")}>
          <ModalHeader>Agregar Comprador </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isReadOnly isRequired>
              <FormLabel>Nombre</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdPerson2 />} />
                <Input
                  isInvalid={nameRef.current?.value.length ? false : true}
                  name="name_comprador"
                  ref={nameRef}
                  variant={useColorModeValue("outline", "filled")}
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
                    onChange={async (e) => await handleForm(e)}
                    ref={initialRef}
                    maxLength={8}
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
                  placeholder="Corero Electronico"
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
                  <InputLeftElement children={<MdMergeType />} />
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
                <option></option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
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

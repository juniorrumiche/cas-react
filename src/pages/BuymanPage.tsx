import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { MdPlusOne, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Base } from "../components/base/Base";
import { CardBuyman } from "../components/buyman/CardBuyman";
import { setBuymans } from "../redux/slices/buyman/slices";
import { RootState } from "../redux/store";
//external module
import PullToRefresh from "react-simple-pull-to-refresh";
import { sleep } from "../api/buyman";
import { refreshing } from "../redux/slices/global/slices";
import { DialogAddBuyman } from "../components/buyman/DialogAddBuyman";

export const BuymanPage = () => {
  //staes
  // redux state
  const {
    isOpen: isOpenAdd,
    onOpen: openAdd,
    onClose: closeAdd,
  } = useDisclosure();
  const state = useSelector((state: RootState) => state.buymanSlice);
  const { refresh } = useSelector((state: RootState) => state.refreshSlice);
  const dispatch = useDispatch();

  //useeffetc
  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        let response = await axios.get("/api/buyman");
        dispatch(setBuymans(response.data));
      } catch (error) {
        console.log(error);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [refresh]);
  //
  //return
  return (
    <Base>
      <Box p={5}>
        <Flex
          p={5}
          borderRadius="2xl"
          background={useColorModeValue("gray.50", "whiteAlpha.50")}
          justifyContent="space-between"
          gap={5}
          alignItems="center"
        >
          <Button onClick={() => openAdd()} leftIcon={<MdPlusOne />}>
            Agregar
          </Button>
          <InputGroup w={{ base: "40%", md: "30%", lg: "20%" }}>
            <InputLeftElement children={<MdSearch />} />
            <Input type="text" />
          </InputGroup>
        </Flex>
      </Box>

      <PullToRefresh
        onRefresh={async () => {
          await sleep(2000);
          dispatch(refreshing(Math.random()));
        }}
      >
        <Flex
          // background={useColorModeValue("gray.50", "whiteAlpha.50")}
          gap={10}
          p={5}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
          }}
          wrap="wrap"
        >
          {state.buyman &&
            state.buyman.map((buyman, index) => (
              <CardBuyman buyman={buyman} key={index} />
            ))}
        </Flex>
      </PullToRefresh>
      <DialogAddBuyman isOpen={isOpenAdd} onClose={closeAdd} />
    </Base>
  );
};

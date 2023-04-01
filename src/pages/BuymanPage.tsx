import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdPlusOne, MdRefresh, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Base } from "../components/base/Base";
import { CardBuyman } from "../components/buyman/CardBuyman";
import { setBuymans } from "../redux/slices/buyman/slices";
import { RootState } from "../redux/store";
//external module
import PullToRefresh from "react-simple-pull-to-refresh";
import { sleep } from "../api/buyman";

export const BuymanPage = () => {
  //staes
  const [refresh, setRefresh] = useState(1);
  // redux state
  const state = useSelector((state: RootState) => state.buymanSlice);
  const dispatch = useDispatch();

  //useeffetc
  useEffect(() => {
    const timeout = setTimeout(async () => {
      console.log("ejecutando");
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
      <Flex p={5} justifyContent="flex-end" gap={5} alignItems="center">
        <InputGroup w={{ base: "20%" }}>
          <InputLeftElement children={<MdSearch />} />
          <Input type="text" />
        </InputGroup>
      </Flex>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(2000);
          setRefresh(refresh + 1);
        }}
      >
        <Flex
          transition="all"
          transitionDuration="1s"
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
              <CardBuyman {...buyman} key={index} />
            ))}
        </Flex>
      </PullToRefresh>
    </Base>
  );
};

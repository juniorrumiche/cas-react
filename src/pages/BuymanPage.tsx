import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight, MdPlusOne, MdSearch } from "react-icons/md";
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
import { BuymanProps } from "../types/buyman.t";
import { setBanks } from "../redux/slices/bank/slices";
export const BuymanPage = () => {
  //staes
  // redux state
  const {
    isOpen: isOpenAdd,
    onOpen: openAdd,
    onClose: closeAdd,
  } = useDisclosure();
  //redux states
  const state = useSelector((state: RootState) => state.buymanSlice);
  const dispatch = useDispatch();

  //stated
  const [dataFilter, setDataFilter] = useState<Array<BuymanProps>>();
  const { refresh } = useSelector((state: RootState) => state.refreshSlice);

  /*
   * ================================================================
   */
  const itemPerPage = 12;
  const [offsetPageStart, setOffsetPageStart] = useState(0);
  const [offsetPageEnd, setOffsetPageEnd] = useState(itemPerPage);

  /*
   * ================================================================
   */

  const paginationPrev = () => {
    setOffsetPageStart(offsetPageStart - itemPerPage);
    setOffsetPageEnd(offsetPageEnd - itemPerPage);
  };

  const paginationNext = () => {
    setOffsetPageStart(offsetPageStart + itemPerPage);
    setOffsetPageEnd(offsetPageEnd + itemPerPage);
  };

  //
  const filterData = useCallback(
    (query: string) => {
      setOffsetPageStart(0);
      setOffsetPageEnd(itemPerPage);
      let filter: Array<BuymanProps> | undefined = state.buyman?.filter(
        (data) =>
          `${data.name_comprador?.toLowerCase()} ${
            data.dni_comprador
          }`.includes(query.toLowerCase())
      );

      setDataFilter(filter);
    },
    [state.buyman]
  );

  /*
   * ================================================================
   */
  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        let respBuyman = await axios.get("/api/buyman");
        dispatch(setBuymans(respBuyman.data));
        setDataFilter(respBuyman.data);

        let respBank = await axios.get("/api/bank");
        dispatch(setBanks(respBank.data));
      } catch (error) {}
    }, 100);

    return () => clearTimeout(timeout);
  }, [refresh]);
  /*
   * ================================================================
   */
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
            <Input onChange={(e) => filterData(e.target.value)} type="text" />
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
          {dataFilter &&
            dataFilter
              .slice(offsetPageStart, offsetPageEnd)
              .map((buyman, index) => (
                <CardBuyman buyman={buyman} key={index} />
              ))}
        </Flex>
      </PullToRefresh>
      {offsetPageStart <= 0 ? null : (
        <IconButton
          onClick={paginationPrev}
          position="fixed"
          top="48%"
          left={5}
          icon={<MdArrowLeft size={35} />}
          aria-label="..."
        />
      )}
      {offsetPageEnd >= (dataFilter?.length || 0) ? null : (
        <IconButton
          position="fixed"
          onClick={paginationNext}
          top="48%"
          right={5}
          icon={<MdArrowRight size={30} />}
          aria-label="..."
        />
      )}

      <DialogAddBuyman isOpen={isOpenAdd} onClose={closeAdd} />
    </Base>
  );
};

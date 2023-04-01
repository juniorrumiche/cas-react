import { Avatar, Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { BaseProps } from "../../types/componets.t";

export const BaseCard = ({ children }: BaseProps) => {
  return (
    <>
      <Box
        my={3}
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://www.contabeis.com.br/assets/img/news/a_6353_5636cbbbf9d5624b172862ee276bec73.jpg"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        {children}
      </Box>
    </>
  );
};

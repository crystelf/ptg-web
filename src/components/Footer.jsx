import { Box, Text, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={{ base: "rgba(255,255,255,0.4)", _dark: "rgba(0, 0, 0, 0.4)" }}
      color={{ base: "black", _dark: "white" }}
      p={4}
      backdropFilter={"blur(10px)"}
      mt={"auto"}
      zIndex={10}
    >
      <Flex justify={"space-between"} wrap={"wrap"} fontSize={"sm"}>
        <Text>{`由晶灵云数据中心提供数据储存服务`}</Text>
        <Text>{`由晶灵机房提供运算服务`}</Text>
        <Text>{`由雾雨开发中心维护`}</Text>
      </Flex>
    </Box>
  );
}

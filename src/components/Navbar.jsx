import { Flex, Box, Spacer, Link, Image } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Navbar({ iconColor = "white" }) {
  return (
    <Flex
      p={2}
      bg={{
        base: "rgba(81,255,240,0.77)",
        _dark: "rgba(0, 0, 0, 0.6)",
      }}
      color={{ base: "black", _dark: "white" }}
      backdropFilter={"blur(6px)"}
      position={"fixed"}
      w={"100%"}
      zIndex={100}
    >
      <Box fontWeight={"bold"}>{`雾雨MC`}</Box>
      <Spacer />
      <Flex gap={4}>
        <Link href={"/"}>{`主页`}</Link>
        <Link href={"/docs"}>{`文档`}</Link>
        <Link href={"/about"}>{`关于`}</Link>
      </Flex>
      <Spacer />
      <ColorModeButton />
    </Flex>
  );
}

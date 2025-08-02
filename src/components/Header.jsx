"use client";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Button,
  Menu,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorMode } from "@/components/ui/color-mode";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { base: "white", _dark: "gray.800" };
  const borderColor = { base: "gray.200", _dark: "gray.700" };

  const navLinks = [
    { name: "无人机", href: "#drones" },
    { name: "电池改装", href: "/egg/fumu.html" },
    { name: "服务案例", href: "/egg/xiaomibl.html" },
    { name: "关于我们", href: "#about" },
  ];

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bgColor}
      boxShadow="sm"
      borderBottomWidth={1}
      borderColor={borderColor}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <NextLink href="/">
          <Heading as="h1" size="lg" cursor="pointer">
            <Box as="span" color="blue.500">
              PTG
            </Box>
            专业改装
          </Heading>
        </NextLink>

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <NextLink key={link.href} href={link.href}>
              <Box
                fontWeight="medium"
                _hover={{ color: "blue.500" }}
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  width: "0%",
                  height: "2px",
                  bg: "blue.500",
                  transition: "width 0.3s ease",
                }}
                _hover={{
                  _after: { width: "100%" },
                }}
              >
                {link.name}
              </Box>
            </NextLink>
          ))}
        </HStack>

        <HStack spacing={4}>
          <IconButton
            aria-label="切换主题"
            onClick={toggleColorMode}
            variant="ghost"
          >
            {colorMode === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </IconButton>

          <Menu.Root>
            <Menu.Trigger asChild>
              <IconButton
                aria-label="导航菜单"
                variant="outline"
                display={{ md: "none" }}
              >
                <FiMenu size={20} />
              </IconButton>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content>
                {navLinks.map((link) => (
                  <Menu.Item key={link.href} asChild>
                    <NextLink href={link.href}>{link.name}</NextLink>
                  </Menu.Item>
                ))}
                <Menu.Item color="blue.500" fontWeight="bold">
                  咨询热线: 666-6666-6666
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>

          <Button
            display={{ base: "none", md: "flex" }}
            colorScheme="blue"
            size="sm"
          >
            免费咨询
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

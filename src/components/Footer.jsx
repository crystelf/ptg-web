"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

export default function Footer() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.900";
  const textColor = colorMode === "light" ? "gray.600" : "gray.300";
  const borderColor = colorMode === "light" ? "gray.200" : "gray.700";

  const headingSize = useBreakpointValue({ base: "sm", md: "md" });
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const paddingY = useBreakpointValue({ base: 12, md: 16 });
  const spacing = useBreakpointValue({ base: 6, md: 10 });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  const footerLinks = [
    {
      title: "产品服务",
      links: [
        { name: "无人机改装", href: "#" },
        { name: "电池升级", href: "#" },
        { name: "维修保养", href: "#" },
        { name: "配件商城", href: "#" },
      ],
    },
    {
      title: "技术支持",
      links: [
        { name: "改装指南", href: "#" },
        { name: "常见问题", href: "#" },
        { name: "安全认证", href: "#" },
        { name: "固件升级", href: "#" },
      ],
    },
    {
      title: "关于我们",
      links: [
        { name: "公司简介", href: "#" },
        { name: "改装团队", href: "#" },
        { name: "客户案例", href: "#" },
        { name: "加入我们", href: "#" },
      ],
    },
  ];

  return (
    <Box bg={bgColor} color={textColor} pt={paddingY} pb={8}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <SimpleGrid columns={gridColumns} spacing={spacing}>
          {footerLinks.map((section) => (
            <Stack key={section.title} spacing={4} textAlign={textAlign}>
              <Heading as="h4" size={headingSize} mb={2}>
                {section.title}
              </Heading>
              <Stack
                spacing={2}
                align={textAlign === "center" ? "center" : "flex-start"}
              >
                {section.links.map((link) => (
                  <Box
                    key={link.name}
                    _hover={{ color: "blue.400" }}
                    cursor="pointer"
                    fontSize="sm"
                  >
                    {link.name}
                  </Box>
                ))}
              </Stack>
            </Stack>
          ))}

          <Stack spacing={4} textAlign={textAlign}>
            <Heading as="h4" size={headingSize}>
              联系我们
            </Heading>
            <Stack
              spacing={2}
              fontSize="sm"
              align={textAlign === "center" ? "center" : "flex-start"}
            >
              <Text>666-6666-6666</Text>
              <Text>114@514.com</Text>
              <Text>上海市浦东新区无人机产业园88号</Text>
              <Text>周一至周六 9:00-18:00</Text>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box
          borderTopWidth={1}
          borderColor={borderColor}
          mt={{ base: 8, md: 12 }}
          pt={{ base: 6, md: 8 }}
          textAlign="center"
          fontSize={{ base: "xs", md: "sm" }}
        >
          <Text>© {new Date().getFullYear()} PTG. 保留所有权利</Text>
        </Box>
      </Container>
    </Box>
  );
}

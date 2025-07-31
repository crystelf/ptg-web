"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  Button,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import Header from "@/components/Header";
import BatteryPromoCard from "@/components/BatteryPromoCard";
import Footer from "@/components/Footer";
import { drones, featuredBatteries } from "@/constants/demo";

export default function DronesPage() {
  const bgColor = { base: "gray.50", _dark: "gray.800" };
  const cardBg = { base: "white", _dark: "gray.700" };

  return (
    <Box minH="100vh" bg={bgColor}>
      <Header />
      <Box
        bgImage="url(https://www-cdn.djiits.com/cms/uploads/c008ab847e82aa79971025ff63a04ceb@1x.jpg)"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        py={32}
        position="relative"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.600" zIndex={1} />
        <VStack
          spacing={6}
          maxW="container.xl"
          mx="auto"
          px={4}
          position="relative"
          zIndex={2}
          color="white"
          textAlign="center"
        >
          <Heading as="h1" size="2xl">
            大疆无人机专业改装方案
          </Heading>
          <Text fontSize="xl">
            原厂性能升级 | 电池续航提升90% | 专业定制服务
          </Text>
        </VStack>
      </Box>

      <Box py={20} maxW="container.xl" mx="auto" px={4}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          全系列无人机支持
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {drones.map((drone) => (
            <Box
              key={drone.name}
              bg={cardBg}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
            >
              <AspectRatio ratio={4 / 3}>
                <Image src={drone.img} objectFit="cover" w="full" h="full" />
              </AspectRatio>
              <Box p={6}>
                <HStack mb={2}>
                  <Tag.Root colorPalette="blue" variant="solid" size="md">
                    <Tag.Label>{drone.category}</Tag.Label>
                  </Tag.Root>
                  {drone.battery && (
                    <Tag.Root colorPalette="green" variant="solid" size="md">
                      <Tag.Label>电池改装</Tag.Label>
                    </Tag.Root>
                  )}
                </HStack>
                <Heading as="h3" size="lg" mb={2}>
                  {drone.name}
                </Heading>
                <Text color="gray.500" mb={4}>
                  {drone.specs}
                </Text>
                {drone.battery && (
                  <Text fontWeight="bold" color="green.500">
                    {drone.battery}
                  </Text>
                )}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box py={20} bg={{ base: "gray.100", _dark: "gray.900" }}>
        <Box maxW="container.xl" mx="auto" px={4}>
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading as="h2" size="xl">
              专业电池改装方案
            </Heading>
            <Text fontSize="lg" maxW="2xl">
              采用军工级电芯，通过安全认证，续航提升90%-120%，循环次数达1300+
            </Text>
          </VStack>

          <HStack
            spacing={8}
            align="stretch"
            overflowX="auto"
            py={4}
            px={2}
            sx={{
              "&::-webkit-scrollbar": { height: "6px" },
              "&::-webkit-scrollbar-thumb": {
                bg: "gray.300",
                borderRadius: "full",
              },
            }}
          >
            {featuredBatteries.map((battery) => (
              <BatteryPromoCard key={battery.model} {...battery} />
            ))}
          </HStack>
        </Box>
      </Box>

      <Box py={20} maxW="container.xl" mx="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack textAlign="center" p={6} bg={cardBg} borderRadius="lg">
            <Box fontSize="4xl" mb={4}>
              🔋
            </Box>
            <Heading as="h3" size="md">
              电池质保
            </Heading>
            <Text>所有改装电池提供3个月质保，安全无忧</Text>
          </VStack>
          <VStack textAlign="center" p={6} bg={cardBg} borderRadius="lg">
            <Box fontSize="4xl" mb={4}>
              ✈️
            </Box>
            <Heading as="h3" size="md">
              专业改装
            </Heading>
            <Text>10年无人机改装经验，不破坏原厂结构</Text>
          </VStack>
          <VStack textAlign="center" p={6} bg={cardBg} borderRadius="lg">
            <Box fontSize="4xl" mb={4}>
              📦
            </Box>
            <Heading as="h3" size="md">
              全国包邮
            </Heading>
            <Text>支持全国包邮邮寄服务</Text>
          </VStack>
        </Grid>
      </Box>

      <Box
        py={20}
        bgGradient="linear(to-r, blue.500, purple.600)"
        color="white"
      >
        <VStack spacing={6} maxW="2xl" mx="auto" textAlign="center" px={4}>
          <Heading as="h2" size="xl">
            立即提升你的飞行体验
          </Heading>
          <Text fontSize="lg">
            专业团队为您提供最适合的电池改装方案，延长飞行时间，提升作业效率
          </Text>
          <HStack spacing={4} pt={4}>
            <Button colorScheme="whiteAlpha" size="lg">
              在线咨询
            </Button>
            <Button colorScheme="blackAlpha" size="lg">
              114-6666-6666
            </Button>
          </HStack>
        </VStack>
      </Box>

      <Footer />
    </Box>
  );
}

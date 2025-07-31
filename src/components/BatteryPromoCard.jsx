"use client";
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Badge,
  Flex,
  Tag,
} from "@chakra-ui/react";

export default function BatteryPromoCard({
  model,
  compatible,
  capacity,
  price,
  img,
}) {
  return (
    <Box
      minW="300px"
      bg={{ base: "white", _dark: "gray.700" }}
      borderRadius="lg"
      overflow="hidden"
      borderWidth={1}
      borderColor={{ base: "gray.200", _dark: "gray.600" }}
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
    >
      <Box position="relative">
        <Badge
          position="absolute"
          top={3}
          right={3}
          zIndex={1}
          colorPalette="red"
          variant="solid"
          size="sm"
          px={2}
          py={1}
          borderRadius="full"
        >
          热销款
        </Badge>
        <Box
          h="180px"
          bgImage={`url(${img})`}
          bgSize="cover"
          bgPosition="center"
          position="relative"
        >
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, blackAlpha.600, transparent)"
          />
        </Box>
      </Box>

      <Box p={6}>
        <Stack spacing={4}>
          <Heading as="h3" size="md">
            {model}
          </Heading>

          <Box>
            <Text
              fontSize="sm"
              color={{ base: "gray.500", _dark: "gray.400" }}
              mb={1}
            >
              适用机型:
            </Text>
            <Stack direction="row" flexWrap="wrap">
              {compatible.map((model) => (
                <Tag.Root
                  key={model}
                  colorPalette="blue"
                  variant="solid"
                  size="sm"
                >
                  <Tag.Label>{model}</Tag.Label>
                </Tag.Root>
              ))}
            </Stack>
          </Box>

          <Box>
            <Text fontSize="sm" color={{ base: "gray.500", _dark: "gray.400" }}>
              电池容量:
            </Text>
            <Text fontWeight="bold" color="green.500">
              {capacity}
            </Text>
          </Box>

          <Flex justify="space-between" align="flex-end">
            <Box>
              <Heading as="h4" size="lg" color="blue.500">
                {price}
              </Heading>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

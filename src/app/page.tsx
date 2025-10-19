"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Stack,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Ubicación Privilegiada",
      description: "A pasos de las mejores playas y atractivos turísticos",
      icon: "📍",
    },
    {
      title: "Confort Total",
      description: "Casas completamente equipadas con todas las comodidades",
      icon: "🏡",
    },
    {
      title: "Espacios Amplios",
      description: "Propiedades espaciosas ideales para familias y grupos",
      icon: "✨",
    },
    {
      title: "Entorno Natural",
      description: "Rodeado de naturaleza y paisajes inolvidables",
      icon: "🌿",
    },
  ];

  return (
    <Box>
      {/* Hero Section - Full Height with Image Background */}
      <Box
        position="relative"
        h={{ base: "70vh", md: "85vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        backgroundImage="url('/hero-background.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={2}>
          <VStack gap={8} textAlign="center" color="white">
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                textShadow="0 2px 10px rgba(0,0,0,0.2)"
              >
                Casa de piedra
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="3xl"
                fontWeight="300"
                textShadow="0 1px 5px rgba(0,0,0,0.1)"
              >
                Bella Vista, Maldonado
              </Text>
            </Box>
            <Stack direction={{ base: "column", md: "row" }} gap={4} mt={4}>
              <Link href="/reservas">
                <Button
                  size="lg"
                  bg="white"
                  color="#6B5344"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                  transition="all 0.3s"
                >
                  Reservar Ahora
                </Button>
              </Link>
              <Link href="/galeria">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                >
                  Ver Galería
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
        <VStack gap={16}>
          <Box textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              color="#6B8E23"
              mb={3}
            >
              Nuestros Beneficios
            </Text>
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
              ¿Por qué elegirnos?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              Ofrecemos una experiencia única con todas las comodidades que
              necesitas
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
            {features.map((feature, index) => (
              <Box
                key={index}
                p={8}
                bg="white"
                borderRadius="xl"
                boxShadow="lg"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "2xl",
                }}
              >
                <Text fontSize="4xl" mb={4}>
                  {feature.icon}
                </Text>
                <Heading as="h3" size="md" mb={3}>
                  {feature.title}
                </Heading>
                <Text color="gray.600">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <Box
            bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
            borderRadius="2xl"
            p={{ base: 10, md: 16 }}
            textAlign="center"
            color="white"
          >
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
              ¿Listo para tu próxima aventura?
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              mb={8}
              maxW="2xl"
              mx="auto"
            >
              Contáctanos para más información sobre disponibilidad y precios
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={4}
              justify="center"
            >
              <Link href="/contacto">
                <Button
                  size="lg"
                  bg="white"
                  color="#6B5344"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                  transition="all 0.3s"
                >
                  Contactar
                </Button>
              </Link>
              <Link href="/servicios">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                >
                  Ver Servicios
                </Button>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

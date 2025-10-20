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
      title: "Ubicación privilegiada",
      description:
        "A pasos de la playa, ideal para baño y pesca. Venta de leña y almacén a 1 cuadra. A solo 10 minutos de Piriápolis y 30 minutos de Punta del Este. \n\nEl equilibrio perfecto entre tranquilidad y conexión.",
      icon: "📍",
    },
    // {
    //   title: "Comfort total",
    //   description:
    //     "Casa completamente equipada, con piscina climatizada, barbacoa, horno de barro, juegos, y detalles en piedra que la hacen única. \n\nFresca en verano y cálida en invierno —lista para vivirla o alquilarla.",
    //   icon: "🏡",
    // },
    {
      title: "Entorno natural y \ntranquilidad total",
      description:
        "Despertá con el sonido de los pájaros, el aire del bosque y el murmullo del mar. \n \nLa casa está rodeada de árboles, cerros y espacios verdes, ideal para reconectar y descansar.",
      icon: "🌿",
    },
    {
      title: "Atención personalizada y \ntrato directo",
      description:
        "Siempre disponible ante cualquier duda o necesidad durante la estadía. \n\nBrindamos un servicio cálido, confiable y con +20 años de experiencia familiar en el rubro.",
      icon: "✨",
    },
    {
      title: "Ideal para inversión",
      description:
        "Rentabilidad comprobada, tenemos +100.000 visitas anuales online y una alta tasa de ocupación. \n\nUna propiedad que combina placer y rentabilidad, con la posibilidad de que la gestionemos por vos",
      icon: "💰",
    },
  ];

  return (
    <Box>
      {/* Hero Section - Full Height with Image Background */}
      <Box
        position="relative"
        h={{ base: "70vh", md: "100vh" }}
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
                fontWeight="500"
                textShadow="0 1px 5px rgba(0,0,0,0.1)"
              >
                Bella Vista, Maldonado
              </Text>
            </Box>
            <Link href="/reservas">
              <Button
                size="lg"
                bg="primary.500"
                color="accent.500"
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
              color="primary.600"
              mb={3}
            >
              Nuestros Beneficios
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={4}
              color="accent.500"
            >
              ¿Por qué elegirnos?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              Ofrecemos una experiencia única en la costa uruguaya con todas las
              comodidades que necesitas.
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
                <Heading as="h3" size="md" mb={3} whiteSpace="pre-line">
                  {feature.title}
                </Heading>
                <Text color="gray.600" whiteSpace="pre-line">
                  {feature.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

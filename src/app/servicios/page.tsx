"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Stack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ServiciosPage() {
  const services = [
    {
      title: "WiFi de alta velocidad",
      description:
        "Internet rápido y estable en toda la propiedad, ideal para teletrabajo o entretenimiento.",
      icon: "📶",
      color: "blue",
    },
    {
      title: "Estacionamiento privado",
      description:
        "Espacio de estacionamiento privado y seguro para tu vehículo.",
      icon: "🚗",
      color: "gray",
    },
    {
      title: "Cocina totalmente equipada",
      description:
        "Cocina completa con todos los electrodomésticos y utensilios necesarios.",
      icon: "🍳",
      color: "orange",
    },
    {
      title: "Aire acondicionado",
      description:
        "Climatización total para disfrutar tanto en verano como en invierno.",
      icon: "❄️",
      color: "cyan",
    },
    {
      title: "Ropa de cama",
      description:
        "Almohadas, sábanas y acolchados, todo listo para tu descanso.",
      icon: "🛏️",
      color: "pink",
    },
    {
      title: "Barbacoa completa",
      description:
        "Barbacoa cerrada con TV, futón y sala de juegos. Estufas a leña, parrillero interior/exterior y fogón exterior.",
      icon: "🔥",
      color: "red",
    },
    {
      title: "Entretenimiento",
      description: "TV Smart con DirecTV prepago, mesa de pool y ping pong.",
      icon: "📺",
      color: "green",
    },
    {
      title: "Seguridad 24/7",
      description:
        "Predio cerrado con cámaras de seguridad y entorno tranquilo y familiar.",
      icon: "🔒",
      color: "gray",
    },
    {
      title: "Piscina privada climatizada ",
      description:
        "Exclusiva de 6x3 mts, calentita y con cascada relajante. Acompañada de quincho con camastros.",
      icon: "🏊",
      color: "teal",
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      <Box h="5.25rem" />
      {/* Header Section */}
      <Box
        bgGradient="linear(135deg, primary.500, primary.700)"
        color="accent.500"
        py={{ base: 16, md: 20 }}
      >
        <Container maxW="container.xl">
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              opacity={0.9}
            >
              Nuestras Comodidades
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Servicios Incluidos
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" opacity={0.95}>
              Todo lo que necesitás para disfrutar una estadía perfecta, sin
              preocupaciones y con el máximo comfort.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {services.map((service, index) => (
            <Box
              key={index}
              p={8}
              bg="white"
              borderRadius="2xl"
              boxShadow="md"
              _hover={{
                boxShadow: "2xl",
                transform: "translateY(-8px)",
              }}
              transition="all 0.3s"
              border="1px"
              borderColor="gray.100"
            >
              <Box
                fontSize="4xl"
                mb={4}
                display="inline-block"
                p={4}
                bg={`${service.color}.50`}
                borderRadius="xl"
              >
                {service.icon}
              </Box>
              <Heading as="h3" size="lg" mb={3} color="gray.800">
                {service.title}
              </Heading>
              <Text color="gray.600" fontSize="md" lineHeight="tall">
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

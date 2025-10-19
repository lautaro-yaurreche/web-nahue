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
      title: "WiFi de Alta Velocidad",
      description:
        "Internet de alta velocidad en todas las propiedades para que estés siempre conectado.",
      icon: "📶",
      color: "blue",
    },
    {
      title: "Estacionamiento Privado",
      description:
        "Espacio de estacionamiento privado y seguro para tu vehículo.",
      icon: "🚗",
      color: "gray",
    },
    {
      title: "Cocina Totalmente Equipada",
      description:
        "Cocina completa con todos los electrodomésticos y utensilios necesarios.",
      icon: "🍳",
      color: "orange",
    },
    {
      title: "Aire Acondicionado",
      description:
        "Climatización en todas las habitaciones para tu máximo confort.",
      icon: "❄️",
      color: "cyan",
    },
    {
      title: "Ropa de Cama Premium",
      description:
        "Sábanas y toallas de primera calidad incluidas en tu estadía.",
      icon: "🛏️",
      color: "pink",
    },
    {
      title: "Parrilla y Quincho",
      description:
        "Área de parrilla equipada para disfrutar al aire libre con amigos y familia.",
      icon: "🔥",
      color: "red",
    },
    {
      title: "TV por Cable",
      description:
        "Televisión por cable con variedad de canales para tu entretenimiento.",
      icon: "📺",
      color: "green",
    },
    {
      title: "Seguridad 24/7",
      description: "Complejo cerrado con vigilancia para tu tranquilidad.",
      icon: "🔒",
      color: "gray",
    },
    {
      title: "Piscina",
      description:
        "Acceso a piscina compartida para refrescarte en días de calor.",
      icon: "🏊",
      color: "teal",
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      <Box h="5.25rem" />
      {/* Header Section */}
      <Box
        bg="linear-gradient(135deg, primary.500 0%, primary.700 100%)"
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
              Todas las comodidades que necesitas para una estadía perfecta y
              sin preocupaciones
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

        {/* Bottom CTA */}
        <Box
          mt={16}
          p={10}
          bg="white"
          borderRadius="2xl"
          textAlign="center"
          boxShadow="lg"
          border="1px"
          borderColor="gray.100"
        >
          <Heading as="h3" size="xl" mb={4} color="gray.800">
            ¿Necesitas más información?
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Contáctanos para conocer más detalles sobre nuestros servicios y
            disponibilidad
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={4}
            justify="center"
          >
            <Link href="/contacto">
              <Button
                size="lg"
                bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
                color="white"
                px={8}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.2s"
              >
                Contactar
              </Button>
            </Link>
            <Link href="/reservas">
              <Button
                size="lg"
                variant="outline"
                borderColor="#6B5344"
                color="#6B5344"
                px={8}
                _hover={{
                  bg: "#F5F1ED",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.2s"
              >
                Reservar Ahora
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

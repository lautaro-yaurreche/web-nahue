"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function ActividadesServiciosPage() {
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
      description: "Espacio de estacionamiento seguro para tu vehículo.",
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
      title: "Aires acondicionados",
      description:
        "Climatización total para disfrutar tanto en verano como en invierno.",
      icon: "❄️",
      color: "cyan",
    },
    {
      title: "Quincho para descansar",
      description:
        "Quincho con juego de camastros rodeado de naturaleza para disfrutar de un buen descanso.",
      icon: "🌴",
      color: "pink",
    },
    {
      title: "Barbacoa completa",
      description:
        "Cerrada con parrilero interno y externo, horno de barro, estufas a leña y fogón.",
      icon: "🔥",
      color: "red",
    },
    {
      title: "Entretenimiento",
      description:
        "Smart TV, mesa de pool, mesa de ping pong y cancha de fútbol.",
      icon: "🏓",
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
      title: "Piscina climatizada",
      description: "Privada, calentita y con cascada terapéutica.",
      icon: "🏊",
      color: "teal",
    },
  ];

  const activities = [
    {
      title: "Playas",
      description:
        "Ideal para baño y caminatas relajadas. Es el lugar perfecto para quienes buscan desconectarse, leer o disfrutar del sonido del mar. ",
      icon: "🏖️",
      color: "blue",
    },
    {
      title: "Pesca",
      description:
        "Puntos de pesca privilegiados, tanto desde la orilla como embarcada. Las aguas del balneario son ideales para capturar corvinas, brótolas y pejerreyes. ",
      icon: "🎣",
      color: "teal",
    },
    {
      title: "Observación de fauna",
      description:
        "En Bella Vista y el Arroyo Espina podés disfrutar de fauna y flora nativa, ideal para conectar con la naturaleza y la fotografía.",
      icon: "🦅",
      color: "green",
    },
    {
      title: "Paseos y entorno natural",
      description:
        "El balneario ofrece calles arboladas y caminos costeros para pasear a pie o en bici. Hacia el oeste, el paisaje se funde con las Sierras de las Ánimas",
      icon: "🚶🏻",
      color: "cyan",
    },
    {
      title: "Turismo",
      description:
        "Lugares icónicos como Piriápolis, con su cerro San Antonio y rambla costera, el Castillo de Pittamiglio en Las Flores, la Reserva del Cerro Pan de Azúcar, y Punta del Este, con sus playas, gastronomía y vida nocturna.",
      icon: "🏞️",
      color: "orange",
    },
    {
      title: "Naturaleza y tranquilidad",
      description:
        "Un entorno donde el estrés no tiene lugar, ideal para quienes buscan bienestar y conexión con la naturaleza",
      icon: "🌳",
      color: "cyan",
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      <Box h="5.25rem" />

      {/* Services Header Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              color="primary.600"
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
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Todo lo que necesitás para disfrutar una estadía perfecta, sin
              preocupaciones y con el máximo comfort.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxW="container.xl" pb={{ base: 12, md: 16 }}>
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

      {/* Activities Header Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              color="primary.600"
            >
              Experiencias Únicas
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Actividades
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Podés disfrutar del mar, la tranquilidad y paisajes únicos, con
              opciones de recreación y turismo a pocos minutos.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Activities Grid */}
      <Box bg="gray.50">
        <Container maxW="container.xl" pb={{ base: 12, md: 16 }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {activities.map((activity, index) => (
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
                  bg={`${activity.color}.50`}
                  borderRadius="xl"
                >
                  {activity.icon}
                </Box>
                <Heading as="h3" size="lg" mb={3} color="gray.800">
                  {activity.title}
                </Heading>
                <Text color="gray.600" fontSize="md" lineHeight="tall">
                  {activity.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

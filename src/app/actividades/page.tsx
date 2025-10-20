"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function ActividadesPage() {
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
              Experiencias Únicas
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Actividades
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" opacity={0.95}>
              Podés disfrutar del mar, la tranquilidad y paisajes únicos, con
              opciones de recreación y turismo a pocos minutos.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Activities Grid */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {activities.map((activity, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="2xl"
              boxShadow="md"
              textAlign="center"
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
              <Heading as="h3" size="md" mb={3} color="gray.800">
                {activity.title}
              </Heading>
              <Text color="gray.600" fontSize="sm">
                {activity.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

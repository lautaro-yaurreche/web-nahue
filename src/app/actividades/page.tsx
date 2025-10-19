'use client';

import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';

export default function ActividadesPage() {
  const activities = [
    {
      title: 'Senderismo y Trekking',
      description: 'Explora los senderos naturales de la zona con vistas espectaculares del paisaje.',
      icon: '🥾',
      color: 'green',
    },
    {
      title: 'Playas',
      description: 'Disfruta de hermosas playas de arena blanca a pocos minutos de las propiedades.',
      icon: '🏖️',
      color: 'blue',
    },
    {
      title: 'Deportes Acuáticos',
      description: 'Kayak, paddleboard, snorkel y otras actividades acuáticas disponibles.',
      icon: '🏄',
      color: 'cyan',
    },
    {
      title: 'Ciclismo',
      description: 'Rutas en bicicleta para todos los niveles a través de paisajes únicos.',
      icon: '🚴',
      color: 'orange',
    },
    {
      title: 'Pesca Deportiva',
      description: 'Zonas de pesca privilegiadas para los amantes de este deporte.',
      icon: '🎣',
      color: 'teal',
    },
    {
      title: 'Observación de Fauna',
      description: 'Descubre la rica fauna local en su hábitat natural.',
      icon: '🦅',
      color: 'green',
    },
    {
      title: 'Paseos a Caballo',
      description: 'Recorre los alrededores a caballo con guías experimentados.',
      icon: '🐴',
      color: 'yellow',
    },
    {
      title: 'Gastronomía Local',
      description: 'Degusta la cocina local en restaurantes y ferias de la zona.',
      icon: '🍽️',
      color: 'red',
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      {/* Header Section */}
      <Box
        bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
        color="white"
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
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold">
              Actividades
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.95}>
              Descubre todas las actividades que puedes disfrutar durante tu estadía
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Activities Grid */}
      <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
          {activities.map((activity, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="2xl"
              boxShadow="md"
              textAlign="center"
              _hover={{
                boxShadow: '2xl',
                transform: 'translateY(-8px)',
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

        {/* Info Box */}
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
            ¿Quieres saber más?
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Contáctanos para obtener información detallada sobre horarios, precios y
            recomendaciones para cada actividad
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

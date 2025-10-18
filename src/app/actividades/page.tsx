'use client';

import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';

export default function ActividadesPage() {
  const activities = [
    {
      title: 'Senderismo',
      description: 'Explora los senderos naturales de la zona con vistas espectaculares.',
    },
    {
      title: 'Playa',
      description: 'Disfruta de las hermosas playas cercanas a las propiedades.',
    },
    {
      title: 'Deportes Acuáticos',
      description: 'Kayak, paddleboard y otras actividades acuáticas disponibles.',
    },
    {
      title: 'Ciclismo',
      description: 'Rutas en bicicleta para todos los niveles.',
    },
  ];

  return (
    <Container maxW="container.xl" py={16}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Actividades
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            Descubre todas las actividades que puedes realizar durante tu estadía
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
          {activities.map((activity, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="md"
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
            >
              <Heading as="h3" size="md" mb={3}>
                {activity.title}
              </Heading>
              <Text color="gray.600">{activity.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

'use client';

import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';

export default function ServiciosPage() {
  const services = [
    {
      title: 'WiFi',
      description: 'Internet de alta velocidad en todas las propiedades.',
    },
    {
      title: 'Estacionamiento',
      description: 'Espacio de estacionamiento privado y seguro.',
    },
    {
      title: 'Cocina Equipada',
      description: 'Cocina completa con todos los utensilios necesarios.',
    },
    {
      title: 'Aire Acondicionado',
      description: 'Climatización en todas las habitaciones.',
    },
    {
      title: 'Ropa de Cama',
      description: 'Sábanas y toallas de calidad incluidas.',
    },
    {
      title: 'Parrilla',
      description: 'Área de parrilla para disfrutar al aire libre.',
    },
  ];

  return (
    <Container maxW="container.xl" py={16}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Servicios
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            Todas las comodidades que necesitas para una estadía perfecta
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {services.map((service, index) => (
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
                {service.title}
              </Heading>
              <Text color="gray.600">{service.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

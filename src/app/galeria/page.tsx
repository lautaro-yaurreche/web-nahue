'use client';

import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';

export default function GaleriaPage() {
  // Placeholder para las imágenes
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    alt: `Imagen ${i + 1}`,
  }));

  return (
    <Container maxW="container.xl" py={16}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Galería
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            Explora nuestras hermosas propiedades
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {images.map((image) => (
            <Box
              key={image.id}
              h="300px"
              bg="gray.200"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.3s"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.500" fontSize="lg">
                {image.alt}
              </Text>
              {/* Aquí puedes agregar las imágenes reales más adelante */}
            </Box>
          ))}
        </SimpleGrid>

        <Box bg="blue.50" p={6} borderRadius="lg" textAlign="center">
          <Text color="blue.800">
            Agrega tus imágenes en la carpeta <code>public/images/</code> y actualiza este componente
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}

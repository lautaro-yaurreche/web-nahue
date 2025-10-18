'use client';

import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, blue.500, teal.500)"
        color="white"
        py={20}
        textAlign="center"
      >
        <Container maxW="container.xl">
          <VStack gap={6}>
            <Heading as="h1" size="2xl">
              Bienvenido a Nuestras Casas de Alquiler
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Descubre el lugar perfecto para tus vacaciones. Casas cómodas, hermosos paisajes
              y experiencias inolvidables te esperan.
            </Text>
            <Link href="/reservas">
              <Button size="lg" colorScheme="whiteAlpha" variant="solid">
                Reservar Ahora
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={16}>
        <VStack gap={12}>
          {/* Features */}
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              ¿Por qué elegirnos?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
              Ofrecemos las mejores propiedades con todas las comodidades que necesitas
              para unas vacaciones perfectas.
            </Text>
          </Box>

          {/* Call to Action */}
          <Box textAlign="center" bg="gray.50" p={10} borderRadius="lg" w="full">
            <Heading as="h3" size="lg" mb={4}>
              ¿Listo para tu próxima aventura?
            </Heading>
            <Text fontSize="md" color="gray.600" mb={6}>
              Contáctanos para más información o haz tu reserva ahora
            </Text>
            <Link href="/contacto">
              <Button colorScheme="blue" size="lg">
                Contactar
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

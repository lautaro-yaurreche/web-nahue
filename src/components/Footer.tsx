'use client';

import { Box, Container, Text, Stack, Link as ChakraLink } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8} mt="auto">
      <Container maxW="container.xl">
        <Stack gap={4} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            Alquiler de Casas
          </Text>
          <Text fontSize="sm">
            Las mejores propiedades para tus vacaciones
          </Text>
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Todos los derechos reservados
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

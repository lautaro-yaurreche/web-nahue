'use client';

import { Box, Container, Flex, Button, HStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box as="nav" bg="blue.600" color="white" py={4} position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Box fontSize="2xl" fontWeight="bold" cursor="pointer">
              Alquiler de Casas
            </Box>
          </Link>

          <HStack gap={4}>
            <Link href="/">
              <Button variant="ghost" colorScheme="whiteAlpha">
                Inicio
              </Button>
            </Link>
            <Link href="/actividades">
              <Button variant="ghost" colorScheme="whiteAlpha">
                Actividades
              </Button>
            </Link>
            <Link href="/servicios">
              <Button variant="ghost" colorScheme="whiteAlpha">
                Servicios
              </Button>
            </Link>
            <Link href="/reservas">
              <Button variant="ghost" colorScheme="whiteAlpha">
                Reservas
              </Button>
            </Link>
            <Link href="/galeria">
              <Button variant="ghost" colorScheme="whiteAlpha">
                Galería
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="ghost" colorScheme="whiteAlpha">
                Contacto
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

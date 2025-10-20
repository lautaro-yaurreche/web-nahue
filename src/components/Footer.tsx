"use client";

import {
  Box,
  Container,
  Text,
  Stack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="accent.500"
      color="text"
      py={12}
      mt="auto"
      borderTop="1px"
      borderColor="accent.600"
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={8}>
          {/* Brand */}
          <VStack align={{ base: "center", md: "start" }} gap={3}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, primary.400, primary.200)"
              bgClip="text"
            >
              Casa de piedra
            </Text>
            <Text
              fontSize="sm"
              color="text"
              opacity={0.8}
              maxW="xs"
              textAlign={{ base: "center", md: "left" }}
            >
              Tu refugio perfecto para unas vacaciones inolvidables en un
              entorno único
            </Text>
          </VStack>

          {/* Links */}
          <VStack align={{ base: "center", md: "start" }} gap={2}>
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="text">
              Navegación
            </Text>
            <Link href="/">
              <Text
                fontSize="sm"
                color="text"
                opacity={0.8}
                _hover={{ color: "primary.400", opacity: 1 }}
                transition="all 0.2s"
              >
                Inicio
              </Text>
            </Link>
            <Link href="/servicios">
              <Text
                fontSize="sm"
                color="text"
                opacity={0.8}
                _hover={{ color: "primary.400", opacity: 1 }}
                transition="all 0.2s"
              >
                Actividades y Servicios
              </Text>
            </Link>
            <Link href="/galeria">
              <Text
                fontSize="sm"
                color="text"
                opacity={0.8}
                _hover={{ color: "primary.400", opacity: 1 }}
                transition="all 0.2s"
              >
                Galería
              </Text>
            </Link>
            <Link href="/venta">
              <Text
                fontSize="sm"
                color="text"
                opacity={0.8}
                _hover={{ color: "primary.400", opacity: 1 }}
                transition="all 0.2s"
              >
                Venta
              </Text>
            </Link>
            <Link href="/alquila-con-nosotros">
              <Text
                fontSize="sm"
                color="text"
                opacity={0.8}
                _hover={{ color: "primary.400", opacity: 1 }}
                transition="all 0.2s"
              >
                Alquilá con nosotros
              </Text>
            </Link>
          </VStack>

          {/* Contact */}
          <VStack align={{ base: "center", md: "start" }} gap={2}>
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="text">
              Contacto
            </Text>
            <Link href="/reservas">
              <Text
                fontSize="sm"
                color="text"
                opacity={0.8}
                _hover={{ color: "primary.400", opacity: 1 }}
                transition="all 0.2s"
              >
                Hacer una reserva
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>

        {/* Bottom */}
        <Box pt={8} borderTop="1px" borderColor="accent.600" textAlign="center">
          <Text fontSize="sm" color="text" opacity={0.6}>
            © {new Date().getFullYear()} Casa de piedra. Todos los derechos
            reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

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
      bg="gray.900"
      color="white"
      py={12}
      mt="auto"
      borderTop="1px"
      borderColor="gray.800"
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={8}>
          {/* Brand */}
          <VStack align={{ base: "center", md: "start" }} gap={3}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, #A0826D, #D7CCC8)"
              bgClip="text"
            >
              Casa de piedra
            </Text>
            <Text
              fontSize="sm"
              color="gray.400"
              maxW="xs"
              textAlign={{ base: "center", md: "left" }}
            >
              Tu refugio perfecto para unas vacaciones inolvidables en un
              entorno único
            </Text>
          </VStack>

          {/* Links */}
          <VStack align={{ base: "center", md: "start" }} gap={2}>
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.300">
              Navegación
            </Text>
            <Link href="/">
              <Text
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "#A0826D" }}
                transition="color 0.2s"
              >
                Inicio
              </Text>
            </Link>
            <Link href="/servicios">
              <Text
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "#A0826D" }}
                transition="color 0.2s"
              >
                Servicios
              </Text>
            </Link>
            <Link href="/actividades">
              <Text
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "#A0826D" }}
                transition="color 0.2s"
              >
                Actividades
              </Text>
            </Link>
            <Link href="/galeria">
              <Text
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "#A0826D" }}
                transition="color 0.2s"
              >
                Galería
              </Text>
            </Link>
          </VStack>

          {/* Contact */}
          <VStack align={{ base: "center", md: "start" }} gap={2}>
            <Text fontSize="sm" fontWeight="semibold" mb={2} color="gray.300">
              Contacto
            </Text>
            <Link href="/reservas">
              <Text
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "#A0826D" }}
                transition="color 0.2s"
              >
                Hacer una Reserva
              </Text>
            </Link>
            <Link href="/contacto">
              <Text
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "#A0826D" }}
                transition="color 0.2s"
              >
                Contáctanos
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>

        {/* Bottom */}
        <Box pt={8} borderTop="1px" borderColor="gray.800" textAlign="center">
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} Casa de piedra. Todos los derechos
            reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

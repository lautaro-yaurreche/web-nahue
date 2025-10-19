"use client";

import { Box, Container, Flex, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/actividades", label: "Actividades" },
    { href: "/servicios", label: "Servicios" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      py={4}
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Box
              fontSize="2xl"
              fontWeight="bold"
              cursor="pointer"
              color="purple.600"
              _hover={{ color: "purple.500" }}
              transition="color 0.2s"
            >
              Casa de piedra
            </Box>
          </Link>

          <HStack gap={2} display={{ base: "none", lg: "flex" }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  color={pathname === link.href ? "purple.600" : "gray.700"}
                  fontWeight={pathname === link.href ? "semibold" : "normal"}
                  _hover={{
                    bg: "purple.50",
                    color: "purple.600",
                  }}
                  position="relative"
                  _after={
                    pathname === link.href
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "60%",
                          height: "2px",
                          bg: "purple.600",
                        }
                      : {}
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </HStack>

          {/* CTA Button */}
          <Link href="/reservas">
            <Button
              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              color="white"
              px={6}
              display={{ base: "none", lg: "block" }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              Reservar
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

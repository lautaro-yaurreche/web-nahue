"use client";

import { Box, Container, Flex, Button, HStack, Image } from "@chakra-ui/react";
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
      py={3}
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
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              <Image
                src="/logo.svg"
                alt="Casa de piedra"
                height="60px"
                width="auto"
              />
            </Box>
          </Link>

          <HStack gap={2} display={{ base: "none", lg: "flex" }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  color={pathname === link.href ? "#6B5344" : "gray.700"}
                  fontWeight={pathname === link.href ? "semibold" : "normal"}
                  _hover={{
                    bg: "#F5F1ED",
                    color: "#6B5344",
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
                          bg: "#6B8E23",
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
              bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
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

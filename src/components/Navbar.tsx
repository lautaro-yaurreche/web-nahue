"use client";

import { useState, useTransition, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Button,
  HStack,
  Image,
  IconButton,
  VStack,
  Drawer,
  Portal,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loadingLink, setLoadingLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/actividades", label: "Actividades" },
    { href: "/servicios", label: "Servicios" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ];

  // Limpiar el loading cuando la navegación termina
  useEffect(() => {
    setLoadingLink(null);
  }, [pathname]);

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === href) return;

    setLoadingLink(href);
    setIsMenuOpen(false); // Cerrar el menú al navegar
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <Box
      as="nav"
      bg="background.primary"
      boxShadow="sm"
      py={2}
      position="fixed"
      w="100%"
      top={0}
      zIndex={1000}
      borderBottom="1px"
      borderColor="primary.200"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/" onClick={(e) => handleNavigation("/", e)}>
            <Box
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              <Image
                src="/logo.svg"
                alt="Casa de piedra"
                height="68px"
                width="auto"
              />
            </Box>
          </Link>

          <HStack gap={2} display={{ base: "none", lg: "flex" }}>
            {links.map((link) => {
              const isActive = pathname === link.href;
              const isLoading = loadingLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigation(link.href, e)}
                >
                  <Button
                    variant="ghost"
                    color="text"
                    fontWeight="semibold"
                    _hover={{
                      bg: "background.secondary",
                      color: "text",
                    }}
                    position="relative"
                    overflow="hidden"
                    _after={
                      isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "60%",
                            height: "2px",
                            bg: "text",
                          }
                        : {}
                    }
                    _before={
                      isLoading
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "-100%",
                            width: "60%",
                            height: "2px",
                            bg: "primary.500",
                            animation: "slideRight 1s ease-in-out infinite",
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </HStack>

          {/* CTA Button - Desktop */}
          <Link
            href="/reservas"
            onClick={(e) => handleNavigation("/reservas", e)}
          >
            <Button
              bg="text"
              color="accent.500"
              px={6}
              display={{ base: "none", lg: "block" }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
              position="relative"
              overflow="hidden"
              _before={
                loadingLink === "/reservas"
                  ? {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "-100%",
                      width: "60%",
                      height: "2px",
                      bg: "accent.500",
                      animation: "slideRight 1s ease-in-out infinite",
                    }
                  : {}
              }
            >
              Reservar
            </Button>
          </Link>

          {/* Hamburger Menu - Mobile */}
          <IconButton
            aria-label="Abrir menú"
            variant="ghost"
            display={{ base: "flex", lg: "none" }}
            onClick={() => setIsMenuOpen(true)}
            _hover={{ bg: "primary.50" }}
          >
            <Box>
              <Box
                w="24px"
                h="2px"
                bg="primary.600"
                mb="6px"
                borderRadius="2px"
                transition="all 0.3s"
              />
              <Box
                w="24px"
                h="2px"
                bg="primary.600"
                mb="6px"
                borderRadius="2px"
                transition="all 0.3s"
              />
              <Box
                w="24px"
                h="2px"
                bg="primary.600"
                borderRadius="2px"
                transition="all 0.3s"
              />
            </Box>
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer.Root
        open={isMenuOpen}
        onOpenChange={(e) => setIsMenuOpen(e.open)}
        placement="end"
        size="xs"
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              {/* Close Button */}
              <Flex justify="flex-end" p={4}>
                <Drawer.CloseTrigger asChild>
                  <IconButton
                    aria-label="Cerrar menú"
                    variant="ghost"
                    _hover={{ bg: "primary.50" }}
                  >
                    <Box fontSize="24px" fontWeight="300" color="primary.600">
                      ✕
                    </Box>
                  </IconButton>
                </Drawer.CloseTrigger>
              </Flex>

              <Drawer.Body>
                {/* Menu Links */}
                <VStack gap={2} align="stretch">
                  {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavigation(link.href, e)}
                      >
                        <Button
                          variant="ghost"
                          w="full"
                          justifyContent="flex-start"
                          color={isActive ? "primary.600" : "gray.700"}
                          fontWeight={isActive ? "semibold" : "normal"}
                          _hover={{
                            bg: "primary.50",
                            color: "primary.600",
                          }}
                          borderLeft={
                            isActive
                              ? "3px solid primary.500"
                              : "3px solid transparent"
                          }
                          borderRadius={0}
                          pl={4}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    );
                  })}

                  {/* Reservar Button - Mobile */}
                  <Link
                    href="/reservas"
                    onClick={(e) => handleNavigation("/reservas", e)}
                  >
                    <Button
                      w="full"
                      bg="linear-gradient(135deg, primary.500 0%, primary.700 100%)"
                      color="accent.500"
                      mt={4}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                      transition="all 0.2s"
                      position="relative"
                      overflow="hidden"
                      _before={
                        loadingLink === "/reservas"
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: "-100%",
                              width: "60%",
                              height: "2px",
                              bg: "accent.500",
                              animation: "slideRight 1s ease-in-out infinite",
                            }
                          : {}
                      }
                    >
                      Reservar
                    </Button>
                  </Link>
                </VStack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}

"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  createToaster,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

const toaster = createToaster({
  placement: "top-end",
  duration: 5000,
});

export default function AlquilaConNosotrosPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construir mensaje de WhatsApp
    const message = `ALQUILÁ CON NOSOTROS

Nombre: ${formData.firstName} ${formData.lastName}
Ubicación de la casa: ${formData.location}

Mensaje: ${formData.message}`;

    // Abrir WhatsApp
    const phoneNumber = "59897105450";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Limpiar formulario
    setFormData({
      firstName: "",
      lastName: "",
      location: "",
      message: "",
    });

    toaster.success({
      title: "Redirigiendo a WhatsApp",
      description: "Completa tu consulta por WhatsApp",
    });
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <Box h="5.25rem" />
      {/* Header Section */}
      <Box
        bgGradient="linear(135deg, primary.500, primary.700)"
        py={{ base: 16, md: 20 }}
      >
        <Container maxW="container.xl">
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              opacity={0.9}
            >
              Maximizá tu inversión
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Alquilá con nosotros
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" opacity={0.95}>
              Generá ingresos con tu propiedad sin complicaciones
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 8, lg: 12 }}
          w="full"
        >
          {/* Left: Service Information */}
          <VStack align="stretch" gap={6}>
            <Box
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px"
              borderColor="gray.100"
            >
              <VStack align="start" gap={5}>
                <Box>
                  <Text
                    fontSize="lg"
                    color="gray.700"
                    lineHeight="tall"
                    mb={4}
                  >
                    Contamos con un equipo con años de experiencia en el rubro
                    inmobiliario, dedicado a que obtengas el mejor rendimiento de
                    tu casa sin perder tiempo.
                  </Text>
                  <Text
                    fontSize="lg"
                    color="gray.700"
                    lineHeight="tall"
                    mb={4}
                  >
                    Nos ocupamos de la publicidad, gestión de reservas, atención
                    personalizada a los huéspedes e interesados, coordinación de
                    mantenimiento, limpieza y cuidado integral de la propiedad.
                  </Text>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="primary.700"
                    lineHeight="tall"
                  >
                    Vos disfrutás la renta, nosotros nos encargamos del resto.
                  </Text>
                </Box>

                <Box w="full" h="1px" bg="gray.200" my={2} />

                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="accent.600"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    mb={4}
                  >
                    Nuestros servicios incluyen:
                  </Text>
                  <VStack align="start" gap={2}>
                    <Text fontSize="sm" color="gray.700">
                      📸 Publicidad profesional en todas las plataformas
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      📅 Gestión completa de reservas y calendario
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      👥 Atención personalizada a huéspedes
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      🧹 Coordinación de limpieza y mantenimiento
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      🏡 Cuidado integral de tu propiedad
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      💰 Optimización de tarifas para máxima rentabilidad
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </VStack>

          {/* Right: Contact Form */}
          <Box
            bg="white"
            p={{ base: 8, md: 8 }}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px"
            borderColor="gray.100"
            h="fit-content"
          >
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="gray.800"
              mb={4}
            >
              Contactanos
            </Heading>

            <Box as="form" onSubmit={handleSubmit}>
              <VStack gap={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} w="full">
                  <Box>
                    <Text mb={2} fontWeight="medium" color="gray.700">
                      Nombre *
                    </Text>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        })
                      }
                      required
                      size="lg"
                      borderColor="gray.300"
                      _hover={{ borderColor: "primary.500" }}
                      _focus={{
                        borderColor: "primary.600",
                        boxShadow: "0 0 0 1px primary.600",
                      }}
                    />
                  </Box>
                  <Box>
                    <Text mb={2} fontWeight="medium" color="gray.700">
                      Apellido *
                    </Text>
                    <Input
                      placeholder="Tu apellido"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      size="lg"
                      borderColor="gray.300"
                      _hover={{ borderColor: "primary.500" }}
                      _focus={{
                        borderColor: "primary.600",
                        boxShadow: "0 0 0 1px primary.600",
                      }}
                    />
                  </Box>
                </SimpleGrid>

                <Box w="full">
                  <Text mb={2} fontWeight="medium" color="gray.700">
                    Ubicación de la casa *
                  </Text>
                  <Input
                    placeholder="Ej: Punta del Este, La Barra"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                    size="lg"
                    borderColor="gray.300"
                    _hover={{ borderColor: "primary.500" }}
                    _focus={{
                      borderColor: "primary.600",
                      boxShadow: "0 0 0 1px primary.600",
                    }}
                  />
                </Box>

                <Box w="full">
                  <Text mb={2} fontWeight="medium" color="gray.700">
                    Mensaje *
                  </Text>
                  <Textarea
                    placeholder="Cuéntanos sobre tu propiedad y qué te gustaría saber..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    required
                    size="lg"
                    borderColor="gray.300"
                    _hover={{ borderColor: "primary.500" }}
                    _focus={{
                      borderColor: "primary.600",
                      boxShadow: "0 0 0 1px primary.600",
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  bgGradient="linear(135deg, primary.500, primary.700)"
                  color="white"
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.2s"
                >
                  Enviar consulta
                </Button>

                <Text fontSize="sm" color="gray.500" textAlign="center">
                  Te responderemos a la brevedad
                </Text>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

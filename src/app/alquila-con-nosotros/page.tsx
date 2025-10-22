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
import { useWhatsAppThrottle } from "@/hooks/useWhatsAppThrottle";

const toaster = createToaster({
  placement: "top-end",
  duration: 5000,
});

export default function AlquilaConNosotrosPage() {
  const throttledOpen = useWhatsAppThrottle(3000);
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

    // Abrir WhatsApp con throttle
    const phoneNumber = "59897105450";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    const success = throttledOpen(whatsappUrl);

    if (success) {
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
    } else {
      toaster.error({
        title: "Espera un momento",
        description:
          "Por favor espera unos segundos antes de volver a intentar",
      });
    }
  };

  return (
    <Box bg="gray.50" minH="100vh">
      <Box h="5.25rem" />
      {/* Header Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              color="primary.600"
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
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Generá ingresos con tu propiedad sin complicaciones
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
        {/* Pricing Callout */}
        <Box
          mb={8}
          p={6}
          bg="primary.50"
          borderRadius="xl"
          border="2px"
          borderColor="primary.200"
          textAlign="center"
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="primary.800"
            fontWeight="medium"
            lineHeight="tall"
          >
            💰 Vos ponés el precio y recibís el 100%, sin descuentos ni
            comisiones.
          </Text>
        </Box>

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
                  <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
                    Contamos con un equipo con +20 años de experiencia en el
                    rubro inmobiliario, dedicado a que obtengas el mejor
                    rendimiento de tu propiedad sin perder tiempo.
                  </Text>
                  <Text fontSize="lg" color="gray.700" lineHeight="tall" mb={4}>
                    Hacemos un servicio integral y completo: publicidad,
                    negociación, reservas, atención a huéspedes, mantenimiento y
                    entrega/recibo de llaves.
                  </Text>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="primary.700"
                    lineHeight="tall"
                  >
                    Vos disfrutás de las ganancias, nosotros nos encargamos del
                    resto.
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
                      🏖️ Abarcamos tanto alquileres anuales como por temporada.
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      📣 Publicación profesional en las principales plataformas.
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      🗓️ Gestión integral de negociación, reservas y
                      comunicación con los huéspedes.
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      💬 Atención directa 24/7, personalizada y con seguimiento
                      durante toda la estadía.
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      🧹 Supervisión de mantenimiento.
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      📊 Reportes de ingresos y ocupación, con total
                      transparencia.
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                      🧾 Cobro y control de pagos, para que recibas tus
                      ganancias sin demoras.
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
                    placeholder="Ej: Punta del Este, Piriápolis"
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
                  bg="primary.600"
                  color="white"
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                    bg: "primary.700",
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

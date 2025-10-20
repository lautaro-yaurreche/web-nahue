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
import type { ContactFormData } from "@/types";

const toaster = createToaster({
  placement: "top-end",
  duration: 5000,
});

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toaster.success({
          title: "Mensaje enviado",
          description: "Te responderemos a la brevedad",
        });
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toaster.error({
          title: "Error",
          description: data.message,
        });
      }
    } catch (error) {
      toaster.error({
        title: "Error",
        description: "Ocurrió un error al enviar el mensaje",
      });
    } finally {
      setLoading(false);
    }
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
              Oportunidad de inversión o tu nuevo refugio
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Venta
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" opacity={0.95}>
              Una propuesta única
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
        <VStack gap={6} align="stretch">
          {/* Section Title */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="primary.700"
              mb={3}
            >
              ¿Por qué invertir aquí?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={5}>
              Una oportunidad real para quienes buscan un hogar rodeado de
              naturaleza o un negocio rentable con retorno comprobado.
            </Text>
            <Box
              w="full"
              p={4}
              bg="primary.50"
              borderRadius="lg"
              border="1px"
              borderColor="primary.200"
            >
              <Text
                fontSize="md"
                fontWeight="semibold"
                color="primary.700"
                mb="0.125rem"
              >
                Consultas directas
              </Text>
              <Text fontSize="sm" color="primary.600">
                Trato directo con los propietarios. <br /> Precio real, sin
                sobrevaloraciones ni comisiones de inmobiliaria. <br />
                Ya sea que busques un lugar para vivir o una inversión segura,
                te acompañamos en todo el proceso.
              </Text>
            </Box>
          </Box>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 8, lg: 12 }}
            w="full"
          >
            {/* Left: Sale Information */}
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
                      fontSize="sm"
                      fontWeight="bold"
                      color="accent.600"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={3}
                    >
                      Características destacadas
                    </Text>
                    <VStack align="start" gap={3}>
                      <Box>
                        <Text fontWeight="semibold" color="gray.800" mb={1}>
                          Propiedad en venta
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          Lista para disfrutar o comenzar a generar ingresos
                          desde el primer día.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" color="gray.800" mb={1}>
                          Ideal para inversión
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          Negocio de alquiler con alta demanda turística
                          comprobada en la zona.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" color="gray.800" mb={1}>
                          Entorno natural
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          Ubicación privilegiada, rodeada de árboles,
                          tranquilidad y a solo minutos del mar.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="semibold" color="gray.800" mb={1}>
                          Diseño único
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          Construcción sólida, fresca en verano y cálida en
                          invierno, con detalles en piedra y amplios espacios
                          exteriores.
                        </Text>
                      </Box>
                    </VStack>
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
                      Si estas interesado, te pasamos:
                    </Text>
                    <VStack align="start" gap={2}>
                      <Text fontSize="sm" color="gray.700">
                        📄 PDF con propuesta completa y detalles de la casa
                      </Text>
                      <Text fontSize="sm" color="gray.700">
                        📊 Análisis de rentabilidad y retorno real
                      </Text>
                      <Text fontSize="sm" color="gray.700">
                        💰 Información sobre ingresos anuales y costos reales
                      </Text>
                      <Text fontSize="sm" color="gray.700">
                        🏡 Beneficios de la ubicación y crecimiento del área
                      </Text>
                      <Text fontSize="sm" color="gray.700">
                        📄 Propuesta "Full Service"
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
                      Email *
                    </Text>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
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
                      Teléfono *
                    </Text>
                    <Input
                      type="tel"
                      placeholder="+598 99 123 456"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
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
                      placeholder="Cuéntanos qué te interesa saber sobre la propiedad..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={2}
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
                    loading={loading}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "xl",
                    }}
                    transition="all 0.2s"
                  >
                    Enviar mensaje
                  </Button>

                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    Te responderemos en menos de 24 hs.
                  </Text>
                </VStack>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

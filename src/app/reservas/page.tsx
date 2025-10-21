"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  createToaster,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ReservationCalendar from "@/components/ReservationCalendar";

const toaster = createToaster({
  placement: "top-end",
  duration: 5000,
});

export default function ReservasPage() {
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: Date | null;
    checkOut: Date | null;
  }>({
    checkIn: null,
    checkOut: null,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    guests: 2,
  });

  const handleDateSelect = (startDate: Date, endDate: Date) => {
    setSelectedDates({ checkIn: startDate, checkOut: endDate });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDates.checkIn || !selectedDates.checkOut) {
      toaster.error({
        title: "Error",
        description: "Por favor selecciona las fechas de tu estadía",
      });
      return;
    }

    // Formatear fechas
    const checkInFormatted = format(selectedDates.checkIn, "dd/MM/yyyy", {
      locale: es,
    });
    const checkOutFormatted = format(selectedDates.checkOut, "dd/MM/yyyy", {
      locale: es,
    });

    // Construir mensaje de WhatsApp
    const message = `ALQUILER

Nombre completo: ${formData.fullName}

Fechas: desde ${checkInFormatted} hasta ${checkOutFormatted}

Cantidad de personas: ${formData.guests}`;

    // Abrir WhatsApp
    const phoneNumber = "59897105450"; // El mismo que usás en el botón flotante
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Limpiar formulario
    setFormData({
      fullName: "",
      guests: 2,
    });
    setSelectedDates({ checkIn: null, checkOut: null });

    toaster.success({
      title: "Redirigiendo a WhatsApp",
      description: "Completa tu reserva por WhatsApp",
    });
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
              Planifica tu estadía
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Reservas
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Completa el formulario y te contactaremos para confirmar tu
              reserva
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Calendar and Form Section */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
        {/* Info Box */}
        <Box
          mb={8}
          p={6}
          bg="primary.50"
          borderRadius="xl"
          border="1px"
          borderColor="primary.200"
        >
          <Text fontSize="sm" color="accent.500" fontWeight="medium" mb={2}>
            Información importante:
          </Text>
          <VStack align="start" gap={2} fontSize="sm" color="primary.600">
            <Text>
              • Horario de check-in y check-out: Se arregla con la propetaria
            </Text>
            <Text>• Estadía mínima: 2 noches</Text>
          </VStack>
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
          {/* Left Column - Calendar */}
          <Box
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px"
            borderColor="gray.100"
            h="fit-content"
          >
            <ReservationCalendar onDateSelect={handleDateSelect} />
          </Box>

          {/* Right Column - Info & Form */}
          <VStack gap={6} align="stretch">
            {/* Placeholder o Info de Reserva */}
            {!selectedDates.checkIn || !selectedDates.checkOut ? (
              <Box
                bg="gray.50"
                p={8}
                borderRadius="2xl"
                border="2px dashed"
                borderColor="gray.300"
                textAlign="center"
              >
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.600"
                  mb={2}
                >
                  Selecciona tus fechas
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Elige la fecha de check-in y check-out en el calendario para
                  continuar
                </Text>
              </Box>
            ) : (
              <Box
                bg="white"
                p={6}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px"
                borderColor="gray.100"
              >
                <Heading as="h3" size="md" mb={4} color="gray.800">
                  Tu Reserva
                </Heading>
                <Box
                  p={4}
                  bg="primary.50"
                  borderRadius="lg"
                  border="1px"
                  borderColor="primary.200"
                  textAlign="center"
                >
                  <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
                    <Box justifySelf={{ base: "start", md: "stretch" }}>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="primary.600"
                        mb={1}
                      >
                        CHECK-IN
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="accent.500">
                        {format(selectedDates.checkIn, "dd MMM yyyy", {
                          locale: es,
                        })}
                      </Text>
                    </Box>
                    <Box justifySelf={{ base: "end", md: "stretch" }}>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="primary.600"
                        mb={1}
                      >
                        CHECK-OUT
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="accent.500">
                        {format(selectedDates.checkOut, "dd MMM yyyy", {
                          locale: es,
                        })}
                      </Text>
                    </Box>
                    <Box
                      gridColumn={{ base: "1 / -1", md: "auto" }}
                      justifySelf={{ base: "center", md: "stretch" }}
                    >
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="primary.600"
                        mb={1}
                      >
                        ESTADÍA
                      </Text>
                      <Text fontSize="md" fontWeight="bold">
                        {Math.ceil(
                          (selectedDates.checkOut.getTime() -
                            selectedDates.checkIn.getTime()) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        noches
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>
            )}

            {/* Form Section - Only shows when dates are selected */}
            {selectedDates.checkIn && selectedDates.checkOut && (
              <Box
                bg="white"
                p="6"
                borderRadius="2xl"
                boxShadow="xl"
                border="1px"
                borderColor="gray.100"
              >
                <Heading as="h3" size="md" mb={6} color="gray.800">
                  Completa tus datos
                </Heading>

                <Box as="form" onSubmit={handleSubmit}>
                  <VStack gap={5}>
                    <Box w="full">
                      <Text
                        mb={2}
                        fontWeight="medium"
                        color="gray.700"
                        fontSize="sm"
                      >
                        Nombre completo *
                      </Text>
                      <Input
                        placeholder="Tu nombre completo"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                        size="lg"
                        borderColor="gray.300"
                        _hover={{ borderColor: "#A0826D" }}
                        _focus={{
                          borderColor: "primary.600",
                          boxShadow: "0 0 0 1px primary.600",
                        }}
                      />
                    </Box>

                    <Box w="full" position="relative">
                      <Text
                        mb={2}
                        fontWeight="medium"
                        color="gray.700"
                        fontSize="sm"
                      >
                        Cantidad de personas *
                      </Text>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guests: parseInt(e.target.value),
                          })
                        }
                        required
                        style={{
                          width: "100%",
                          height: "3rem",
                          borderColor: "#CBD5E0",
                          borderRadius: "0.375rem",
                          borderWidth: "1px",
                          paddingLeft: "1rem",
                          paddingRight: "3rem",
                          fontSize: "1rem",
                          backgroundColor: "white",
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.75rem center",
                          backgroundSize: "1.25rem",
                        }}
                      >
                        <option value={2}>2 personas</option>
                        <option value={3}>3 personas</option>
                        <option value={4}>4 personas</option>
                        <option value={5}>5 personas</option>
                        <option value={6}>6 personas</option>
                        <option value={7}>7 personas</option>
                        <option value={8}>8 personas</option>
                        <option value={9}>9 personas</option>
                        <option value={10}>10 personas</option>
                        <option value={11}>11 personas</option>
                      </select>
                    </Box>

                    <Button
                      type="submit"
                      size="lg"
                      w="full"
                      bg="#1D1202"
                      color="#E8D9A8"
                      py={7}
                      fontSize="lg"
                      fontWeight="semibold"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "xl",
                      }}
                      transition="all 0.2s"
                      mt="0.5rem"
                    >
                      Solicitar reserva
                    </Button>

                    <Text fontSize="xs" color="gray.500" textAlign="center">
                      Te responderemos a la brevedad
                    </Text>
                  </VStack>
                </Box>
              </Box>
            )}
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

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
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: Date | null;
    checkOut: Date | null;
  }>({
    checkIn: null,
    checkOut: null,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const handleDateSelect = (startDate: Date, endDate: Date) => {
    setSelectedDates({ checkIn: startDate, checkOut: endDate });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDates.checkIn || !selectedDates.checkOut) {
      toaster.error({
        title: "Error",
        description: "Por favor selecciona las fechas de tu estadía",
      });
      return;
    }

    setLoading(true);

    try {
      const reservationData = {
        firstName: formData.fullName.split(" ")[0] || formData.fullName,
        lastName: formData.fullName.split(" ").slice(1).join(" ") || "-",
        email: `${formData.phone}@reserva.com`, // Email temporal para mantener compatibilidad
        phone: formData.phone,
        checkIn: format(selectedDates.checkIn, "yyyy-MM-dd"),
        checkOut: format(selectedDates.checkOut, "yyyy-MM-dd"),
      };

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();

      if (data.success) {
        toaster.success({
          title: "Reserva enviada",
          description: "Te contactaremos para confirmar tu reserva",
        });
        setFormData({
          fullName: "",
          phone: "",
        });
        setSelectedDates({ checkIn: null, checkOut: null });
      } else {
        toaster.error({
          title: "Error",
          description: data.message,
        });
      }
    } catch (error) {
      toaster.error({
        title: "Error",
        description: "Ocurrió un error al enviar la reserva",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="gray.50" minH="100vh">
      {/* Header Section */}
      <Box
        bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
        color="white"
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
              Planifica tu Estadía
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Reservas
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" opacity={0.95}>
              Completa el formulario y te contactaremos para confirmar tu
              reserva
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Calendar and Form Section */}
      <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
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
                  bg="#F5F1ED"
                  borderRadius="lg"
                  border="1px"
                  borderColor="#E8DDD0"
                >
                  <SimpleGrid columns={3} gap={4}>
                    <Box>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="#6B5344"
                        mb={1}
                      >
                        CHECK-IN
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="#5D4037">
                        {format(selectedDates.checkIn, "dd MMM yyyy", {
                          locale: es,
                        })}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="#6B5344"
                        mb={1}
                      >
                        CHECK-OUT
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="#5D4037">
                        {format(selectedDates.checkOut, "dd MMM yyyy", {
                          locale: es,
                        })}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="#6B5344"
                        mb={1}
                      >
                        ESTADÍA
                      </Text>
                      <Text fontSize="md" fontWeight="bold" color="#6B8E23">
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
                          borderColor: "#6B5344",
                          boxShadow: "0 0 0 1px #6B5344",
                        }}
                      />
                    </Box>

                    <Box w="full">
                      <Text
                        mb={2}
                        fontWeight="medium"
                        color="gray.700"
                        fontSize="sm"
                      >
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
                        _hover={{ borderColor: "#A0826D" }}
                        _focus={{
                          borderColor: "#6B5344",
                          boxShadow: "0 0 0 1px #6B5344",
                        }}
                      />
                    </Box>

                    <Button
                      type="submit"
                      size="lg"
                      w="full"
                      bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
                      color="white"
                      py={7}
                      fontSize="lg"
                      fontWeight="semibold"
                      loading={loading}
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
                      Te contactaremos en menos de 24 horas para confirmar
                      disponibilidad
                    </Text>
                  </VStack>
                </Box>
              </Box>
            )}
          </VStack>
        </SimpleGrid>

        {/* Info Box */}
        <Box
          mt={8}
          p={6}
          bg="#F5F1ED"
          borderRadius="xl"
          border="1px"
          borderColor="#E8DDD0"
        >
          <Text fontSize="sm" color="#5D4037" fontWeight="medium" mb={2}>
            Información importante:
          </Text>
          <VStack align="start" gap={2} fontSize="sm" color="#6B5344">
            <Text>• Check-in: a partir de las 15:00</Text>
            <Text>• Check-out: hasta las 11:00</Text>
            <Text>• Estadía mínima: 2 noches</Text>
            <Text>• Se requiere seña del 30% para confirmar la reserva</Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

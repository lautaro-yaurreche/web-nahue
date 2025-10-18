'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  createToaster,
} from '@chakra-ui/react';
import type { ReservationFormData } from '@/types';

const toaster = createToaster({
  placement: 'top-end',
  duration: 5000,
});

export default function ReservasPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toaster.success({
          title: 'Reserva enviada',
          description: 'Te contactaremos para confirmar tu reserva',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          checkIn: '',
          checkOut: '',
        });
      } else {
        toaster.error({
          title: 'Error',
          description: data.message,
        });
      }
    } catch (error) {
      toaster.error({
        title: 'Error',
        description: 'Ocurrió un error al enviar la reserva',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.md" py={16}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Reservas
          </Heading>
          <Box color="gray.600">
            Completa el formulario y te contactaremos para confirmar tu reserva
          </Box>
        </Box>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack gap={4}>
            <Input
              placeholder="Nombre"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <Input
              placeholder="Apellido"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Box w="full">
              <Box as="label" fontSize="sm" fontWeight="medium" mb={2} display="block">
                Fecha de Ingreso
              </Box>
              <Input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                required
              />
            </Box>
            <Box w="full">
              <Box as="label" fontSize="sm" fontWeight="medium" mb={2} display="block">
                Fecha de Egreso
              </Box>
              <Input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                required
              />
            </Box>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              w="full"
              loading={loading}
            >
              Enviar Reserva
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

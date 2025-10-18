'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  createToaster,
} from '@chakra-ui/react';
import type { ContactFormData } from '@/types';

const toaster = createToaster({
  placement: 'top-end',
  duration: 5000,
});

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toaster.success({
          title: 'Mensaje enviado',
          description: 'Te responderemos a la brevedad',
        });
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
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
        description: 'Ocurrió un error al enviar el mensaje',
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
            Contacto
          </Heading>
          <Box color="gray.600">
            ¿Tienes alguna pregunta? Contáctanos y te responderemos a la brevedad
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
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Mensaje"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              required
            />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              w="full"
              loading={loading}
            >
              Enviar Mensaje
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

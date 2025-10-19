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
  Text,
  SimpleGrid,
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
    <Box bg="gray.50" minH="100vh">
      {/* Header Section */}
      <Box
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
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
              Hablemos
            </Text>
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold">
              Contacto
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.95}>
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Form Section */}
      <Container maxW="container.md" py={{ base: 12, md: 20 }}>
        <Box
          bg="white"
          p={{ base: 8, md: 12 }}
          borderRadius="2xl"
          boxShadow="xl"
          border="1px"
          borderColor="gray.100"
        >
          <Box as="form" onSubmit={handleSubmit}>
            <VStack gap={6}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                <Box>
                  <Text mb={2} fontWeight="medium" color="gray.700">
                    Nombre *
                  </Text>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    size="lg"
                    borderColor="gray.300"
                    _hover={{ borderColor: 'purple.400' }}
                    _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)' }}
                  />
                </Box>
                <Box>
                  <Text mb={2} fontWeight="medium" color="gray.700">
                    Apellido *
                  </Text>
                  <Input
                    placeholder="Tu apellido"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    size="lg"
                    borderColor="gray.300"
                    _hover={{ borderColor: 'purple.400' }}
                    _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)' }}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)' }}
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
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)' }}
                />
              </Box>

              <Box w="full">
                <Text mb={2} fontWeight="medium" color="gray.700">
                  Mensaje *
                </Text>
                <Textarea
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  required
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)' }}
                />
              </Box>

              <Button
                type="submit"
                size="lg"
                w="full"
                bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                color="white"
                py={7}
                fontSize="lg"
                fontWeight="semibold"
                loading={loading}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.2s"
              >
                Enviar Mensaje
              </Button>

              <Text fontSize="sm" color="gray.500" textAlign="center">
                Te responderemos en un plazo de 24-48 horas
              </Text>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder para las imágenes - usando imágenes de ejemplo
  const images = [
    {
      id: 1,
      title: 'Vista Exterior Principal',
      category: 'Exterior',
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    },
    {
      id: 2,
      title: 'Sala de Estar',
      category: 'Interior',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    },
    {
      id: 3,
      title: 'Piscina',
      category: 'Amenidades',
      src: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80',
    },
    {
      id: 4,
      title: 'Jardín Frontal',
      category: 'Exterior',
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    },
    {
      id: 5,
      title: 'Dormitorio Principal',
      category: 'Interior',
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
    },
    {
      id: 6,
      title: 'Área de Parrilla',
      category: 'Amenidades',
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    },
    {
      id: 7,
      title: 'Terraza con Vista',
      category: 'Exterior',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    },
    {
      id: 8,
      title: 'Cocina Moderna',
      category: 'Interior',
      src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&q=80',
    },
    {
      id: 9,
      title: 'Zona de Descanso',
      category: 'Amenidades',
      src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    },
    {
      id: 10,
      title: 'Fachada Nocturna',
      category: 'Exterior',
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    },
    {
      id: 11,
      title: 'Baño Principal',
      category: 'Interior',
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    },
    {
      id: 12,
      title: 'Área de Juegos',
      category: 'Amenidades',
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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
              Nuestros Espacios
            </Text>
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold">
              Galería de Fotos
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.95}>
              Explora nuestras hermosas propiedades y descubre tu próximo destino
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {images.map((image, index) => (
            <Box
              key={image.id}
              h="350px"
              borderRadius="2xl"
              overflow="hidden"
              position="relative"
              cursor="pointer"
              onClick={() => openModal(index)}
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: '2xl',
              }}
              transition="all 0.3s"
              boxShadow="lg"
              backgroundImage={`url(${image.src})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                p={6}
              >
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>
                  {image.title}
                </Text>
                <Box
                  px={4}
                  py={1}
                  bg="whiteAlpha.300"
                  borderRadius="full"
                  backdropFilter="blur(10px)"
                >
                  <Text color="white" fontSize="sm" fontWeight="medium">
                    {image.category}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Instructions Box */}
        <Box
          mt={16}
          p={8}
          bg="white"
          borderRadius="2xl"
          textAlign="center"
          boxShadow="lg"
          border="1px"
          borderColor="gray.100"
        >
          <Text fontSize="lg" color="gray.700" mb={2}>
            <strong>Para agregar tus fotos:</strong>
          </Text>
          <Text color="gray.600" mb={4}>
            1. Coloca las imágenes en <code style={{ background: '#f7fafc', padding: '2px 8px', borderRadius: '4px' }}>public/images/</code>
          </Text>
          <Text color="gray.600">
            2. Actualiza el array de imágenes en{' '}
            <code style={{ background: '#f7fafc', padding: '2px 8px', borderRadius: '4px' }}>
              src/app/galeria/page.tsx
            </code>
            {' '}con las rutas reales
          </Text>
        </Box>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.900"
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <IconButton
            position="absolute"
            top={4}
            right={4}
            onClick={closeModal}
            aria-label="Close"
            bg="whiteAlpha.300"
            color="white"
            size="lg"
            fontSize="2xl"
            _hover={{ bg: 'whiteAlpha.500' }}
            backdropFilter="blur(10px)"
            borderRadius="full"
            zIndex={3}
          >
            ✕
          </IconButton>

          <Box
            position="relative"
            w="full"
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <IconButton
              position="absolute"
              left={{ base: 2, md: 8 }}
              top="50%"
              transform="translateY(-50%)"
              onClick={goToPrevious}
              aria-label="Previous image"
              bg="whiteAlpha.300"
              color="white"
              size="lg"
              fontSize="3xl"
              _hover={{ bg: 'whiteAlpha.500' }}
              backdropFilter="blur(10px)"
              borderRadius="full"
              zIndex={2}
            >
              ←
            </IconButton>

            {/* Image Container */}
            <Box
              maxW="90vw"
              maxH="90vh"
              w="auto"
              h="auto"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* Main Image */}
              <Box
                position="relative"
                maxW="1200px"
                maxH="70vh"
                w="90vw"
                h="70vh"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="2xl"
              >
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="90vw"
                  priority
                />
              </Box>

              {/* Image Info */}
              <Box mt={6} textAlign="center">
                <Text color="white" fontSize="3xl" fontWeight="bold" mb={2}>
                  {images[selectedImage].title}
                </Text>
                <Box
                  display="inline-block"
                  px={6}
                  py={2}
                  bg="whiteAlpha.300"
                  borderRadius="full"
                  backdropFilter="blur(10px)"
                >
                  <Text color="white" fontSize="lg" fontWeight="medium">
                    {images[selectedImage].category}
                  </Text>
                </Box>
                <Text color="whiteAlpha.700" fontSize="sm" mt={4}>
                  {selectedImage + 1} / {images.length}
                </Text>
              </Box>
            </Box>

            {/* Next Button */}
            <IconButton
              position="absolute"
              right={{ base: 2, md: 8 }}
              top="50%"
              transform="translateY(-50%)"
              onClick={goToNext}
              aria-label="Next image"
              bg="whiteAlpha.300"
              color="white"
              size="lg"
              fontSize="3xl"
              _hover={{ bg: 'whiteAlpha.500' }}
              backdropFilter="blur(10px)"
              borderRadius="full"
              zIndex={2}
            >
              →
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}

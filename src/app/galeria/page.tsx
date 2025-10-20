"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: "Foto 1", src: "/images/foto-1.jpeg" },
    { id: 2, title: "Foto 2", src: "/images/foto-2.jpeg" },
    { id: 3, title: "Foto 3", src: "/images/foto-3.jpeg" },
    { id: 4, title: "Foto 4", src: "/images/foto-4.jpeg" },
    { id: 5, title: "Foto 5", src: "/images/foto-5.jpeg" },
    { id: 6, title: "Foto 6", src: "/images/foto-6.jpeg" },
    { id: 7, title: "Foto 7", src: "/images/foto-7.jpeg" },
    { id: 8, title: "Foto 8", src: "/images/foto-8.jpeg" },
    { id: 9, title: "Foto 9", src: "/images/foto-9.jpeg" },
    { id: 10, title: "Foto 10", src: "/images/foto-10.jpeg" },
    { id: 11, title: "Foto 11", src: "/images/foto-11.jpeg" },
    { id: 12, title: "Foto 12", src: "/images/foto-12.jpeg" },
    { id: 13, title: "Foto 13", src: "/images/foto-13.jpeg" },
    { id: 14, title: "Foto 14", src: "/images/foto-14.jpeg" },
    { id: 15, title: "Foto 15", src: "/images/foto-15.jpeg" },
    { id: 16, title: "Foto 16", src: "/images/foto-16.jpeg" },
    { id: 17, title: "Foto 17", src: "/images/foto-17.jpeg" },
    { id: 18, title: "Foto 18", src: "/images/foto-18.jpeg" },
    { id: 19, title: "Foto 19", src: "/images/foto-19.jpeg" },
    { id: 20, title: "Foto 20", src: "/images/foto-20.jpeg" },
    { id: 21, title: "Foto 21", src: "/images/foto-21.jpeg" },
    { id: 22, title: "Foto 22", src: "/images/foto-22.jpeg" },
    { id: 23, title: "Foto 23", src: "/images/foto-23.jpeg" },
    { id: 24, title: "Foto 24", src: "/images/foto-24.jpeg" },
    { id: 25, title: "Foto 25", src: "/images/foto-25.jpeg" },
    { id: 26, title: "Foto 26", src: "/images/foto-26.jpeg" },
    { id: 27, title: "Foto 27", src: "/images/foto-27.jpeg" },
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

      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <Box bg="gray.50" minH="100vh">
      <Box h="5.25rem" />
      {/* Header Section */}
      <Box
        bgGradient="linear(135deg, primary.500, primary.700)"
        color="accent.500"
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
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Galería de Fotos
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" opacity={0.95}>
              Explora nuestras hermosas propiedades y descubre tu próximo
              destino
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Container maxW="container.xl" pb={{ base: 12, md: 20 }}>
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
                transform: "scale(1.02)",
                boxShadow: "2xl",
              }}
              transition="all 0.3s"
              boxShadow="lg"
              backgroundImage={`url(${image.src})`}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>
          ))}
        </SimpleGrid>
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
            _hover={{ bg: "whiteAlpha.500" }}
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
              _hover={{ bg: "whiteAlpha.500" }}
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
                  style={{ objectFit: "contain" }}
                  sizes="90vw"
                  priority
                />
              </Box>

              {/* Image Info */}
              <Box mt={6} textAlign="center">
                <Text color="whiteAlpha.700" fontSize="sm">
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
              _hover={{ bg: "whiteAlpha.500" }}
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

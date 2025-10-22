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
    { id: 1, title: "Foto 1", src: "/images/foto1.jpeg" },
    { id: 2, title: "Foto 2", src: "/images/foto2.jpeg" },
    { id: 3, title: "Foto 3", src: "/images/foto3.jpeg" },
    { id: 4, title: "Foto 4", src: "/images/foto4.jpeg" },
    { id: 5, title: "Foto 5", src: "/images/foto5.jpeg" },
    { id: 6, title: "Foto 6", src: "/images/foto6.jpeg" },
    { id: 7, title: "Foto 7", src: "/images/foto7.jpeg" },
    { id: 8, title: "Foto 8", src: "/images/foto8.jpeg" },
    { id: 9, title: "Foto 9", src: "/images/foto9.jpeg" },
    { id: 11, title: "Foto 11", src: "/images/foto11.jpeg" },
    { id: 12, title: "Foto 12", src: "/images/foto12.jpeg" },
    { id: 13, title: "Foto 13", src: "/images/foto13.jpeg" },
    { id: 14, title: "Foto 14", src: "/images/foto14.jpeg" },
    { id: 15, title: "Foto 15", src: "/images/foto15.jpeg" },
    { id: 16, title: "Foto 16", src: "/images/foto16.jpeg" },
    { id: 17, title: "Foto 17", src: "/images/foto17.jpeg" },
    { id: 19, title: "Foto 19", src: "/images/foto19.jpeg" },
    { id: 21, title: "Foto 21", src: "/images/foto21.jpeg" },
    { id: 23, title: "Foto 23", src: "/images/foto23.jpeg" },
    { id: 24, title: "Foto 24", src: "/images/foto24.jpeg" },
    { id: 26, title: "Foto 26", src: "/images/foto26.jpeg" },
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
              Nuestros espacios
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
            >
              Galería de fotos
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Explora nuestra hermosa propiedad
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Video Section */}
      <Container maxW="container.xl" pb={{ base: 8, md: 12 }}>
        <Box
          position="relative"
          paddingBottom={{ base: "60%", md: "40%" }}
          height={0}
          overflow="hidden"
          maxW="1000px"
          mx="auto"
          borderRadius="2xl"
          boxShadow="2xl"
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: "1rem",
            }}
            src="https://www.youtube.com/embed/hHA6N5H6gGU"
            title="Video de la propiedad"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Container>

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
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Box>
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
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            ✕
          </IconButton>

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
            display="flex"
            alignItems="center"
            justifyContent="center"
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
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            →
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

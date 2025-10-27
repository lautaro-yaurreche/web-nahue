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
    { id: 1, title: "Casa de Piedra", src: "/images/casa-de-piedra.webp" },
    {
      id: 6,
      title: "Quincho y Piscina",
      src: "/images/quincho-piscina-climatizada.webp",
    },
    {
      id: 2,
      title: "Piscina Privada Climatizada",
      src: "/images/piscina-privada-climatizada.webp",
    },
    {
      id: 3,
      title: "Piscina Climatizada con Cerramiento",
      src: "/images/piscina-privada-climatizada-con-cerramiento.webp",
    },
    {
      id: 16,
      title: "Dormitorio Matrimonial Alto",
      src: "/images/dormitorio-matriomonial-alto.webp",
    },
    { id: 19, title: "Dormitorio", src: "/images/dormitorio.webp" },
    { id: 12, title: "Terraza", src: "/images/terraza.webp" },
    {
      id: 8,
      title: "Parrillero y Horno de Barro",
      src: "/images/parrilero-y-horno-de-barro.webp",
    },
    {
      id: 9,
      title: "Parrillero Exterior con Mesa",
      src: "/images/parrillero-exterior-con-mesa.webp",
    },
    { id: 14, title: "Mesa de Pool", src: "/images/mesa-de-pool.webp" },
    {
      id: 15,
      title: "Mesa de Ping Pong",
      src: "/images/mesa-de-ping-pong.webp",
    },
    { id: 13, title: "Cancha de Fútbol", src: "/images/cancha-de-futbol.webp" },

    {
      id: 5,
      title: "Sillones junto a la Piscina",
      src: "/images/sillones-piscina-climatizada.webp",
    },

    {
      id: 11,
      title: "Camastro bajo Enredadera",
      src: "/images/camastro-enredadera.webp",
    },
    { id: 20, title: "Baño Grande", src: "/images/baño-grande.webp" },

    {
      id: 17,
      title: "Dormitorio Matrimonial Bajo",
      src: "/images/dormitorio-matrimonial-bajo.webp",
    },

    { id: 21, title: "Baño Chico", src: "/images/baño-chico.webp" },
    {
      id: 18,
      title: "Dormitorio con Cuchetas",
      src: "/images/dormitorio-cuchetas.webp",
    },
    {
      id: 7,
      title: "Casa de Piedra de Noche",
      src: "/images/casa-de-piedra-noche.webp",
    },
    {
      id: 4,
      title: "Piscina de Noche",
      src: "/images/piscina-privada-climatizada-noche.webp",
    },
    {
      id: 10,
      title: "Pincho y Luna de Fuego",
      src: "/images/pincho-luna-fuego.webp",
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

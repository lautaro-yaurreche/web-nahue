"use client";

import { Box, Link } from "@chakra-ui/react";

interface WhatsAppButtonProps {
  phoneNumber: string; // Formato: 59899123456 (código de país + número sin espacios ni +)
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "¡Hola! Me gustaría consultar sobre la casa de piedra.",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      position="fixed"
      bottom={{ base: "20px", md: "30px" }}
      right={{ base: "20px", md: "30px" }}
      zIndex={1000}
      _hover={{ textDecoration: "none" }}
    >
      <Box
        width={{ base: "56px", md: "64px" }}
        height={{ base: "56px", md: "64px" }}
        borderRadius="full"
        bg="#25D366"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
        cursor="pointer"
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="white"
          />
          <path
            d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.713 1.448h.005c6.583 0 11.942-5.334 11.945-11.893 0-3.176-1.24-6.165-3.478-8.401zm-8.475 18.293c-1.778 0-3.52-.477-5.042-1.377l-.362-.214-3.75.98 1.005-3.645-.236-.375a9.869 9.869 0 01-1.537-5.262c.002-5.45 4.456-9.887 9.928-9.887 2.65 0 5.14 1.031 7.015 2.901a9.825 9.825 0 012.907 7.002c-.003 5.45-4.457 9.887-9.928 9.887z"
            fill="white"
          />
        </svg>
      </Box>
    </Link>
  );
}

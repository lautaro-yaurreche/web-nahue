import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Paleta de colores personalizada
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Textos principales
        text: { value: "#E8D9A8" },

        background: {
          primary: { value: "#2F4E56" }, // Color principal
          secondary: { value: "#2a464eff" },
        },

        // Color primario (dorado/beige)
        primary: {
          50: { value: "#F9F5EB" },
          100: { value: "#F0E7CC" },
          200: { value: "#E7D9AD" },
          300: { value: "#DECB8E" },
          400: { value: "#D5BD6F" },
          500: { value: "#D1B16D" }, // Color principal
          600: { value: "#B89A5C" },
          700: { value: "#9F834B" },
          800: { value: "#866C3A" },
          900: { value: "#6D5529" },
        },

        // Color secundario (blanco)
        secondary: { value: "#FFFFFF" },

        // Color de acento (marrón oscuro)
        accent: {
          50: { value: "#E6E3E0" },
          100: { value: "#B8B0A6" },
          200: { value: "#8A7D6C" },
          300: { value: "#5C4A32" },
          400: { value: "#3B2D1A" },
          500: { value: "#1D1202" }, // Color principal
          600: { value: "#180F02" },
          700: { value: "#130C01" },
          800: { value: "#0E0901" },
          900: { value: "#090600" },
        },

        // Colores de tierra anteriores (por compatibilidad)
        brown: {
          50: { value: "#F5F1ED" },
          100: { value: "#E8DDD0" },
          200: { value: "#D7CCC8" },
          300: { value: "#A0826D" },
          400: { value: "#8B7355" },
          500: { value: "#6B5344" },
          600: { value: "#5D4037" },
          700: { value: "#4E342E" },
          800: { value: "#3E2723" },
          900: { value: "#2E1F1B" },
        },

        green: {
          500: { value: "#6B8E23" },
          600: { value: "#5A7A1F" },
          700: { value: "#49661A" },
        },
      },
    },
  },
});

// Crear el sistema de temas
const system = createSystem(defaultConfig, config);

export default system;

// Exportar colores para uso directo si es necesario
export const colors = {
  text: "#E8D9A8",
  background: "#2F4E56",
  primary: "#D1B16D",
  secondary: "#FFFFFF",
  accent: "#1D1202",
};

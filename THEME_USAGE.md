# Guía de Uso del Tema

## Paleta de Colores

```
--text: #E8D9A8        (Beige claro para texto)
--background: #2F4E56   (Verde azulado oscuro para fondos)
--primary: #D1B16D      (Dorado/beige para elementos principales)
--secondary: #FFFFFF    (Blanco para elementos secundarios)
--accent: #1D1202       (Marrón muy oscuro para acentos)
```

## Cómo Usar los Colores en Componentes

### Opción 1: Usando los tokens de color directamente

```tsx
import { Box, Button, Text } from "@chakra-ui/react";

function MiComponente() {
  return (
    <Box bg="background" p={4}>
      <Text color="text">Texto con color del tema</Text>
      <Button bg="primary.500" color="accent.500">
        Botón primario
      </Button>
    </Box>
  );
}
```

### Opción 2: Importando los colores directamente

```tsx
import { Box, Text } from "@chakra-ui/react";
import { colors } from "@/theme";

function MiComponente() {
  return (
    <Box bg={colors.background} p={4}>
      <Text color={colors.text}>Texto principal</Text>
    </Box>
  );
}
```

### Opción 3: Usando gradientes

```tsx
import { Box } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      bg="linear-gradient(135deg, primary.500 0%, primary.700 100%)"
      color="accent.500"
      p={8}
    >
      Banner con gradiente
    </Box>
  );
}
```

## Escalas de Color Disponibles

### Primary (Dorado/Beige)
- `primary.50` - Más claro
- `primary.100`
- `primary.200`
- `primary.300`
- `primary.400`
- `primary.500` - Color base (#D1B16D)
- `primary.600`
- `primary.700`
- `primary.800`
- `primary.900` - Más oscuro

### Accent (Marrón oscuro)
- `accent.50` - Más claro
- `accent.100`
- `accent.200`
- `accent.300`
- `accent.400`
- `accent.500` - Color base (#1D1202)
- `accent.600`
- `accent.700`
- `accent.800`
- `accent.900` - Más oscuro

### Colores de Compatibilidad
- `brown.50` - `brown.900` (Colores marrones anteriores)
- `green.500`, `green.600`, `green.700` (Verdes anteriores)

## Ejemplos de Uso Común

### Navbar
```tsx
<Box
  bg="background"
  borderBottom="1px"
  borderColor="primary.700"
>
  <Button color="text" _hover={{ color: "primary.500" }}>
    Link
  </Button>
</Box>
```

### Botones
```tsx
// Botón principal
<Button bg="primary.500" color="accent.500" _hover={{ bg: "primary.600" }}>
  Acción Principal
</Button>

// Botón secundario
<Button bg="secondary" color="accent.500" _hover={{ bg: "gray.100" }}>
  Acción Secundaria
</Button>

// Botón de acento
<Button bg="accent.500" color="text" _hover={{ bg: "accent.600" }}>
  Acción de Acento
</Button>
```

### Tarjetas
```tsx
<Box
  bg="white"
  borderRadius="lg"
  boxShadow="lg"
  p={6}
  border="1px"
  borderColor="primary.200"
>
  <Heading color="accent.500">Título</Heading>
  <Text color="gray.700">Contenido</Text>
</Box>
```

### Texto sobre fondos oscuros
```tsx
<Box bg="background" p={8}>
  <Heading color="text">Título Principal</Heading>
  <Text color="text" opacity={0.8}>
    Texto secundario con opacidad
  </Text>
</Box>
```

## Mejores Prácticas

1. **Fondos oscuros**: Usar `background` (#2F4E56) con texto `text` (#E8D9A8)
2. **Fondos claros**: Usar `white` o `secondary` con texto `accent.500` (#1D1202)
3. **Destacar elementos**: Usar `primary.500` (#D1B16D) para elementos importantes
4. **Contraste**: Asegurar buen contraste entre texto y fondo para accesibilidad
5. **Hover states**: Usar tonos más oscuros para estados hover (ej: `primary.600` en lugar de `primary.500`)

## Actualizar Componentes Existentes

Para actualizar componentes que usan los colores antiguos:

- Reemplaza `#6B5344`, `#8B7355` → `primary.500` o `primary.600`
- Reemplaza `#F5F1ED`, `#E8DDD0` → `white` o usa el nuevo `text` para fondos claros
- Reemplaza `#6B8E23` (verde) → `primary.500` o mantén `green.500` si prefieres
- Reemplaza colores morados → `primary.500` o `accent.500` según el contexto

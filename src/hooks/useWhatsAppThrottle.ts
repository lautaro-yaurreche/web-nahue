import { useRef } from 'react';

export function useWhatsAppThrottle(delay: number = 3000) {
  const lastCallRef = useRef<number>(0);

  const throttledOpen = (url: string) => {
    const now = Date.now();

    // Si han pasado menos de 'delay' ms desde el último click, no abrir
    if (now - lastCallRef.current < delay) {
      console.warn('Por favor espera unos segundos antes de volver a intentar');
      return false;
    }

    lastCallRef.current = now;
    window.open(url, "_blank");
    return true;
  };

  return throttledOpen;
}

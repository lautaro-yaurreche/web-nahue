"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import {
  Box,
  Text,
  VStack,
  Spinner,
  HStack,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import {
  isWithinInterval,
  parseISO,
  isSameDay,
  addDays,
  differenceInDays,
} from "date-fns";
import { es } from "date-fns/locale";
import "react-calendar/dist/Calendar.css";
import "@/styles/calendar.css";

interface BlockedDate {
  start: string;
  end: string;
  summary?: string;
}

interface ReservationCalendarProps {
  onDateSelect: (startDate: Date, endDate: Date) => void;
}

export default function ReservationCalendar({
  onDateSelect,
}: ReservationCalendarProps) {
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([null, null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlockedDates();
  }, []);

  const fetchBlockedDates = async () => {
    try {
      const response = await fetch("/api/calendar-events");
      const data = await response.json();
      setBlockedDates(data.blockedDates || []);
    } catch (error) {
      console.error("Error fetching blocked dates:", error);
    } finally {
      setLoading(false);
    }
  };

  const isDateBlocked = (date: Date): boolean => {
    return blockedDates.some((blocked) => {
      const start = parseISO(blocked.start);
      const end = parseISO(blocked.end);

      // Ajustar para incluir el día completo
      const adjustedEnd = addDays(end, -1);

      return isWithinInterval(date, { start, end: adjustedEnd });
    });
  };

  const getBlockedDateInfo = (date: Date): BlockedDate | undefined => {
    return blockedDates.find((blocked) => {
      const start = parseISO(blocked.start);
      const end = parseISO(blocked.end);
      const adjustedEnd = addDays(end, -1);

      return isWithinInterval(date, { start, end: adjustedEnd });
    });
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    // Deshabilitar fechas pasadas
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true;

    // Deshabilitar fechas bloqueadas
    return isDateBlocked(date);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const [start, end] = selectedRange;

    // Resaltar rango seleccionado
    if (start && end && isWithinInterval(date, { start, end })) {
      if (isSameDay(date, start)) return "react-calendar__tile--rangeStart";
      if (isSameDay(date, end)) return "react-calendar__tile--rangeEnd";
      return "react-calendar__tile--range";
    }

    if (start && isSameDay(date, start))
      return "react-calendar__tile--rangeStart";

    return null;
  };

  const handleDateChange = (value: any) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      setSelectedRange([start, end]);

      if (start && end) {
        onDateSelect(start, end);
      }
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" color="#6B5344" />
        <Text mt={4} color="gray.600">
          Cargando disponibilidad...
        </Text>
      </Box>
    );
  }

  const nights =
    selectedRange[0] && selectedRange[1]
      ? differenceInDays(selectedRange[1], selectedRange[0])
      : 0;

  return (
    <VStack gap={6} align="stretch">
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={3} color="gray.800">
          Selecciona tus fechas de estadía
        </Text>

        {/* Leyenda */}
        <HStack
          gap={{ base: 3, md: 4 }}
          flexWrap="wrap"
          justifyContent={{ base: "space-between", md: "flex-start" }}
        >
          <HStack gap={2}>
            <Box
              w={4}
              h={4}
              bg="white"
              border="2px solid"
              borderColor="gray.300"
              borderRadius="sm"
            />
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
              Disponible
            </Text>
          </HStack>
          <HStack gap={2}>
            <Box
              w={4}
              h={4}
              bg="gray.200"
              borderRadius="sm"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "15%",
                right: "15%",
                height: "2px",
                bg: "#cbd5e0",
                transform: "translateY(-50%)",
              }}
            />
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
              No disponible
            </Text>
          </HStack>
          <HStack gap={2}>
            <Box
              w={4}
              h={4}
              bg="linear-gradient(135deg, #8B7355 0%, #6B5344 100%)"
              borderRadius="sm"
            />
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
              Seleccionado
            </Text>
          </HStack>
        </HStack>
      </Box>

      <Box className="calendar-container">
        <Calendar
          selectRange
          onChange={handleDateChange}
          value={selectedRange}
          tileDisabled={tileDisabled}
          tileClassName={tileClassName}
          minDate={new Date()}
          locale="es-ES"
        />
      </Box>
    </VStack>
  );
}

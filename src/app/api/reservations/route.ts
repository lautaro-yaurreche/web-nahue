import { NextRequest, NextResponse } from 'next/server';
import { sendReservationEmail } from '@/lib/email';
import type { ReservationFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data: ReservationFormData = await request.json();

    // Validación básica
    if (!data.firstName || !data.lastName || !data.email || !data.checkIn || !data.checkOut) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar que checkOut sea posterior a checkIn
    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);

    if (checkOutDate <= checkInDate) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'La fecha de egreso debe ser posterior a la fecha de ingreso' },
        { status: 400 }
      );
    }

    await sendReservationEmail(data);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Reserva enviada correctamente',
    });
  } catch (error) {
    console.error('Error sending reservation email:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Error al enviar la reserva' },
      { status: 500 }
    );
  }
}

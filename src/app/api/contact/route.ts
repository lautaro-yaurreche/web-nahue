import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import type { ContactFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validación básica
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
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

    await sendContactEmail(data);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Mensaje enviado correctamente',
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}

import nodemailer from 'nodemailer';
import type { ContactFormData, ReservationFormData } from '@/types';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const { firstName, lastName, phone, email, message } = data;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Nuevo mensaje de contacto - ${firstName} ${lastName}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendReservationEmail(data: ReservationFormData) {
  const { firstName, lastName, email, checkIn, checkOut } = data;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Nueva reserva - ${firstName} ${lastName}`,
    html: `
      <h2>Nueva solicitud de reserva</h2>
      <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Fecha de ingreso:</strong> ${checkIn}</p>
      <p><strong>Fecha de egreso:</strong> ${checkOut}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

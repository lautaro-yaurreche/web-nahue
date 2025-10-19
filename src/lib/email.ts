import nodemailer from "nodemailer";
import type { ContactFormData, ReservationFormData } from "@/types";

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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #667eea; border-bottom: 3px solid #764ba2; padding-bottom: 10px;">
          Nuevo mensaje de contacto
        </h2>

        <div style="background: #f7fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Información de contacto</h3>
          <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
        </div>

        <div style="background: #e9d8fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #553c9a; margin-top: 0;">Mensaje</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <p style="color: #718096; font-size: 12px; margin-top: 30px;">
          Este email fue generado automáticamente desde el formulario de contacto de Casa de piedra.
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendReservationEmail(data: ReservationFormData) {
  const { firstName, lastName, email, checkIn, checkOut } = data;
  const phone = (data as any).phone; // Obtener teléfono si existe

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Nueva reserva - ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #667eea; border-bottom: 3px solid #764ba2; padding-bottom: 10px;">
          Nueva solicitud de reserva
        </h2>

        <div style="background: #f7fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Información del cliente</h3>
          <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
          ${
            email && !email.includes("@reserva.com")
              ? `<p><strong>Email:</strong> ${email}</p>`
              : ""
          }
        </div>

        <div style="background: #e9d8fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #553c9a; margin-top: 0;">Fechas de estadía</h3>
          <p><strong>Check-in:</strong> ${new Date(checkIn).toLocaleDateString(
            "es-ES",
            { weekday: "long", year: "numeric", month: "long", day: "numeric" }
          )}</p>
          <p><strong>Check-out:</strong> ${new Date(
            checkOut
          ).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</p>
          <p><strong>Noches:</strong> ${Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )}</p>
        </div>

        <p style="color: #718096; font-size: 12px; margin-top: 30px;">
          Este email fue generado automáticamente desde el formulario de reservas de Casa de piedra.
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

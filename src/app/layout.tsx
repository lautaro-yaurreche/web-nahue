import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import "@/styles/globals.css";

export const metadata = {
  title: "Casa de piedra",
  description: "Descubre esta hermosa propiedad en alquiler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Providers>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <WhatsAppButton phoneNumber="59897105450" />
        </Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

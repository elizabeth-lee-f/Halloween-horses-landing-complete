import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Stable Halloween Horses",
  description: "Мистические лошади в стиле Star Stable Online Halloween Update",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

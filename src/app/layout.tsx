import type { Metadata } from "next";
import "./styles.scss";

export const metadata: Metadata = {
  title: "Lendsqr Frontend Test",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

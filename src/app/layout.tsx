import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/scss/global.scss";

const workSans = localFont({
  src: "./fonts/WorkSans-Regular.woff",
  variable: "--font-work-sans",
  weight: "100 900",
});
const avenirNextCyr = localFont({
  src: "./fonts/AvenirNextCyr-Regular.woff",
  variable: "--font-avenir-next-cyr",
  weight: "100 900",
});

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
      <body
        className={`${workSans.variable} ${avenirNextCyr.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

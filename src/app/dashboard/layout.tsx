import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Lendsqr Dashboard",
  description: "Created by Trae Zeeofor",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dashboard-layout">
      <Header />
      {children}
    </section>
  );
}

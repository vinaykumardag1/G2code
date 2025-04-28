"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Header from "@/components/Header";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header/>
            <main className="min-h-screen">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

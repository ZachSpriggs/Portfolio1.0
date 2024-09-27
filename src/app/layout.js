'use client'

import { Montserrat } from "next/font/google";
import ClientLayout from "./ClientLayout";
import '@/styles/globals.scss';
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
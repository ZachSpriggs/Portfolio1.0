import { Montserrat } from "next/font/google";
import ClientLayout from "./ClientLayout";
import '@/styles/globals.scss';
import { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
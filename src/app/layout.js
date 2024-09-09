import "@/styles/globals.scss";

export const metadata = {
  title: "Zach Spriggs - Portfolio",
  description: "Developer portfolio of Zach Spriggs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

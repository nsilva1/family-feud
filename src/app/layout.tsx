import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Family Feud - Church Edition",
  description: "A family feud styled quiz game with a religious theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <AppProvider>
          <ToastContainer />
          {children}
        </AppProvider> {/* Wrap children with AppProvider */}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappFloat from "./components/WhatsappFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Body Spa | Gurgaon",
  description: "Relax and rejuvenate at the best spa in Gurgaon.",
  icons: {
    icon: "/images/GurgaonSiteIcon.png",        // 32x32 ya 64x64 recommended
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",    // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsappFloat />
        <Footer />
      </body>
    </html>
  );
}

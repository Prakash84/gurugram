// import { GeistSans, GeistMono } from 'geist/font'
import "./globals.css";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappFloat from "./components/WhatsappFloat";
import Analytics from "./components/Analytics";

// const geist = Geist({
//   subsets: ['latin'],
//   variable: '--font-geist',
// })

// const geistMono = GeistMono({
//   subsets: ['latin'],
//   variable: '--font-geist-mono',
// })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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
        className={inter.className}
      >
         <Analytics />
        <Navbar />
        {children}
        <WhatsappFloat />
        <Footer />
      </body>
    </html>
  );
}

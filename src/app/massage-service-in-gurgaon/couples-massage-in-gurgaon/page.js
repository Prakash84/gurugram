import Couppage from "./Couppage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Experience Couples Massage in Gurgaon | Romantic Vibes",
  description: "Book a luxury couples massage in Gurgaon today. Relax together and enjoy soothing therapies in a private, romantic spa setting.",
  openGraph: {
    title: "Visit Best Sandwich Massage in Delhi | Started in just @1999",
    description: "Relax with Sandwich Massage in Delhi. Just visit our Sandwich Massage Spa in Karol Bagh to get the perfect sandwich massage in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Couppage />;
}

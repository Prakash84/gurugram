import B2bservice from "./B2bservice";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Get Body To Body Massage in Gurgaon | B2B Spa At Home",
  description: "Get a premium body to body massage in Gurgaon. Enjoy a private B2B spa at home and experience total comfort at your doorstep.",
  openGraph: {
    title: "Get Best Body Massage in Delhi | First Visit Offer 1999",
    description: "Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
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
  return <B2bservice />;
}

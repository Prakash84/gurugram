import Abpage from "./Abpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "About Our Luxury Spa in Gurgaon | 5 star outlets in Delhi Ncr",
  description: "Know more about our luxury spa in Gurgaon, offering body spa, couple spa, and ayurvedic therapies to clients across Delhi NCR with top-class service.",
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

export default function Page() {
  return <Abpage />;
}

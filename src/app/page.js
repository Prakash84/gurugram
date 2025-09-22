"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect, useRef  } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FaSpa, FaHotTub, FaBath, FaLeaf, FaHandSparkles, FaHotel, FaCrown, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {  FaMapMarkerAlt } from 'react-icons/fa';
// import WhatsappFloat from './components/WhatsappFloat';
// import womanImage from '/images/spaExpert4.jpg';
import { FaTelegram } from 'react-icons/fa';
import { Building2 } from "lucide-react";
import {  Star, MapPin, Sparkles, Hotel } from 'lucide-react';
import { Clock, CheckCircle2 } from "lucide-react";
import {  Globe } from "lucide-react";
import Head from "next/head";



const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
];

const outlets = [
  {
    title: 'Hotel in Aerocity',
    description: 'We provide body massage service at 5-star hotels in Aerocity, like Lemon Tree, Andaz, IBIS and so on.',
    image: '/images/NovotelNewDelhiAerocity.jpeg',

    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Hotel in NFC',
    description: 'Staying in a hotel in NFC and craving a massage? We provide B2B massage in delhi in hotels like The Suryaa and end all your days tiredness.',
    image: '/images/TheSuryaaNewDelhi(NFC).jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Hotel in Connaught Place',
    description: 'Our team of massage therapists visits your hotel in CP and provide best spa in CP to hotels like Radisson Blu, The Lalit, The Park and so on.',
    image: '/images/TheParkConnaughtPlace.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Dwarka Hotel',
    description: 'Our team of expert massage therapists will visit your hotel room in Dwarka and provide an on-demand hotel spa in Dwarka.',
    image: '/images/TheGrandNewDelhi.jpg',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
];
{/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Choose a Massage Service',
    description: 'Choose the type of massage service that suits your massage needs and requirements that fits your budget.',
    image: '/images/mmeeting.webp',
  },
  {
    number: '02',
    title: 'Appointment on Call or Telegram',
    description: 'Its easy to book and get quick confirmations via call or message us on Telegram with your massage needs.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Visit Us',
    description: 'At the time you choose, relax in one of our beautiful spa locations.',
    image: '/images/finalizing.avif',
  },
];
{/* End Our Process */}

//   const ProcessSteps = [
//   {
//     number: '01',
//     title: 'Meeting',
//     description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
//     image: '/images/mmeeting.webp',
//   },
//   {
//     number: '02',
//     title: 'Treatment',
//     description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
//     image: '/images/spa-treatments.jpg',
//   },
//   {
//     number: '03',
//     title: 'Finalizignng',
//     description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
//     image: '/images/finalizing.avif',
//   }, 
// ];
{/* End Our Process */}



export default function Home() {
  <Head>
        <title>Get Best Body Massage in Delhi | First Visit Offer 1999</title>
        <meta
          name="description"
          content="Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi. Book Your Session Now."
        />
      </Head>
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Which kinds of massage does Spa Delhi perform?",
      answer: "There is a wide range of massage services to address your wellness needs, and they include aromatherapy, deep tissue, B2B, and couple massages, to name a few. Both therapeutic techniques are designed to relax and heal.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Do your therapists have experience, or are they certified?",
      answer: "Yes, all our therapists are professional, fully trained individuals who are certified in their process and want to provide you with the best experience of massage experience.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "How do I make a reservation for a massage?",
      answer: "Booking is simple by phone, via Telegram, or online. Pick your service, favorable outlet, and time, and we will confirm.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Do you offer 24/ 7 massage?",
      answer: "Our timings are adaptable; we are available on a late-night and early-morning schedule to accommodate your tight schedule.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "What safety and hygiene precautions do you take?",
      answer: "Your safety means everything to us, as we are radically committed to maintaining high standards of cleanliness through the provision of fresh linens, sterilized equipment, and thorough therapist screening.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "May I ask a male or female therapist to see me?",
      answer: "Absolutely. You may make a therapist preference during the booking and we will take heed of your choice.",
      icon: <FaHandSparkles className="text-teal-600" />
    },   
  ];
  const features3 = [
    {
      icon: <Hotel className="w-8 h-8 text-emerald-600" />,
      title: "24+ Spa Outlets",
      desc: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience.",
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "24/7 Support Available",
      desc: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
      title: "Luxury Massage Available",
      desc: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace.",
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "Massage Therapists Across the Globe",
      desc: "Our team of massage therapists comes across borders, including India, Russia, Afghanistan, and more. When you choose us, you will be surprised with a wide range of massage therapist options available to serve you with your preferred star massage services in Aerocity.",
    },
  ];
  const features5 = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "24+ Spa Outlets",
      description: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience."
    },
    {
      icon: <Clock className="w-8 h-8 text-white-600" />,
      title: "24/7 Support Available",
      description: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Luxury Massage Available",
      description: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Massage Therapists Across the Globe",
      description: "Our team of massage therapists comes across borders, including India, Russia, Afghanistan, and more. When you choose us, you will be surprised with a wide range of massage therapist options available to serve you with your preferred star massage services in Aerocity."
    }
  ];


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      title: "Best Massage Parlour in Delhi with Luxury Spa Experience!",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/247484.jpg"
      
    },
    {
      title: "Best Massage Parlour in Delhi Awaits You",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/fpkdl.com_450_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg"
    },
    {
      title: "Escape Stress with Luxury B2B Massage in Delhi",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/woman-relaxing-spa.jpg"
    },
  ];

  const services = [
    {
      title: "Aromatherapy",
      description: "Healing essential oils calm the senses.",
      icon: "🌸",
    },
    {
      title: "Deep Tissue",
      description: " Relieves long-term muscular tension",
      icon: "💆‍♂️",
    },
    {
      title: "Hot Stone Therapy",
      description: "A sensual, professional way to connect with your body",
      icon: "🪨",
    },
    {
      title: "Couples Massage",
      description: "A romantic way to relax and feel good together",
      icon: "👫",
    },
  ];
  const services1 = [
    {
      title: "Foreigner Therapist",
      img: "/images/spaExpert4.jpg",
    },
    {
      title: "5 Star Hotels Spa",
      img: "/images/16+ Tranquil Spa Relaxation Room Ideas for Your Home.jpeg",
    },
    {
      title: "Home Spa",
      img: "/images/12 Romantic.jpeg",
    },
    {
      title: "Thai Massage",
      img: "/images/✨ Time to Relax & Rejuvenate!.jpeg",
    },
    {
      title: "B2B Therapy",
      img: "/images/new5.jpeg",
    },
    {
      title: "Night Spa",
      img: "/images/Dragged.jpeg",
    },
  ];
  

  const testimonials1 = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      comment: "The best spa experience in Delhi! The therapists are highly skilled and the ambiance is so relaxing.",
    },
    {
      name: "Rajiv Mehta",
      role: "Corporate Client",
      comment: "I have been coming here monthly for over a year. The deep tissue massage works wonders for my back pain.",
    },
    {
      name: "Ananya Singh",
      role: "First-time Visitor",
      comment: "Perfect escape from the city chaos. The aromatherapy session transported me to another world!",
    },
  ];
const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Product Manager, TechCorp",
      content: "This service completely transformed our workflow. The teams attention to detail and innovative approach solved problems we did not even know we had!",
      date: "April 15, 2023",
      rating: 5,
      initials: "JD",
      gradient: "from-indigo-500 to-emerald-600"
    },
    {
      id: 2,
      name: "Sarah Anderson",
      role: "Marketing Director, GrowthLab",
      content: "The results have been outstanding. Our conversion rates increased by 45% in just two months. The platform is intuitive and the support team is incredibly responsive.",
      date: "May 3, 2023",
      rating: 5,
      initials: "SA",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      name: "Michael Roberts",
      role: "CTO, InnovateX",
      content: "As a tech company, we are always skeptical about new tools. But this solution has exceeded our expectations. The API integration was seamless and performance is rock solid.",
      date: "June 8, 2023",
      rating: 4,
      initials: "MR",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];


  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Consultation", "shower"],
      highlight: false,
      ctaLink: "http://wa.link/njldxn",
      icon: <FaSpa className="text-emerald-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "http://wa.link/u061wi",
      icon: <FaHotel className="text-emerald-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "#",
      icon: <FaCrown className="text-emerald-500" />
    }
  ];

  const features = [
    "Private Room",
    "Jacuzzi Bath",
    "Steam Bath",
    "Naturally Spa",
    "5 Star Hotels",
    "Female Therapist",
    "Foreigner Therapist",
  ];

  const locations = [
  {
    name: "Lajpat Nagar",
    image: "/images/TheSuryaaNewDelhi(NFC).jpg", // Replace with actual image URL
    description: "We have luxury massage outlets in Lajpat Nagar, so whenever you are in Lajpat Nagar want you can de-stress with a home and massage service. Reach out to us.",
    link: "https://wa.me/8826482370"
  },
  {
    name: "Aerocity",
    image: "/images/NovotelNewDelhiAerocity.jpeg",
    description: "Our team provide b2b massage in Aerocity most luxurious locations. Whenever you choose us for your massage service in Aerocity, we will never disappoint.",
    link: "https://wa.me/8826482370"
  },
  {
    name: "Paschim Vihar",
    image: "/images/TheParkConnaughtPlace.jpg",
    description: "Choose Spa Delhi to enjoy the best massage services in Paschim Vihar. Enjoy the most relaxing massage at an outlet with perfect ambience.",
    link: "https://wa.me/8826482370"
  },
  {
    name: "Rohini",
    image: "/images/TheGrandNewDelhi.jpg",
    description: "We have our massage outlet available at Rohini location. If you want to experience spa experience in Rohini, we can deliver the best spa services in Delhi.",
    link: "https://wa.me/8826482370"
  }
];
const features2 = [
  { 
    title: 'Hotel OutLet', 
    icon: '/images/Group-42-1.png',
    description: 'Premium organic ingredients for radiant, healthy skin'
  },
  { 
    title: '24+ Spa Outlets', 
    icon: '/images/Group-48-1.png',
    description: 'Holistic treatments to melt away stress and tension'
  },
  { 
    title: 'Thai Staff', 
    icon: '/images/Group-47-1.png',
    description: 'Signature therapies tailored to your unique needs'
  },
  { 
    title: '24*7 Service Available', 
    icon: '/images/Group-45-1.png',
    description: 'Tranquil oasis designed for complete serenity'
  },

];
 // Physical Benefits Data
  const physicalBenefits = [
    { 
      id: 1, 
      title: "Muscle Relief", 
      description: "Stimulates knotted muscles and relieves pain.",
      icon: "💆"
    },
    { 
      id: 2, 
      title: "Improved Circulation", 
      description: "Increases blood circulation.",
      icon: "❤️"
    },
    { 
      id: 3, 
      title: "Detoxification", 
      description: "Helps the body naturally eliminate toxins.",
      icon: "✨"
    },
    { 
      id: 4, 
      title: "Flexibility Boost", 
      description: "Improves distribution of movement throughout the joints.",
      icon: "🧘"
    },
    { 
      id: 5, 
      title: "Pain Management", 
      description: "Relieves acute and chronic pain.",
      icon: "🛡️"
    }
  ];

  // Spiritual Benefits Data
  const spiritualBenefits = [
    { 
      id: 1, 
      title: "Stress Reduction", 
      description: "Helps to calm the mind and the nerves.",
      icon: "🧘‍♀️"
    },
    { 
      id: 2, 
      title: "Mental Clarity", 
      description: "Helps you concentrate and relax.",
      icon: "⚖️"
    },
    { 
      id: 3, 
      title: "Emotional Balance", 
      description: "It is calming for the mind and soul.",
      icon: "💡"
    },
    { 
      id: 4, 
      title: "Energy Flow", 
      description: "Opens and revitalizes the body energy.",
      icon: "🕊️"
    },
    { 
      id: 5, 
      title: "Deep Relaxation", 
      description: "Connects the body, the mind and the spirit.",
      icon: "🌀"
    }
  ];

 const outlets2 = [
  {
    name: "The Grand Plaza",
    desc: "Luxury spa at the heart of downtown with panoramic city views",
    rating: 5,
    tag: "Exclusive",
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />
  },
  {
    name: "Marina Bay Resort",
    desc: "Beachfront sanctuary with ocean-inspired treatments",
    rating: 4.9,
    tag: "Waterfront",
    icon: <Hotel className="w-6 h-6 text-emerald-600" />
  },
  {
    name: "Skyline Tower",
    desc: "Rooftop wellness center with city skyline views",
    rating: 4.8,
    tag: "Panoramic",
    icon: <Building2 className="w-6 h-6 text-emerald-600" />
  },
  {
    name: "Royal Gardens",
    desc: "Historic mansion transformed into a luxury spa retreat",
    rating: 5,
    tag: "Heritage",
    icon: <MapPin className="w-6 h-6 text-emerald-600" />
  },
];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]); // store refs for each answer

  const items = [
    {
      q: "Where can I find a Russian massage in Delhi?",
      a: "We provide vetted Russian therapists across multiple Delhi locations including Aerocity, Lajpat Nagar, Connaught Place and more. Book via Telegram or call to confirm availability.",
    },
    {
      q: "Can I get a Nuru massage in Delhi?",
      a: "We offer a variety of authentic massage styles depending on therapist availability and client preference. Please check the service list or contact support for specific requests.",
    },
    {
      q: "How to book a Russian massage near me in Delhi?",
      a: "Booking is quick — choose your service, preferred time and location, then confirm via Telegram/phone. We will send therapist details and safety checks before arrival.",
    },
    {
      q: "Why choose your spa for Russian massage in Noida?",
      a: "All therapists are background-checked, trained and follow strict hygiene protocols. We bring a hotel-level experience to your home or hotel with guaranteed privacy and quality.",
    },
    {
      q: "Do Russian spas in Delhi offer services for corporate clients?",
      a: "Yes — we provide corporate wellness packages, on-site chair massages and event services. Contact our corporate bookings team for custom plans and pricing.",
    },
  ];

  function toggle(i) {
    const isOpen = openIndex === i;
    // close if already open
    if (isOpen) {
      // collapse the element
      const el = contentRefs.current[i];
      if (el) {
        el.style.maxHeight = "0px";
      }
      setOpenIndex(null);
    } else {
      // open new one: first collapse previously opened (if any)
      if (openIndex !== null) {
        const prev = contentRefs.current[openIndex];
        if (prev) prev.style.maxHeight = "0px";
      }
      // then expand current
      const el = contentRefs.current[i];
      if (el) {
        // set to scrollHeight so it expands exactly to content height
        el.style.maxHeight = el.scrollHeight + "px";
      }
      setOpenIndex(i);
    }
  }

    const services4 = [
    {
      title: "Shower",
      image: "/images/icons8-shower-64.png.webp",
    },
    {
      title: "Hammam",
      image: "/images/icons8-spa-care-64.png.webp",
    },
    {
      title: "Jacuzzi Bath",
      image: "/images/icons8-jacuzzi-64.png.webp",
    },
    {
      title: "Steam Bath",
      image: "/images/icons8-bathhouse-64.png.webp",
    },
    {
      title: "Souna",
      image: "/images/icons8-sauna-64.png.webp",
    },
  ];
    const cities = [
{ name: 'DELHI', img: '/images/hotel3.webp' },
{ name: 'MUMBAI', img: '/images/lajpatnagahotel.avif' },
{ name: 'NOIDA', img: '/images/RoseateHouse.jpg' },
{ name: 'BANGALORE', img: '/images/paschimvihar.jpg' },
{ name: 'PUNE', img: '/images/JwMarriott_CP.jpg' },
{ name: 'AHMEDABAD', img: '/images/Andazhat.jpg' },
{ name: 'GURGAON', img: '/images/holidayIn_CP.jpg' },
{ name: 'HYDERABAD', img: '/images/tajmahalhotel_lajpatnagar.jpg' },
{ name: 'KOLKATA', img: '/images/paschimvihar.jpg' },
{ name: 'CHENNAI', img: '/images/hotel2.jpg' },
{ name: 'CHANDIGARH', img: '/images/pullmanAerocity.jpg' },
{ name: 'JAIPUR', img: '/images/jwmarriott.jpeg' },
]
const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
];
  return (
    <main bg-gradient-to-b from-emerald-50 to-white>
      <div className="font-sans overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-emerald-300/15 blur-3xl" />
        </div>

        {/* Hero Slider */}
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/images/spa_banner_resized_1680x588.jpeg"   // put image at /public/images/spa/spa-hero.jpg
              alt="Relaxing spa background"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent mix-blend-multiply" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  Premium
                </span>
                <span className="text-sm text-white/80">Authentic Therapists • Organic Oils</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                Relax • Rejuvenate • Rediscover
              </h1>

              {/* <p className="mt-6 text-white/90 max-w-xl">
                Premium body spa treatments in the heart of the city — tailored packages,
                experienced therapists, and a calming ambience.
              </p> */}

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg transition"
                >
                  Book Now
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white px-5 py-3 font-medium text-slate-800 shadow-sm transition"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>45–60 min sessions</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18" />
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
                  </svg>
                  <span>Private rooms available</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v4" />
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 6h8" />
                  </svg>
                  <span>Certified therapists</span>
                </div>
              </div>

              {/* <div className="mt-6 text-sm text-white/75">Want a custom package? <a href="#contact" className="underline">Contact us</a></div> */}
            </motion.div>

            {/* Right image card + testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="z-10 flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <Image
                    src="/images/fpkdl.com_960_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg" // put image at /public/images/spa/spa-card.jpg
                    alt="spa treatment"
                    width={720}
                    height={480}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute left-4 bottom-4 text-white">
                    <div className="text-sm font-medium">Signature Aromatherapy</div>
                    <div className="text-xs text-white/80 mt-1">60 min · ₹999</div>
                  </div>
                </div>

                <div className="absolute -left-5 -top-5 bg-white rounded-full p-3 shadow-xl">
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 6.5 7 13 7 13s7-6.5 7-13c0-3.87-3.13-7-7-7z" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="absolute -right-6 bottom-8 bg-white/90 rounded-3xl px-4 py-2 shadow-lg text-sm">
                  <div className="font-medium">Amazing experience — total reset!</div>
                  <div className="text-xs text-gray-600">— Priya</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* /// */}
        <section className="mt-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-3">
          Most Relaxing Luxury Spa in Delhi is here.
        </h2>
        <p className="text-gray-600 mb-10">
          Let your soul soar and reclaim your best self with our top spa in Delhi.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services1.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-48 h-70 rounded-full border-4 border-emerald-500 flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold font-serif text-emerald-700 group-hover:text-emerald-900 transition">
              {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>   
    {/* About Section */}
        <section className="py-15 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-50 to-transparent opacity-70"></div>
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-emerald-100/40 blur-3xl"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              className="flex flex-col justify-between h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="mr-2">✦</span> About Our Luxury Spa
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Get the Best <span className="relative">
                  <span className="text-emerald-600 z-10 relative">Massage in Delhi</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/60 z-0"></span>
                </span>
              </motion.h2>

              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  Discover the best <strong className="text-emerald-600 font-medium">massage service in Delhi,</strong> where every therapist utilizes their exceptional skills and personalized care to rejuvenate your body and soul. Whether you prefer deep tissue massage, B2B massage, or aromatherapy massage, our high-end treatments will leave you feeling completely satisfied, with a sense of ultimate relaxation and rejuvenation.
                </p>
              </motion.div>

              {/* Feature Grid with Hover Effects */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  { title: "Foreigner Therapist", icon: "🌏", desc: "Experts in global massage therapy" },
                  { title: "Female To Male Massage", icon: "💆‍♂️", desc: "Professional, private, and refreshing massage in Delhi" },
                  { title: "Best Body To Body Spa", icon: "✨", desc: "Relax together in a private setting" },
                  { title: "Couple Massage", icon: "👩‍❤️‍👨", desc: "Sensual and healing touch" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-50 hover:border-emerald-100 group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-emerald-600 transition-colors">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons with Animation */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/about"
                  className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-all"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More About Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </motion.a>

                <a
                  href="https://t.me/Tanuspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                >
                  <FaTelegram className="text-xl mr-3" />
                  Stay Updated on Telegram
                </a>
              </motion.div>
            </motion.div>

            {/* Left Image with Modern Frame & Parallax Effect */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    loading="lazy"
                    src="/images/Step into a world.jpeg"
                    alt="Spa Interior"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[2.5rem] z-0"
                  />

                  <motion.div
                    className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-rose-300/20 blur-xl z-0"
                    animate={{
                      y: [0, 15, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Content Hero Section */}
                          <section className="bg-gray-50 py-24">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Left: Text */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                  

                              <motion.h2
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Trusted Escort Services in Delhi – <span className="relative">
                  <span className="text-emerald-600 z-10 relative">Safe, Secure & Confidential</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/60 z-0"></span>
                </span>
              </motion.h2>
                    
                              <motion.div
                                className="space-y-6 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                              >
                                <p className="text-gray-600 text-lg leading-relaxed">
                                  Welcome to{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    Delhi Body Spa
                                  </strong>
                                  , where we offer a range of{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    luxury spa
                                  </strong>{" "}
                                  treatments including{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    female to male spa
                                  </strong>
                                  ,{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    couple massages
                                  </strong>
                                  , and much more. Escape the hustle of Delhi and immerse yourself
                                  in rejuvenating treatments tailored to your needs.
                                  Our expert therapists combine ancient and modern techniques to release stress, improve circulation, and restore balance.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                  Welcome to{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    Delhi Body Spa
                                  </strong>
                                  , where we offer a range of{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    luxury spa
                                  </strong>{" "}
                                  treatments including{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    female to male spa
                                  </strong>
                                  ,{" "}
                                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                                    couple massages
                                  </strong>
                                  , and much more. Escape the hustle of Delhi and immerse yourself
                                  in rejuvenating treatments tailored to your needs.
                                  Our expert therapists combine ancient and modern techniques to release stress, improve circulation, and restore balance.
                                </p>
                              </motion.div>
                  {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                    {title.split('\n').map((line, i) => (
                      <span key={i} className={i === 1 ? 'block mt-2' : 'block'}>{line}</span>
                    ))}
                  </h2> */}
            
                  {/* <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-lg">
                    {subtitle}
                  </p> */}
            
                  <div className="mt-10 flex justify-center lg:justify-start">
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                      View Properties
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
            
                {/* Right: Polaroid-ish images */}
                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-2xl relative">
                    {/* Top image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, rotate: -6 }}
                      animate={{ opacity: 1, y: 0, rotate: -6 }}
                      transition={{ duration: 0.6 }}
                      className="absolute right-0 -top-12 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2"
                      style={{ transformOrigin: 'right center' }}
                    >
                      <div className="rounded-md overflow-hidden border-1 border-white">
                        <Image
                          src='/images/spaimage.jpeg'
                          alt="property 1"
                          width={900}
                          height={600}
                          className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
                        />
                      </div>
                    </motion.div>
            
                    {/* Bottom image */}
                    <motion.div
                      initial={{ opacity: 0, y: 40, rotate: 6 }}
                      animate={{ opacity: 1, y: 0, rotate: 6 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="relative mt-52 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2 mx-auto"
                      style={{ transformOrigin: 'left center' }}
                    >
                      <div className="rounded-md overflow-hidden border-1 border-white">
                        <Image
                          src='/images/ppp.jpeg'
                          alt="property 2"
                          width={900}
                          height={600}
                          className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
                        />
                      </div>
                    </motion.div>
            
                    {/* Decorative subtle background circle */}
                    <div className="hidden lg:block absolute -left-28 top-28 w-56 h-56 bg-white rounded-full opacity-30 filter blur-xl"></div>
                  </div>
                </div>
              </div>
                          </section>
                          {/* End Content Hero Section */}
        {/* /////// */}
        <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Visual collage */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Big rounded promo card (bottom-left) */}
            <div className="w-[700px] h-[723px] bg-emerald-50 rounded-2xl shadow-lg p-6 transform lg:-translate-x-6 lg:translate-y-8">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src="/images/Screenshot 2025-09-20 131443.png"
                  alt="promo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* small text badge */}
              <div className="absolute left-8 bottom-8 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full shadow">
                1st Visit @1999
              </div>
            </div>

          </div>

          {/* RIGHT: Content */}
          <div>
            <p className="text-sm text-emerald-800 font-semibold mb-4">HOME AND HOTEL SPA</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Best Home and Hotel Spa
              <br />
              Massage Center in Delhi NCR
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl">
              Are you in Delhi-NCR and searching for a <strong>luxurious spa near in Delhi</strong>, but its too hot to step outside? Luxury Body Spa has come to your rescue — whether you want a spa at your home or are visiting Delhi and tired from travel. Our skilled therapists (Indian, Russian, Thai, Afghan) deliver authentic massages that help you unwind and relax.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="#book"
                className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium shadow"
              >
                Book Now
              </a>

              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-emerald-200 text-emerald-700 px-5 py-3 rounded-lg shadow-sm hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zM17.7 7.3l-1.8 8.1c-.1.5-.4.6-.8.6-.2 0-.3-.1-.5-.2l-2.2-1.7-1.1 1.1v0l.4 2.9c.1.5 0 .8-.3 1.1-.3.3-.6.3-1.1.2-1.2-.3-3.1-1.1-4.2-1.7-.9-.6-1-1.2-.6-2.1l3.9-7.2c.4-.9.9-1.2 1.8-.8L17.7 7.3z" />
                </svg>
                Chat on Telegram
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500 max-w-xl">
              We serve in Aerocity, Connaught Place, Lajpat Nagar and many more — hygienic, reliable and luxury spa experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
        {/* Services Section */}
        <section id="services" className="py-10 px-6 md:px-16 bg-gradient-to-b from-emerald-50 to-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.p
                className="text-emerald-500 uppercase font-semibold tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Luxury Massage Services
              </motion.p>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Luxury <span className="text-emerald-500">Spa in Aerocity</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-50 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15 }}
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-5xl mb-6 text-emerald-500">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a href="#" className="text-emerald-600 font-medium flex items-center gap-2 group-hover:underline">Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Location */}
        <section className="py-12 bg-gray-50">
             <div className="max-w-7xl mx-auto px-6">
              {/* Heading */}
                  <div className="text-center mb-16">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <FaStar className="text-emerald-500" />
                      Affordable Luxury
                    </motion.div>
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      Our Luxury <span className="text-emerald-600">OutLet in Delhi, Noida and Gurgaon</span>
                    </motion.h2>
                    <motion.p
                      className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Meet our diverse team of professionals who bring excellence and passion to every engagement.
                    </motion.p>
                    <motion.div
                       className="flex justify-center mt-10"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5, duration: 0.5 }}
                     >
                       <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                     </motion.div>
                  </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {cities.map((c, i) => (
                <motion.a
                key={c.name}
                href={`#/cities/${c.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
                >
                <div className="relative w-full h-44 sm:h-48 lg:h-52">
                <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>


                <div className="absolute left-0 right-0 bottom-4 px-4 text-center">
                <span className="text-white text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg uppercase">{c.name}</span>
                </div>
                </motion.a>
                ))}
                </div>


                <div className="flex justify-center mt-10">
                <a
                href="#/cities"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                >
                View All Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                </a>
                </div>
</div>
        </section>
    {/* End Location */}
        {/* Pricing Section */}
                <section id= "Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-emerald-200 opacity-15 blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                  {/* Heading */}
                  <div className="text-center mb-16">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <FaStar className="text-emerald-500" />
                      Affordable Luxury
                    </motion.div>
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      Our Massage with <span className="text-emerald-600">Full Service Price in Delhi, Noida and Gurgaon</span>
                    </motion.h2>
                    <motion.p
                      className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Tailored spa experiences starting from just ₹1999. Choose from our exclusive massage options, designed for your total relaxation and rejuvenation.
                    </motion.p>
                    <motion.div
                       className="flex justify-center mt-10"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5, duration: 0.5 }}
                     >
                       <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                     </motion.div>
                  </div>
          
                  {/* Pricing Cards */}
                  <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {pricingPlans.map((plan, index) => (
                      <motion.div
                        key={index}
                        className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "transform lg:-translate-y-4" : ""}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                      >
                        {/* Featured badge */}
                        {plan.highlight && (
                          <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                            MOST POPULAR
                          </div>
                        )}
                        
                        <div className={`h-full flex flex-col border ${plan.highlight ? "border-emerald-500 shadow-xl" : "border-emerald-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                          <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-emerald-600 to-emerald-700" : "bg-emerald-800"}`}>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-3xl">
                                {plan.icon}
                              </div>
                              <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-emerald-100"}`}>
                                {plan.title}
                              </h3>
                            </div>
                            <p className={`text-lg ${plan.highlight ? "text-emerald-100" : "text-emerald-200"}`}>
                              {plan.description}
                            </p>
                          </div>
                          
                          <div className="p-8 pt-12 pb-10 -mt-6 relative">
                            {/* Price circle */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                              <span className="text-white text-xl font-bold">
                                {plan.price}
                              </span>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                                  <span className="text-emerald-800">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <a
                              href={plan.ctaLink}
                              className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                                plan.highlight 
                                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-xl hover:from-emerald-600 hover:to-emerald-700"
                                  : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                              }`}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
          
                  {/* Additional information */}
                  {/* <motion.div 
                    className="mt-16 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 md:p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="bg-emerald-200 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Flexible Booking Options</h3>
                        <p className="text-emerald-800 max-w-2xl">
                          All packages include free rescheduling up to 24 hours before your appointment. 
                          <span className="font-semibold"> Group discounts available for 3+ bookings!</span>
                        </p>
                      </div>
                    </div>
                  </motion.div> */}
                </div>
              </section>
              {/* End Pricing Section */}
{/* //// */}
            <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cursive text-4xl md:text-5xl text-emerald-800"
          style={{ fontFamily: '"Great Vibes", cursive' }}
        >
          Our Service For You
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base"
        >
          We offer <strong>Russian spa in south Delhi</strong>, Kalkaji, CP and Aerocity. Get Genuine Massage
          service like nuru massage, b2b massage, hot stone & oil massage and many more.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 items-start justify-items-center">
          {services4.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center w-36"
            >
              <div className="rounded-full p-3 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-gray-50">
                <img src={s.image} alt={s.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-serif text-gray-800">{s.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#services" className="inline-block mt-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
        {/* Why Choose Us Section (kept as-is) */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-[#faf7f2] to-[#fff]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-full mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-emerald-700 font-medium tracking-wider text-sm">PREMIUM SPA SERVICES</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 font-serif">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Spa Delhi</span> for a Massage in Delhi?
            </h2>

            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8">
              <p className="text-emerald-800/80 text-lg md:text-xl leading-relaxed">
                Spa Delhi is the best Massage centre in Delhi, bringing all visitors luxurious massage experiences at an affordable price. At Spa Delhi, we combine professionalism and indulgence to present the most reliable full-body massage in Delhi. Our experienced massage therapists utilize effective massage techniques to address your custom massage expectations.
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">{features3.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}</div>
        </section>
        {/* 18+ Section and other sections continue... */}
        {/* ////// */}
        <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl font-semibold text-slate-800">Benefits</h2> */}
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Benefits</span> 
            </h2>
          <p className="text-slate-600 mt-2">Physical & spiritual benefits of our spa treatments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Physical */}
          <div className="space-y-6">
            
            <h3 className="text-2xl font-medium text-slate-800">Physical Benefits</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                {/* small decorative svg */}
                <div className="w-6 h-6 relative flex-shrink-0">
                  <Image
                    src="/images/physicalbenifits1.png"   // put image in public/images/icons/
                    alt="booking icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-slate-700">Relieves muscle tension — eases stiffness and soreness.</p>
              </li>

              <li className="flex items-start gap-4">
               <div className="w-6 h-6 relative flex-shrink-0">
                  <Image
                    src="/images/physicalbenifits2.png"   // put image in public/images/icons/
                    alt="booking icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-slate-700">Improves blood circulation — boosts oxygen flow.</p>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 relative flex-shrink-0">
                  <Image
                    src="/images/physicalbenifits3.png"   // put image in public/images/icons/
                    alt="booking icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-slate-700">Detoxifies the body — helps flush out toxins via massage.</p>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 relative flex-shrink-0">
                  <Image
                    src="/images/physicalbenifits4.png"   // put image in public/images/icons/
                    alt="booking icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-slate-700">Strengthens immunity — supports the body’s natural defenses.</p>
              </li>
            </ul>
          </div>

          {/* Right: Spiritual */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-slate-800">Spiritual Benefits</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 3c-2 0-4 1-5 3-1 2-1 4 0 6 1 2 3 4 5 4s4-2 5-4c1-2 1-4 0-6-1-2-3-3-5-3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-slate-700">Promotes inner peace — calms the mind and reduces emotional stress.</p>
              </li>

              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 12a9 9 0 0 0 18 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-slate-700">Balances energy flow — aligns chakras and harmonizes energy.</p>
              </li>

              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 12a6 6 0 0 0-6-6H9a6 6 0 0 0-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-slate-700">Deepens meditation — prepares body and mind for spiritual practice.</p>
              </li>

              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
                  <path d="M12 2v2M12 20v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-slate-700">Cleanses negativity — releases stress and emotional buildup.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#book" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow">
            Book Now
          </a>
        </div>
      </div>
    </section>
        {/* process Section */}
            <section className="bg-white/5 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 font-serif">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Process</span> for a Massage in Delhi?
            </h2>
          
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Har kadam par dhyaan — humare spa ka process simple, safe aur relaxing hai. Book karo, aao aur reset feel karo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-emerald-700/10 to-transparent rounded-2xl p-5 flex flex-col items-start gap-4"
          >
            <div className="w-full flex items-center gap-4">
              <div className="flex-shrink-0 bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald">Book &amp; Consult</h3>
                <p className="text-xs text-emerald/70">Online ya call se appointment. Therapist se short consultation hoti hai.</p>
              </div>
            </div>

            <div className="relative w-full h-44 rounded-lg overflow-hidden mt-2">
              <Image
                src="/images/process1.jpeg"
                alt="Booking and consultation"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>

            <div className="mt-auto text-sm text-emerald/80">Flexible slots, personalized recommendations, aur safety protocols follow karte hain.</div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-emerald-700/10 to-transparent rounded-2xl p-5 flex flex-col items-start gap-4"
          >
            <div className="w-full flex items-center gap-4">
              <div className="flex-shrink-0 bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald">Relaxing Treatment</h3>
                <p className="text-xs text-emerald/70">Certified therapist ke saath tailored massage aur organic oils.</p>
              </div>
            </div>

            <div className="relative w-full h-44 rounded-lg overflow-hidden mt-2">
              <Image
                src="/images/process2.jpeg"
                alt="Relaxing treatment"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>

            <div className="mt-auto text-sm text-emerald/80">Comfortable rooms, calming music aur therapy focused on your needs.</div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-emerald-700/10 to-transparent rounded-2xl p-5 flex flex-col items-start gap-4"
          >
            <div className="w-full flex items-center gap-4">
              <div className="flex-shrink-0 bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald">Aftercare &amp; Relax</h3>
                <p className="text-xs text-emerald/70">Hydration tips, follow-up suggestions aur loyalty offers.</p>
              </div>
            </div>

            <div className="relative w-full h-44 rounded-lg overflow-hidden mt-2">
              <Image
                src="/images/process3.jpeg"
                alt="Aftercare and relax"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>

            <div className="mt-auto text-sm text-emerald/80">Personalized notes aur next booking par special discount.</div>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <a href="#book" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Book Your Session
          </a>
        </div>
      </div>
    </section>
    {/* ENd process Section */}
    {/* Our Therapy Experts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
          <motion.p
            className="text-emerald-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experts Therapy
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Best<span className="text-emerald-600"> Massage Therapist</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             World-class therapists dedicated to your wellness.
          </motion.p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                  loading="lazy"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300">{member.designation}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaFacebookF /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* End Our Therapy Experts */}
        {/* FAQ Section - fixed apostrophe here by using HTML entity */}
<section className="py-16">
  <div className="max-w-5xl mx-auto px-4">
<motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:text-left mb-14"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaStar className="text-emerald-500" />
          Questions? We&apos;re here to help
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4">
          Frequently Asked <span className="text-emerald-600">Questions</span>
        </h2>
        <p className="text-emerald-800 max-w-2xl text-lg">
          Everything you need to know about our luxurious spa services and how to book them.
        </p>
        <div className="flex md:justify-start justify-center mt-6">
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </div>
      </motion.div>
  </div>
      
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Left Side FAQ Content */}
    <div>
      

      {/* FAQ Accordion */}
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 bg-emerald-50 rounded-lg">{faq.icon}</div>
                <h3 className="text-lg md:text-xl font-medium text-emerald-900 group-hover:text-emerald-700 transition-colors">
                  {faq.question}
                </h3>
              </div>
              <div className="ml-4 flex-shrink-0">
                <svg
                  className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-emerald-50">
                    <p className="text-emerald-700">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Right Side Image */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <img
        src="/images/Professional European.jpeg"
        alt="Spa FAQ Illustration"
        className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
      />
    </motion.div>
  </div>
</section>       
        {/* /// */}
        {/* <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
         
          <div>
            <      h3
              className="text-4xl font-semibold text-emerald-700 mb-6"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {items.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {i + 1}. {f.q}
                    </span>

                    <span className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-200 ${
                          openIndex === i ? "rotate-45 text-emerald-700" : "text-gray-500"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[i] = el)}
                    style={{
                      maxHeight: "0px",
                      overflow: "hidden",
                      transition: "max-height 300ms ease",
                    }}
                    className="px-5 pb-4 text-gray-700"
                  >
                    <p className="text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <img src="/images/From soothing Swedish.jpeg" alt="Spa FAQ" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section> */}
        {/* Footer / CTA / Other components */}

    </main>
     
  );
}



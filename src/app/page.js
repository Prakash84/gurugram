"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from "react";
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
      icon: <Hotel className="w-8 h-8 text-amber-600" />,
      title: "24+ Spa Outlets",
      desc: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience.",
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "24/7 Support Available",
      desc: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-amber-600" />,
      title: "Luxury Massage Available",
      desc: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace.",
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-600" />,
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
      image: "/images/hb1.jpg"
      
    },
    {
      title: "Best Massage Parlour in Delhi Awaits You",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb2.jpg"
    },
    {
      title: "Escape Stress with Luxury B2B Massage in Delhi",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb3.jpg"
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
      gradient: "from-indigo-500 to-purple-600"
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
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "http://wa.link/u061wi",
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "#",
      icon: <FaCrown className="text-amber-500" />
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
    icon: <Sparkles className="w-6 h-6 text-amber-600" />
  },
  {
    name: "Marina Bay Resort",
    desc: "Beachfront sanctuary with ocean-inspired treatments",
    rating: 4.9,
    tag: "Waterfront",
    icon: <Hotel className="w-6 h-6 text-amber-600" />
  },
  {
    name: "Skyline Tower",
    desc: "Rooftop wellness center with city skyline views",
    rating: 4.8,
    tag: "Panoramic",
    icon: <Building2 className="w-6 h-6 text-amber-600" />
  },
  {
    name: "Royal Gardens",
    desc: "Historic mansion transformed into a luxury spa retreat",
    rating: 5,
    tag: "Heritage",
    icon: <MapPin className="w-6 h-6 text-amber-600" />
  },
];
  return (
    <main>
      <div className="font-sans overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-amber-400/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-amber-600/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-amber-300/15 blur-3xl" />
        </div>

        {/* Hero Slider */}
        <section className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh]">
          <Swiper
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
            className="w-full h-full"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-24 z-10">
                    <motion.h2
                      className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl md:max-w-3xl leading-snug mb-4 font-serif"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <a
                        href="https://t.me/Tanuspa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Join Telegram Channel
                      </a>

                      <a href="#services" className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 border border-white">
                        Explore Our Spa Services
                      </a>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* About Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-amber-100/40 blur-3xl"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              className="flex flex-col justify-between h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium"
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
                  <span className="text-amber-600 z-10 relative">Massage in Delhi</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
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
                  Discover the best <strong className="text-amber-600 font-medium">massage service in Delhi,</strong> where every therapist utilizes their exceptional skills and personalized care to rejuvenate your body and soul. Whether you prefer deep tissue massage, B2B massage, or aromatherapy massage, our high-end treatments will leave you feeling completely satisfied, with a sense of ultimate relaxation and rejuvenation.
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
                    className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-50 hover:border-amber-100 group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-amber-100 text-amber-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-amber-600 transition-colors">{feature.title}</h4>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 transition-all"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-all"></div>
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
                    src="/images/chatgptspa.png"
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

        {/* Services Section */}
        <section id="services" className="py-10 px-6 md:px-16 bg-gradient-to-b from-amber-50 to-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.p
                className="text-amber-500 uppercase font-semibold tracking-wider mb-4"
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
                Luxury <span className="text-amber-500">Spa in Aerocity</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-50 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15 }}
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-5xl mb-6 text-amber-500">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a href="#" className="text-amber-600 font-medium flex items-center gap-2 group-hover:underline">Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section (kept as-is) */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-[#faf7f2] to-[#fff]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-amber-700 font-medium tracking-wider text-sm">PREMIUM SPA SERVICES</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Spa Delhi</span> for a Massage in Delhi?
            </h2>

            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8">
              <p className="text-amber-800/80 text-lg md:text-xl leading-relaxed">
                Spa Delhi is the best Massage centre in Delhi, bringing all visitors luxurious massage experiences at an affordable price. At Spa Delhi, we combine professionalism and indulgence to present the most reliable full-body massage in Delhi. Our experienced massage therapists utilize effective massage techniques to address your custom massage expectations.
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">{features3.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}</div>
        </section>

        {/* 18+ Section and other sections continue... */}

        {/* FAQ Section - fixed apostrophe here by using HTML entity */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
              <motion.div className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <FaStar className="text-amber-500" />
                Questions? We&apos;re here to help
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-4">
                Frequently Asked <span className="text-amber-600">Questions</span>
              </h2>
              <p className="text-amber-800 max-w-2xl mx-auto text-lg">Everything you need to know about our luxurious spa services and how to book them.</p>
              <div className="flex justify-center mt-6">
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </div>
            </motion.div>

            {/* FAQ Accordion */}
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
                  <button onClick={() => toggleFAQ(index)} className="w-full p-6 text-left flex items-center justify-between focus:outline-none group">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-amber-50 rounded-lg">{faq.icon}</div>
                      <h3 className="text-lg md:text-xl font-medium text-amber-900 group-hover:text-amber-700 transition-colors">{faq.question}</h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-amber-50">
                          <p className="text-amber-700">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / CTA / Other components */}

      </div>
    </main>
     
  );
}

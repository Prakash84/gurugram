'use client';
import React, { useState, useEffect } from 'react'

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSpa, FaHotel, FaCrown } from 'react-icons/fa';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { FaHandSparkles, FaLeaf, FaHotTub } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { FaTelegram } from 'react-icons/fa';
import {  FaClock, FaPhoneAlt,  FaCreditCard } from 'react-icons/fa'
import { Leaf, HeartHandshake, Clock, Sparkles } from "lucide-react";



export default function Lajpatnagar() {
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
                    question: "What makes a luxury spa in Lajpatnagar unique?",
                    answer: " Spa in Lajpatnagar is the premium and luxury spa outlet in Delhi. At the aerocity outlet we offer foreign international therapists to provide spa in top 5 star hotels of Delhi.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                    question: "Are Lajpatnagar spa services near the airport?",
                    answer: "Yes, Our Lajpatnagar outlets are conveniently located close to IGI Airport hotels. You can call us for your spa session booking and we will come to your door steps to provide 100% relaxation.",
                    icon: <FaHandSparkles className="text-teal-600" />
                  },
                  
                  {
                    question: "Is body massage in Lajpatnagar available?",
                    answer: "Yes, We offer multiple types of massage therapy in our aerocity spa. Potli massage, hot stone massage, swedish massage or full body massage in Lajpatnagar. For more query contact us.",
                    icon: <FaLeaf className="text-teal-600" />
                  },
                  {
                    question: "Are Lajpatnagar rates different from other outlets?",
                    answer: "Yes, Because Lajpatnagar is the premium location and our spa outlet in Lajpatnagar is known for luxury and premium service. Spa in aerocity prices are different from other spas. Check the Pricing page for exact rates.",
                    icon: <FaSpa className="text-teal-600" />
                  },
                  {
                        question: "Can I book a hotel spa in Lajpatnagar?",
                        answer: "Yes, you can book your spa session at the 5 star hotels in aerocity. We have 5 star hotel spa outlets in aerocity Jw Marriott, Lemon Tree, Novotel and Ibis Hotel.",
                        icon: <FaHotTub className="text-teal-600" />
                      },
                      {
                            question: "Can I pay online for my services?",
                            answer: "Yes, we offer secure online payment options through our website for your convenience.",
                            icon: <FaSpa className="text-teal-600" />
                          },
                ];
  const hotelOutlets = [
  {
    title: "JW Marriott Hotel Lajpatnagar",
    image: "/images/JW Marriott Hotel Lajpatnagar.jpg",
    description:
      "Spend your time in the quality environment of JW Marriott Hotel Lajpatnagar and include a calming spa experience to your visit. Our professional therapists come with therapies that are designed to relieve the stress and cheer up the senses, hence your visit becomes even more pampering. The calmness of our treatments is the ideal match to the beautiful environment of this popular hotel.",
  },
  {
    title: "Lemon Tree Premier Lajpatnagar",
    image: "/images/LemonTreePremierLajpatnagar.jpg",
    description:
      "Lemon Tree Premier Lajpatnagar combines style with relaxation, and Spa In Gurgaon adds to that comfort with on-demand massage sessions in your room. Whether you want a couple's massage or need complete body relaxation, our spa centre in Mahipalpur helps you unwind after a busy schedule in the bustling Lajpatnagar area.",
  },
  {
    title: "Novotel New Delhi Lajpatnagar",
    image: "/images/NovotelNewDelhiLajpatnagar.jpeg",
    description:
      "Novotel Lajpatnagar is a convenient and luxurious place to stay, and our spa services are an added bonus to your stay. Whether it is reviving full-body massage or relaxing treatments aimed at alleviating stress, each of the services makes you feel refreshed. Your stay will be something to remember with the help of our therapists.",
  },
  {
    title: "Pride Plaza Hotel",
    image: "/images/pride-plaza-hotel-aerocity1-2.jpg",
    description:
      "Visit to Pride Plaza Hotel is even more comfortable with Spa In Gurgaon. Our Best spa in Lajpatnagar is designed to minimize muscle aches, energize you, and leave you feeling refreshed. The soothing atmosphere we create takes luxury relaxation to the next level. ",
  },
  {
    title: "IBIS New Delhi Lajpatnagar",
    image: "/images/IBISNewDelhiLajpatnagar.jpg",
    description:
      "IBIS Lajpatnagar is popular due to comfort and practicality, and Spa In Gurgaon is the one that makes your relaxation instantly available to your door. You can experience stress relief, sore muscles, and complete recharge with our massages customized to your needs while on-site. Each session has been designed to be comfortable.",
  },
  {
    title: "Pullman Lajpatnagar",
    image: "/images/pullmanLajpatnagar.jpg",
    description:
      "Pullman Lajpatnagar is where wellness and indulgence are united. Our professional hands mean that every therapy is unique, whether it is stress-relieving aromatherapy or the deep tissue bodywork. Spa In Gurgaon ensures your body feels lighter and refreshed, turning your time at Pullman into a complete wellness getaway.",
  },
  {
    title: "Jaypee Vasant Lajpatnagar",
    image: "/images/jaypeeVasantLajpatnagar.png",
    description:
      "At Jaypee Vasant Lajpatnagar, Spa In Gurgaon creates a soothing break from the demands of travel. Our spa in Mahipalpur relaxes the body, reduces stress, and gives clarity to the mind. Getting a professional service in the comfort of your hotel room means enjoying a relaxing getaway without having to leave the comfort of your room. ",
  },
  {
    title: "The Ashok (Chanakyapuri)",
    image: "/images/TheAshok(Chanakyapuri).webp",
    description:
      "The massage services at Spa In Gurgaon are as attractive as the Ashok. Our therapies restore balance and relaxation, blending seamlessly with the luxurious ambiance of the hotel. All the sessions are well scheduled so that you can enjoy your stay as both healing and refreshing.",
  },
];
  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "30 min Consultation"],
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
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "Facial Session", "120 min Session"],
      highlight: false,
      ctaLink: "#",
      icon: <FaCrown className="text-emerald-500" />
    }
  ];
   {/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Meeting',
    description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
    image: '/images/women-spa-posing-bath-robes - Copy.jpg',
  },
  {
    number: '02',
    title: 'Treatment',
    description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
    image: '/images/Your Path to Healing_ Proven Massage Services in Fairfax.jpeg',
  },
  {
    number: '03',
    title: 'Finalizing',
    description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
    image: '/images/ppp.jpeg',
  },
];
{/* End Our Process */}
  const services = [
    {
      title: "B2B Massage",
      description: "This therapy focuses on comfort and deep relaxation. The technique melts away stress and leaves you feeling revived and fresh.",
      icon: "💆‍♂️",
    },
    {
      title: "Couples Massage",
      description: "Our couple massage offers a shared moment of relaxation. Perfect for couples celebrating a trip or a special occasion, it builds emotional connection alongside complete body relaxation.",
      icon: "👫",
    },
    // {
    //   title: "Thai Massage",
    //   description: "With stretches, pressure points, and slow movements, Thai massage helps improve flexibility and restores natural body energy. It is an effective therapy that combines healing and relaxation.",
    //   icon: "💆‍♀️🧘‍♀️",
    // },
    
    {
      title: "Aromatherapy",
      description: "This soothing therapy combines soft techniques with essential oils. It creates a calming environment that lifts the mood and eases away stress.",
      icon: "🌸",
    },
    {
      title: "Hot Stone Therapy",
      description: "Warm stones during this treatment are applied in a cautious manner over your body to eliminate muscle stiffness and enhance blood circulation. The warmth makes you feel relaxed totally, and the stress is relieved.",
      icon: "🪨",
    },
    {
      title: "Sandwich Massage",
      description: "Warm stones during this treatment are applied in a cautious manner over your body to eliminate muscle stiffness and enhance blood circulation. The warmth makes you feel relaxed totally, and the stress is relieved.",
      icon: "🪨",
    },
    {
      title: "Full Body Massage",
      description: "Warm stones during this treatment are applied in a cautious manner over your body to eliminate muscle stiffness and enhance blood circulation. The warmth makes you feel relaxed totally, and the stress is relieved.",
      icon: "🪨",
    },
  ];
  const services1 = [
  {
    id: 'swedish',
    title: 'Swedish Massage',
    desc: 'Gentle long strokes for total relaxation — perfect for first-time guests and light-tension relief.',
    duration: '60 / 90 mins',
    price: '₹1,499 - ₹2,499',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 8l3-3 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'deep',
    title: 'Deep Tissue Massage',
    desc: 'Targeted pressure to relieve chronic muscle tension and knots. Best for athletes and heavy tension.',
    duration: '60 / 90 mins',
    price: '₹1,799 - ₹2,999',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'couple',
    title: 'Couple Massage',
    desc: 'Shared, synchronised therapy for two — perfect for couples staying at Lajpatnagar hotels.',
    duration: '60 / 90 mins',
    price: '₹3,499 - ₹4,999',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M7 7a4 4 0 018 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20a9 9 0 0118 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'aroma',
    title: 'Aromatherapy',
    desc: 'Relaxing aromatic oils combined with light-to-medium pressure to calm mind and senses.',
    duration: '45 / 60 mins',
    price: '₹1,299 - ₹1,899',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2s4 1 4 4-2 4-4 4-4-1-4-4 4-4 4-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18c2-2 4-3 6-3s4 1 6 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'hotstone',
    title: 'Hot Stone Massage',
    desc: 'Warm stones and calming strokes to release deep muscle tension and induce deep relaxation.',
    duration: '75 / 90 mins',
    price: '₹2,199 - ₹3,499',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 17c2-3 7-4 9-4s7 1 9 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12c3-4 9-4 12 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]
const SERVICES_LEFT = [
  {
    id: 'foreigner',
    title: 'Unmatched Luxury and Ambiance',
    subtitle: 'International therapists for authentic treatments',
    desc:
      "All of the Spa In Gurgaon branches are designed to be relaxing. With cozy interiors and relaxing scents, each and every component is created to help you relax.",
    chips: ['Russian Therapist', 'Afgani Therapist', 'Uzbeki Therapist'],
    time: '60-90 min',
    price: 'From ₹2,800',
    image: '/images/spamodel.jpg',
  },
  {
    id: 'body',
    title: 'Highly Skilled Global Therapists',
    subtitle: 'Mastery across 23 specialised modalities',
    desc:
      "Our therapists are professionally trained, experienced and have knowledge of international spa techniques. They deliver treatments focused on quality and care for each client.",
    chips: [
      'Thai Herbal Compress',
      'Shiatsu',
      'Lymphatic Drainage',
      'Ayurvedic Abhyanga',
      'Hot Stone',
      'Aromatherapy',
    ],
    time: '75-90 min',
    price: 'From ₹3,200',
    image: '/images/services.webp',
  },
]

const SERVICES_RIGHT = [
  {
    id: 'top',
    title: 'Wide Range of Premium Treatments',
    subtitle: 'Sustainable + award-winning',
    desc:
      "With many therapies like full-body massage, couple massage, aromatherapy, and body-to-body, our menu adapts to everyone’s needs.",
    chips: ['Zero-Waste', 'Organic Linens', 'Water Recycling', 'Carbon Offsetting'],
    time: '60-120 min',
    price: 'From ₹2,500',
    image: '/images/process3.jpeg',
  },
  {
    id: 'packages',
    title: 'Accessible at Delhi’s Top Hotels',
    subtitle: 'Premium in-room & home journeys',
    desc:
      "Spa In Gurgaon is available in leading hotels in Lajpatnagar, including JW Marriott, Novotel, and Pullman. The easy access makes our services convenient for anyone who values comfort.",
    chips: ['JW Marriott Lajpatnagar', 'The Suryaa', 'The Park CP'],
    time: '3-6 hours',
    price: 'From ₹8,500',
    image: '/images/RoseateHouse.jpg',
  },
]
const topSteps = [
    {
      icon: <FaHotel className="text-emerald-700 text-xl" />,
      title: 'Therapist Arrival at Your Hotel',
      text: 'Our therapist arrives at your hotel punctually with all the materials required to carry out your massage like oils, towels, and linens.',
    },
    {
      icon: <FaClock className="text-emerald-700 text-xl" />,
      title: '24/7 Availability in Lajpatnagar',
      text: 'We accept bookings any time of the day or night, which is very accommodating to busy travellers.',
    },
    {
      icon: <FaPhoneAlt className="text-emerald-700 text-xl" />,
      title: 'Quick Call or Telegram Booking',
      text: 'Get in touch with either a direct call or Telegram and schedule your session immediately.',
    },
  ]

  const bottomSteps = [
    {
      icon: <FaSpa className="text-emerald-700 text-2xl" />,
      title: 'Expect a Spa-Grade Setup in Your Room',
      text: 'We bring fresh sheets, calming oils, mood lighting and sanitized equipment. You just relax, we handle the rest.',
    },
    {
      icon: <FaCreditCard className="text-emerald-700 text-2xl" />,
      title: 'Flexible Payments & Feedback System',
      text: 'Pay via UPI, cash, card or online. After your session, rate your therapist and share feedback — we value your experience.',
    },
  ]

    const quickCards = [
    {
      title: "Aromatherapy Bliss",
      desc: "Calming essential oils to ease travel fatigue.",
      img: "/images/fpkdl.com_960_1760598531_woman-is-being-massaged-by-woman_133748-19192.jpg",
    },
    {
      title: "Deep Tissue Reset",
      desc: "Focused pressure to release knots and tension.",
      img: "/images/spa-massage-concept-with-woman.jpg",
    },
    {
      title: "Couple Retreat",
      desc: "Side‑by‑side rituals in a serene setting.",
      img: "/images/Pedras de massagem de spa com velas e toalhas em tapete de bambu conceito de meditação _ imagem Premium gerada com IA.jpeg",
    },
  ];

  const features = [
    { icon: Leaf, title: "Natural Botanicals", sub: "Skin‑friendly oils & scrubs" },
    { icon: Clock, title: "Jet‑Lag Relief", sub: "45–90 min flexible sessions" },
    { icon: HeartHandshake, title: "In‑Room Service", sub: "JW Marriott · Pullman · Novotel" },
    { icon: Sparkles, title: "5‑Step Hygiene", sub: "Sanitized & safe protocols" },
  ];
  
  return (
    <main>
<div className=" text-gray-800">
    {/* banner */}
          <section className="relative w-full h-[70vh] flex items-center justify-center">
                {/* Background Image */}
                <Image
                  src="/images/cozy-candlelit-bedroom-brings-rustic-elegance-inside-generated-by-ai.jpg" // apni spa banner image ka path
                  alt="Luxury Body Spa"
                  fill
                  priority
                  className="object-cover brightness-75"
                />
          
                {/* Overlay Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative text-center px-6"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                    About <span className="text-emerald-300">Our Outles In Lajpatnagar</span>
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
                    Discover the art of relaxation with our luxury spa treatments designed
                    to rejuvenate your body, mind, and soul.
                  </p>
          
                  <a
                    href="#about-section"
                    className="inline-block mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
                  >
                    Learn More
                  </a>
                </motion.div>
              </section>
          {/* End Banner */}
  
      {/* Banner */}         
          <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-rose-50">
      {/* Decorative blobs (animated with Framer Motion) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 left-10 w-24 h-24 rounded-full bg-rose-100/30 blur-[1px]"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-20 w-16 h-16 rounded-full bg-emerald-100/50"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-teal-100/50"
        initial={{ y: 0 }}
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1.2 }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="mb-8 inline-flex items-center space-x-3" aria-hidden>
            <span className="block h-px w-12 bg-emerald-600" />
            <span className="text-sm font-light tracking-[0.25em] text-emerald-700">OUR OUTLETS</span>
            <span className="block h-px w-12 bg-emerald-600" />
          </div>

          <h1 className="space-y-2 text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            <span className="block font-serif text-5xl md:text-6xl text-emerald-900">Luxury Massage</span>
            <span className="block">at Top Hotels in</span>
            <span className="block font-medium">Lajpatnagar – Spa In Gurgaon <span className="text-rose-600">Tranquility</span></span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600 lg:mx-0">
            Step into comfort and relaxation with Spa In Gurgaon’s luxury spa services in Lajpatnagar, available at the finest hotels nearby. Whether you’re here for work, on holiday, or simply seeking soothing care, our expert therapists deliver a calm and refreshing experience—without leaving your hotel.
          </p>

          {/* Service area chips */}
          <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 lg:mx-0" role="list" aria-label="Service areas">
            {[
              { label: "Airport (DEL)", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12l20-6-5 6 5 6-20-6z"/>
                </svg>
              )},
              { label: "Mahipalpur", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
                </svg>
              )},
              { label: "Lajpatnagar", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                </svg>
              )},
              { label: "Gurugram", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              )},
            ].map(({ label, icon }) => (
              <div key={label} role="listitem" className="flex items-center space-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">{icon}</span>
                <span className="text-sm text-gray-800">{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 pt-2 lg:flex-row lg:justify-start">
            <a
              href="#services"
              className="inline-flex items-center space-x-2 rounded-sm bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 py-3 text-white shadow-sm transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="View all services"
            >
              <span>View All Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#book"
              className="inline-flex items-center space-x-2 rounded-sm border border-emerald-200 bg-white px-6 py-3 text-emerald-800 transition-colors duration-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Book appointment"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Book Appointment</span>
            </a>
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative h-80 md:h-96 lg:h-[450px]">
          <div className="absolute inset-0 overflow-hidden rounded-xl border-4 border-white shadow-2xl">
            <img
              src="/images/RoseateHouse.jpg"
              alt="Serene spa ambience at a luxury Lajpatnagar hotel in Delhi"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating leaf */}
          <motion.div
            aria-hidden
            className="absolute -bottom-6 -right-6"
            initial={{ rotate: -6, opacity: 0.6 }}
            animate={{ rotate: [-6, 6, -6], opacity: [0.6, 0.8, 0.6] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          >
            <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
              <path
                fill="currentColor"
                d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
              />
            </svg>
          </motion.div>

          {/* Stat badge */}
          <div className="absolute -left-4 bottom-8 rounded-md bg-white p-4 shadow-md">
            <div className="text-center">
              <div className="font-serif text-2xl text-emerald-900">12+</div>
              <div className="text-[10px] tracking-[0.3em] text-gray-500">YEARS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="relative block h-12 w-full" aria-hidden>
          <path
            fill="white"
            opacity=".5"
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          />
        </svg>
      </div>
    </section>
      {/* End Banner */}
      {/* our 5* hoterl outlets */}
             <section className="w-full py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-full mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-emerald-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
                    </motion.div>
                    
                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-5xl font-bold text-emerald-900 mb-6 font-serif"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Body Massage in Lajpatnagar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">at Top Hotels</span>
                    </motion.h2>
                    
                    <motion.p
                      className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Spa In Gurgaon offers exclusive massage services at some of the most prestigious hotels in Lajpatnagar. Each session is designed to alleviate stress and promote balance in your mind and body. Our expert therapists will offer personalized therapy in your hotel room, ensuring every moment is a health retreat. The following are the hotels where we have our services:
                    </motion.p>
                    
                    <motion.div
                      className="flex justify-center mt-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                    </motion.div>
                  </motion.div>
      
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelOutlets.map((hotel, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover"
                  />
                </div>
      
                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-emerald-800 font-serif mb-2">
                    {hotel.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    {hotel.description}
                  </p>
      
                  {/* Book Now Button */}
                  {/* <a
                    href="http://wa.link/njldxn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto px-5 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                  >
                    BOOK NOW
                  </a> */}
                  <a 
                                                          href="https://t.me/Tanuspa" 
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                                        >
                                                          <FaTelegram className="text-xl mr-3" />
                                                          Meet Our Team
                                                        </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* End outlets */}
            {/* About Us Section */}
                <section className="w-full bg-gradient-to-b from-white to-yellow-50 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        {/* Left: Copy block in a soft card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative isolate rounded-2xl border border-emerald-100/60 bg-white/70 p-8 shadow-[0_10px_30px_rgba(16,185,129,0.07)] backdrop-blur"
        >
          {/* Ribbon */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
          >
            <span className="mr-2">✦</span> About Our Lajpatnagar Spa Outlets
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-4xl"
          >
            Step Into Luxury{" "}
            <span className="relative ml-1 inline-block">
              <span className="relative z-10 text-emerald-600">Wellness at Lajpatnagar with Spa In Gurgaon</span>
              <span aria-hidden className="absolute bottom-1 left-0 right-0 h-3 rounded-sm bg-emerald-200/60" />
            </span>
          </motion.h2>

          <p className="mb-6 text-lg text-gray-700">
            Spa In Gurgaon elevates your Lajpatnagar stay with restorative, in-room therapies across leading hotels—JW Marriott, Lemon Tree, Pullman, and Novotel. Enjoy tailored care, discreet service, and deep relaxation without stepping outside your suite.
            Enjoy tailored care, discreet service, and deep relaxation without stepping outside your suite.
          </p>

          {/* Feature list */}
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {[
              "Certified therapists on call",
              "In-room massage & body rituals",
              "Flexible late-evening slots",
              "Hotel-partner exclusive menus",
            ].map((item) => (
              <li key={item} className="flex items-start space-x-3 text-gray-800">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Book an Appointment
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-6 py-3 text-sm font-medium text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Explore Services
            </a>
          </div>

          {/* Soft glow accent */}
          <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-yellow-200/40 blur-2xl" />
        </motion.div>

        {/* Right: Staggered image mosaic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-2 gap-4"
        >
          {/* Tall card */}
          <motion.figure
            initial={{ rotate: -2, y: 12, opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-2 overflow-hidden rounded-2xl border border-emerald-100 shadow-xl"
          >
            <img
              src="/images/fpkdl.com_960_1758982119_foot-massage-massage-parlor-female-hands-massage-female-feet-beauty-health_130265-8627.jpg"
              alt="Tranquil luxury spa room with warm lighting"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.figure>

          {/* Square card */}
          <motion.figure
            initial={{ rotate: 2, y: 12, opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-emerald-100 shadow-xl"
          >
            <img
              src="/images/spaexpert3.webp"
              alt="Expert therapist performing a relaxing massage"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.figure>

          {/* Accent card */}
          <motion.figure
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-emerald-100 shadow-xl"
          >
            <img
              src="/images/cozy-candlelit-bedroom-brings-rustic-elegance-inside-generated-by-ai.jpg"
              alt="Premium spa amenities and botanicals"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Stat pill */}
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow">
              12+ Years of Care
            </figcaption>
          </motion.figure>

          {/* Subtle leaf shape (SVG) */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -bottom-6 -right-6"
          >
            <svg className="h-20 w-20 text-emerald-600/25" viewBox="0 0 100 100">
              <path
                fill="currentColor"
                d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
      {/* Services Section */}
                    <section id="services" className="relative bg-gradient-to-b from-emerald-50 to-white px-6 py-16 md:px-16">
      {/* Subtle top halo */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-700"
          >
            <span className="h-1 w-6 rounded-full bg-emerald-500" /> Our Premium Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
          >
            Why Choose <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Spa In Gurgaon for Spa Services in Delhi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-emerald-900/80 md:text-xl"
          >
            Spa In Gurgaon blends reliability with luxury. Enjoy top‑quality comfort in premier hotels—whether you’re here for work, sightseeing, or pure relaxation.
          </motion.p>
        </div>

        {/* Modern responsive rail: horizontal scroll on mobile, masonry on desktop */}
        <div className="[-ms-overflow-style:none] [scrollbar-width:none] mb-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-12 lg:gap-8 lg:overflow-visible">
          {/* Hide scrollbar (Chrome) */}
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>

          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative snap-center snap-always lg:col-span-4`}
            >
              {/* Gradient border wrapper */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-200 via-emerald-100 to-transparent">
                {/* Glass card */}
                <div className="relative h-full rounded-2xl bg-white/80 p-7 shadow-[0_12px_36px_rgba(16,185,129,0.08)] backdrop-blur">
                  {/* Spotlight hover */}
                  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                    background: `radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.08), transparent 40%)`
                  }} />

                  {/* Floating icon */}
                  <div className="relative -mt-12 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 shadow-sm">
                    <span className="text-3xl">{s.icon}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.description}</p>

                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={s.href || '#'}
                      className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:underline"
                      aria-label={`Learn more about ${s.title}`}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100">Premium</span>
                  </div>

                  {/* index badge */}
                  <div aria-hidden className="pointer-events-none absolute bottom-3 right-4 text-7xl font-black tracking-tighter text-emerald-100/60">{String(i + 1).padStart(2, '0')}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Feature strip */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: 'therapists', label: 'Certified Therapists', sub: 'Experienced & verified' },
            { k: 'inroom', label: 'In‑Room Service', sub: 'At leading Lajpatnagar hotels' },
            { k: 'slots', label: 'Flexible Slots', sub: 'Late evenings available' },
            { k: 'hygiene', label: '5‑Step Hygiene', sub: 'Sanitized & safe' },
          ].map((f, idx) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white/70 px-4 py-3 text-emerald-900/90 shadow-sm backdrop-blur"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <div>
                <div className="text-sm font-semibold">{f.label}</div>
                <div className="text-xs text-emerald-900/70">{f.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur md:flex-row">
          <p className="text-center text-sm text-emerald-900/80 md:text-left">Not sure which therapy suits you? Tell us your goal—relaxation, recovery, or wellness—and we’ll curate a session for you.</p>
          <a href="#book" className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Book a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2 h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </div>

      {/* Cursor position CSS var for spotlight */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('mousemove', (e) => {
          document.querySelectorAll('#services .group').forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
            const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
            card.style.setProperty('--x', x);
            card.style.setProperty('--y', y);
          });
        });
      `}} />

      {/* Decorative leaf */}
      <div aria-hidden className="pointer-events-none absolute -right-6 bottom-6 opacity-30">
        <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
        </svg>
      </div>
    </section>
             {/* End Services Section */}
                 
      {/* content */}
          <section className="relative bg-gradient-to-b from-emerald-50 to-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-emerald-700">AEROCITY · GURGAON OUTLET</span>
          <h2 className="font-serif text-4xl font-bold text-[#3a2e2a] md:text-5xl mt-3">
            Unwind in Style, Right Next to the Airport
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-emerald-600" />
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Ease into serenity at our Gurgaon Lajpatnagar outlet. Thoughtfully curated rituals, discreet in-room options, and
            hotel-partner exclusives—so you enjoy deep relaxation without leaving your itinerary.
          </p>
        </motion.header>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: copy + features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-[#e8d5c9] bg-white/80 p-8 shadow-lg backdrop-blur-sm"
          >
            {/* soft halo */}
            <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-emerald-200/40 blur-2xl" />

            <h3 className="font-serif text-2xl font-semibold text-emerald-800">Signature Gurgaon Rituals</h3>
            <p className="mt-2 text-gray-600">
              From grounding aromatherapy to invigorating deep-tissue, our menu blends global techniques with modern wellness.
              Choose a focused 45‑minute recharge or immerse in our 90‑minute signature escape.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
              {["In‑Room Therapies", "Certified Therapists", "Late‑Evening Slots", "Hotel‑Partner Menus"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-emerald-900/90">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>

            {/* Quick chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Aromatherapy", "Deep Tissue", "Balinese", "Couple Spa", "Foot Reflexology", "Head & Shoulder"].map((c) => (
                <span key={c} className="rounded-full bg-[#f7efe7] px-3 py-1 text-xs font-semibold text-emerald-800">
                  {c}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Book Your Session
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                View Menu
              </a>
            </div>

            {/* Small stats strip */}
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { n: "12+", l: "Years" },
                { n: "25K+", l: "Guests" },
                { n: "4.8", l: "Rating" },
              ].map((it) => (
                <div key={it.l} className="rounded-xl border border-emerald-100 bg-white/70 p-3 shadow-sm">
                  <div className="font-serif text-2xl text-emerald-800">{it.n}</div>
                  <div className="text-[11px] tracking-widest text-emerald-900/70">{it.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: media panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#e8d5c9] bg-white/70 shadow-2xl">
              <div className="relative h-[440px] w-full">
                <Image src="/images/best-western-merrion.jpg" alt="Serene spa ambience at Gurgaon Lajpatnagar outlet" fill className="object-cover" />
              </div>
              {/* Overlay content */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f2937]/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute left-4 top-4 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Near IGI Airport
              </div>

              {/* Card footer */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4">
                <div>
                  <div className="font-serif text-lg font-semibold text-white">Gurgaon · Lajpatnagar</div>
                  <div className="text-xs text-white/80">JW Marriott · Pullman · Novotel · Lemon Tree</div>
                </div>
                <a
                  href="http://wa.link/njldxn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-emerald-700 shadow hover:bg-white"
                >
                  WhatsApp
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M2 10a8 8 0 1115.546 2.917l1.087 3.26a1 1 0 01-1.265 1.265l-3.26-1.087A8 8 0 112 10zm6.803-1.58a.75.75 0 00-1.246.832c.46.691 1.13 1.44 2.006 2.053.898.631 1.817.986 2.585 1.1a.75.75 0 00.837-.653l.137-1.097a.75.75 0 00-.52-.81 5.5 5.5 0 01-1.265-.457c-.41-.2-.868-.508-1.27-.863-.328-.289-.604-.6-.797-.874a.75.75 0 00-.467-.331z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>

            {/* Mini carousel thumbnails */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { src: "/images/fpkdl.com_750_1758979994_natural-elements-spa-with-candles_23-2148199479.jpg", alt: "Aromatherapy ritual" },
                { src: "/images/fpkdl.com_750_1760611274_caucasian-woman-enjoying-relaxing-antistress-head-massage-quiescent_31965-325098.jpg", alt: "Deep tissue focus" },
                { src: "/images/fpkdl.com_960_1758980912_relaxing-spa-area-with-lounge-chairs-pool-waterfall_1189569-10802.jpg", alt: "Couple spa ambience" },
              ].map((im) => (
                <div key={im.src} className="relative h-24 overflow-hidden rounded-xl border border-[#e8d5c9]">
                  <Image src={im.src} alt={im.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-10 text-center"
        >
          <a
            href="/booking"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            Book a Personalized Journey
          </a>
        </motion.div>
      </div>

      {/* Decorative leaf */}
      <div aria-hidden className="pointer-events-none absolute -right-6 bottom-6 opacity-30">
        <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
        </svg>
      </div>
    </section>
{/* /// */}
<section className="relative bg-gradient-to-b from-emerald-50 to-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-emerald-700">AEROCITY HIGHLIGHTS</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#3a2e2a] md:text-5xl">
            Image‑Perfect Comfort, Thoughtful Care
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-emerald-600" />
          <p className="mx-auto mt-4 max-w-3xl text-[#4b3f3b]/80">
            Browse a few guest‑favorite experiences at our Lajpatnagar outlet. Designed to help you reset fast—before or after your flight.
          </p>
        </motion.header>

        {/* Top grid: Collage + Feature list */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-64 overflow-hidden rounded-2xl border border-[#e8d5c9]">
                <Image src="/images/fpkdl.com_960_1760686305_beautiful-young-woman-reciving-relxing-massage-massage-concept-body-massage-massage-health_299057-864.jpg" alt="Serene spa ambience at Lajpatnagar" fill className="object-cover" />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl border border-[#e8d5c9]">
                <Image src="/images/fpkdl.com_960_1758980177_natural-elements-spa-with-candles_23-2148199485.jpg" alt="Natural essential oils" fill className="object-cover" />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl border border-[#e8d5c9]">
                <Image src="/images/young-woman-relaxing-looking-candles-while-taking-bath.jpg" alt="Relax lounge seating" fill className="object-cover" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute left-3 top-3 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
              2 min to IGI T3
            </div>
          </motion.div>

          {/* Feature list card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative rounded-2xl border border-[#e8d5c9] bg-white/80 p-8 shadow-lg backdrop-blur-sm"
          >
            <h3 className="font-serif text-2xl font-semibold text-emerald-800">Why Guests Love Our Lajpatnagar Outlet</h3>
            <p className="mt-2 text-[#4b3f3b]">Quick to book, easy to reach, and reliably relaxing—ideal between meetings or layovers.</p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2" role="list">
              {features.map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7efe7] text-emerald-700 ring-1 ring-[#e8d5c9]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[#3a2e2a]">{title}</div>
                    <div className="text-xs text-[#4b3f3b]/80">{sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-[#e8d5c9] bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                View Menu
              </a>
            </div>
          </motion.div>
        </div>

        {/* Quick cards (image with overlay icon) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quickCards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-[#e8d5c9] bg-white/80 shadow-md"
            >
              <div className="relative h-48 w-full">
                <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-lg font-semibold text-[#3a2e2a]">{c.title}</h4>
                <p className="mt-1 text-sm text-[#4b3f3b]/80">{c.desc}</p>
              </div>
              {/* overlay icon */}
              <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center justify-center rounded-xl bg-[#f7efe7] p-2 text-emerald-700 ring-1 ring-[#e8d5c9]">
                <Sparkles size={16} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-10 text-center"
        >
          <a
            href="/booking"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            Book a Personalized Journey
          </a>
        </motion.div>
      </div>

      {/* Decorative leaf */}
      <div aria-hidden className="pointer-events-none absolute -right-6 bottom-6 opacity-30">
        <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
        </svg>
      </div>
    </section>


      {/* end content */}
            {/* new */}
               
    {/* content section */}
                         
                          {/* /// */}
                              <section className="bg-gradient-to-b from-emerald-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-emerald-700 tracking-widest">OUR SIGNATURE OFFERINGS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3a2e2a] mt-4 mb-4 font-serif">Our Massage Services at Hotels in Lajpatnagar</h1>
          <div className="mx-auto w-28 h-1 bg-emerald-600 rounded-full" />
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
           Spa In Gurgaon offers a great variety of treatments to meet the needs of all guests. Every service is designed so that relaxation and recovery are fully achieved to ensure that your stay is easier and more comfortable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN: stacked service cards */}
          <div className="space-y-8">
            {SERVICES_LEFT.map((s, idx) => (
              <motion.div
                key={s.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#e8d5c9] overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="md:flex gap-6">
                  {/* Image */}
                  <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>

                  {/* Text */}
                  <div className="mt-4 md:mt-0 flex-1">
                    <h3 className="text-2xl font-semibold text-emerald-800">{s.title}</h3>
                    <p className="text-sm text-emerald-700 mt-1 font-medium">{s.subtitle}</p>
                    <p className="text-gray-600 mt-3 leading-relaxed">{s.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {s.chips.slice(0, 6).map((c, i) => (
                        <span
                          key={i}
                          className="bg-[#f7efe7] text-emerald-800 px-3 py-1 rounded-full text-sm"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-emerald-100 text-emerald-800 py-1 px-3 rounded-full text-sm font-medium">
                        {s.time} • {s.price}
                      </span>
                      <a
                        href="http://wa.link/njldxn"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: stacked service cards + promo */}
          <div className="space-y-8">
            {SERVICES_RIGHT.map((s, idx) => (
              <motion.div
                key={s.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#e8d5c9] overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="md:flex gap-6">
                  <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>

                  <div className="mt-4 md:mt-0 flex-1">
                    <h3 className="text-2xl font-semibold text-emerald-800">{s.title}</h3>
                    <p className="text-sm text-emerald-700 mt-1 font-medium">{s.subtitle}</p>
                    <p className="text-gray-600 mt-3 leading-relaxed">{s.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {s.chips.slice(0, 6).map((c, i) => (
                        <span
                          key={i}
                          className="bg-[#f7efe7] text-emerald-800 px-3 py-1 rounded-full text-sm"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-emerald-100 text-emerald-800 py-1 px-3 rounded-full text-sm font-medium">
                        {s.time} • {s.price}
                      </span>
                      <a
                        href="http://wa.link/njldxn"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-emerald-200"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Promo / Additional info block */}
            <motion.div
              className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold">A Promise of Total Rejuvenation</h4>
                  <p className="mt-2 opacity-95">
                    Every massage is designed to relax, refresh, and heal. We ensure you return energized, calm, and fully satisfied with your therapy.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://t.me/Tanuspa"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-medium shadow-sm transition"
                  >
                    <FaTelegram className="text-white" /> Join Telegram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <a
            href="/booking"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            Book a Personalized Journey
          </a>
        </motion.div>
      </div>
    </section>
                        {/* end */}
                        {/* how to book Lajpatnagar spa outlets */}
                        <section className="w-full py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900"
          >
            <span className="block font-[Great_Vibes] text-4xl md:text-5xl text-emerald-800">
              How to Book Massage Therapy in Lajpatnagar&apos;s
            </span>
            <span className="block font-[Great_Vibes] text-3xl md:text-4xl bg-gradient-to-r from-emerald-600 to-emerald-400 text-transparent bg-clip-text">
              Prestigious Hotels?
            </span>
          </motion.h1>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
            Booking a Spa In Gurgaon session is quick and simple. We have simplified our process so that you can have an excellent time enjoying therapy.
          </p>
        </header>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {topSteps.map((s, idx) => (
    <motion.article
      key={idx} // 👈 ye line add karo
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100 text-center hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-4">
        {s.icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-2">
        {s.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
    </motion.article>
  ))}
</div>


        {/* Bottom row: 2 wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bottomSteps.map((s, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100 flex items-start gap-4 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100">
                {s.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-1">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="http://wa.link/njldxn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
                        {/* how to book Lajpatnagar spa outlets */}
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
                  Our <span className="text-emerald-600">Pricing Packages</span>
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
                        
                        {/* <a
                          href={plan.ctaLink}
                          className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                            plan.highlight 
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-xl hover:from-emerald-600 hover:to-emerald-700"
                              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          }`}
                        >
                          Book Now
                        </a> */}
                        <a 
                                                                href="https://t.me/Tanuspa" 
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                                              >
                                                                <FaTelegram className="text-xl mr-3" />
                                                                Meet Our Team
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
          {/* Our Process */}
                                <section className="w-full py-10 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
                                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                   {/* Section Header */}
                         <motion.div 
                           className="text-center mb-20"
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-100px" }}
                           transition={{ duration: 0.8 }}
                         >
                           <motion.div
                             className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-full mb-6"
                             initial={{ opacity: 0, scale: 0.9 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ delay: 0.2, duration: 0.5 }}
                           >
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-emerald-700 font-medium tracking-wider">Process</span>
                           </motion.div>
                           
                           <motion.h2
                             className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 font-serif"
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.3, duration: 0.6 }}
                           >
                             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Process</span>
                           </motion.h2>
                           
                           {/* <motion.p
                             className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.4, duration: 0.5 }}
                           >
                             Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
                           </motion.p> */}
                           
                           <motion.div
                             className="flex justify-center mt-10"
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.5, duration: 0.5 }}
                           >
                             <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                           </motion.div>
                         </motion.div>
                               
                                   {/* Process Steps */}
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                     {processSteps.map((step, index) => (
                                       <motion.div
                                         key={index}
                                         className="relative bg-white shadow-lg rounded-2xl px-6 pt-24 pb-10 text-center hover:shadow-xl transition-shadow duration-300"
                                         initial={{ opacity: 0, y: 40 }}
                                         whileInView={{ opacity: 1, y: 0 }}
                                         viewport={{ once: true }}
                                         transition={{ duration: 0.5, delay: index * 0.2 }}
                                       >
                                         {/* Step Number */}
                                         <div className="absolute top-4 left-4 text-3xl font-bold text-emerald-300 opacity-30 z-0">
                                           {step.number}
                                         </div>
                               
                                         {/* Image */}
                                         <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-rose-200 via-emerald-100 to-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                           <Image
                                             src={step.image}
                                             alt={step.title}
                                             layout="fill"
                                             objectFit="cover"
                                             className="rounded-full"
                                           />
                                         </div>
                 
                               
                                         {/* Title */}
                                         <h4 className="text-2xl font-semibold text-emerald-800 mb-4 font-serif">
                                           {step.title}
                                         </h4>
                               
                                         {/* Description */}
                                         <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                                       </motion.div>
                                     ))}
                                   </div>
                                 </div>
                                </section>
                              {/* End Our Process */}
      {/* 700+ Words Content Block */}
      {/* <div className="bg-white py-14 px-6 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">Why Choose Our Spa in Lajpatnagar?</h2>
          <p>
            Lajpatnagar is a destination that blends luxury, convenience, and connectivity — and what better way to enhance your stay than with a relaxing spa session designed to soothe your mind and body? Our spa outlets are located in the most prestigious hotels across Lajpatnagar, giving you access to world-class wellness experiences within arm’s reach.
          </p>
          <p>
            Whether you're a couple looking for a romantic escape, a business traveler seeking stress relief, or a local resident desiring some weekend rejuvenation, our spa services are tailored to meet every need. From couple massages, oil therapy, deep tissue massage to aroma and Swedish therapy — our professionally trained therapists ensure every session is personal, effective, and deeply relaxing.
          </p>
          <p>
            Our outlets follow the highest hygiene and quality standards. Every treatment room is designed to provide peace and privacy, with soothing music, ambient lighting, and a tranquil environment that elevates your entire experience.
          </p>
          <p>
            What sets our Lajpatnagar spa services apart is our commitment to customization. We understand that every body is different — so we ask the right questions before beginning any session, and we curate treatments based on your lifestyle, tension areas, and wellness goals. You leave feeling refreshed, realigned, and ready to take on the world.
          </p>
          <p>
            With easy access to the IGI Airport, metro, and luxury shopping arcades, our Lajpatnagar locations are ideal for those short on time but high on expectation. We ensure that even a 60-minute session makes a lasting impact on your mood, energy, and health.
          </p>
          <p>
            Whether you are staying at JW Marriott, Andaz, Roseate House, Pullman, or Novotel — we are just an elevator ride away. Book your couple spa or signature massage session today and unlock the door to pure bliss.
          </p>
          <p className="font-medium text-center text-emerald-700">
            Come, experience Lajpatnagar’s best luxury spa — where wellness meets elegance.
          </p>
        </div>
      </div> */}
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
        src="/images/woman-spending-time-spa-getting-exfoliation-massage.jpg"
        alt="Spa FAQ Illustration"
        className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
      />
    </motion.div>
  </div>
</section>       
        {/* /// */}
    </div>
    </main>
    
  );
}

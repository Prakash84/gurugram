
'use client';
import React from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Raleway } from 'next/font/google'

import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { FaHotTub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { Building2 } from "lucide-react";
import {  Star, MapPin, Sparkles, Hotel } from 'lucide-react';
import {  FaHands, FaHeartbeat, FaClock, FaEye, FaBullseye, FaHandsHelping  } from 'react-icons/fa'



const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400']
})

// All FontAwesome icons from react-icons/fa
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpa,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaHotel,
  FaCrown
} from 'react-icons/fa';
  const faqs = [
    
    {
      question: "What makes your Spa in Gurgaon different from others?",
      answer: "Our Spa in Gurgaon stands out for its luxury ambience, certified therapists, and transparent pricing. With more than 24 outlets across NCR, we combine modern wellness techniques with traditional therapies to deliver a truly relaxing experience.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Do you operate a Spa in Aerocity inside hotels?",
      answer: "Yes — our Spa in Aerocity outlets are located inside 5-star hotels like Roseate House, Lemon Tree, Pullman, and JW Marriott. Guests can enjoy premium therapies, foreign therapists, and a peaceful setting that blends comfort with class.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    
    {
      question: "What services are offered at your Spa in Dwarka?",
      answer: "The Spa in Dwarka offers a range of therapies including full-body, Thai, and couple massages. Located near Welcome by ITC, it provides world-class hospitality and an inviting environment perfect for both local and visiting clients.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Do you have outlets in Gurgaon as well?",
      answer: "Yes — our Spa in Gurgaon features luxurious setups offering Thai, B2B, and aroma massages. Each branch ensures premium hygiene, trained therapists, and personalized care to help you unwind from city stress",
      icon: <FaSpa className="text-teal-600" />
    },
    {
          question: "Is there a branch of your spa in Rohini?",
          answer: "Absolutely — the Spa in Rohini outlet is one of our most popular locations. Known for its calm atmosphere and expert therapists, it offers couple, sandwich, and full-body massage options at affordable prices.",
          icon: <FaHotTub className="text-teal-600" />
        },
        {
              question: "Where exactly is your Spa in C.P located?",
              answer: "Our Spa in C.P (Connaught Place) is conveniently located near The Park and The Lalit hotels. It’s ideal for corporate professionals and travelers looking for quick yet high-end wellness therapies in central Delhi.",
              icon: <FaSpa className="text-teal-600" />
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

const featuresData = [
  {
    title: "Stress Relief",
    description:
      "Whether it’s a Thai massage, Nuru massage, or couple massage, a visit to the spa can significantly reduce stress levels and promote relaxation.",
    image: "/images/HelpstoDe-Stress.webp",
  },
  {
    title: "Improved Blood Circulation",
    description:
      "Techniques like acupressure, deep tissue, and Swedish massage improve blood circulation, helping you feel more energized and revitalized.",
    image: "/images/improvebloodflow.webp",
  },
  {
    title: "Pain Relief",
    description:
      "If you’re dealing with muscle aches, joint pain, or stiffness, our therapeutic massages can help alleviate discomfort and promote better movement.",
    image: "/images/SkinMoreRadiant.jpeg",
  },
];
  const services = [
    {
      title: "Aromatherapy",
      description: "Essential oils for emotional and physical well-being",
      icon: "🌸",
    },
    {
      title: "Deep Tissue",
      description: "Targets chronic muscle tension with slow, deep pressure",
      icon: "💆‍♂️",
    },
    {
      title: "Hot Stone Therapy",
      description: "Warm stones to melt away tension and improve circulation",
      icon: "🪨",
    },
    {
      title: "Couples Massage",
      description: "Shared relaxation experience for two in a private suite",
      icon: "👫",
    },
  ];
const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

 {/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Meeting',
    description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
    image: '/images/mmeeting.webp',
  },
  {
    number: '02',
    title: 'Treatment',
    description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Finalizing',
    description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
    image: '/images/finalizing.avif',
  },
];
{/* End Our Process */}
 const outlets = [
  {
    name: "JW Marriott Hotel Aerocity",
    desc: "Luxury spa at the heart of downtown with panoramic city views",
    rating: 5,
    tag: "Exclusive",
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />
  },
  {
    name: "Lemon Tree Premier Aerocity",
    desc: "Beachfront sanctuary with ocean-inspired treatments",
    rating: 4.9,
    tag: "Waterfront",
    icon: <Hotel className="w-6 h-6 text-emerald-600" />
  },
  {
    name: "Novotel New Delhi Aerocity",
    desc: "Rooftop wellness center with city skyline views",
    rating: 4.8,
    tag: "Panoramic",
    icon: <Building2 className="w-6 h-6 text-emerald-600" />
  },
  {
    name: "The Grand New Delhi",
    desc: "Historic mansion transformed into a luxury spa retreat",
    rating: 5,
    tag: "Heritage",
    icon: <MapPin className="w-6 h-6 text-emerald-600" />
  },
];

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function About({
  imageSrc = '/images/spa-hero.jpg',
  alt = 'Relaxing spa treatment',
  title = 'Meet Our Experience Indian And International Therapists',
  subtitle = 'Rejuvenate your body and mind with our signature therapies designed for ultimate comfort and wellness.',
  ctaText = 'Book Your Session',
  ctaHref = '#book',
}) {
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
  const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  ///
  const paragraphs = [
    'Welcome to our Luxury Spa in Delhi NCR, where tranquility meets rejuvenation. Our mission is to offer a world-class spa experience that relaxes your body, calms your mind, and restores your energy.',
    'With trained professional therapists, soothing ambience, and personalized treatments, we ensure every moment spent here is pure bliss. Whether you seek stress relief, skincare, or a full-body relaxation experience, we have something special for you.'
  ];
  const bullets = [
    'Trained Female Therapists',
    '24+ Outlets in Delhi NCR',
    'Personalized Massage Packages',
    'Soothing & Hygienic Ambience'
  ];
  const cta = { label: 'Book Now', href: '/booking' };

  return (
    <div className="font-sans overflow-hidden bg-gradient-to-br from-emerald-50 to-rose-50">
            <section className="relative w-full h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/room-with-massage-tables-wall-with-lights-it.jpg" // apni spa banner image ka path
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
          About <span className="text-emerald-300">Our Spa</span>
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
    {/* //// */}
    <div className="relative overflow-hidden ">
      {/* Floating decorative elements */}
      {/* <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div> */}
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text content - more minimal */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-px bg-emerald-600"></div>
            <span className="text-emerald-600 font-light tracking-widest">ABOUT US</span>
            <div className="w-12 h-px bg-emerald-600"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-800">
             
            <span className="block font-serif text-5xl md:text-6xl mb-3 text-emerald-800">Welcome</span>
            To The Best
            <span className="block mt-2 font-medium"> Relaxation Centre <span className="text-rose-600">in Luxury Gurgaon Spa</span></span>
          </h1>
          
          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            At LuxeSpa, we believe true wellness is an art. Our master therapists blend ancient wisdom with modern techniques to create transformative experiences that nurture mind, body, and spirit.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href='/about'>
               <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
              <span>Our Journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            </a>
           
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

        {/* Image section - more elegant */}
        <div className="relative h-80 md:h-96 lg:h-[450px]">
            <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
                <div className="relative w-full h-full">
                <img
                    src="/images/12 Romantic.jpeg" // ✅ Yahan apna image path daal
                    alt="Spa Environment"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>

                {/* Floating leaf decoration */}
                <div className="absolute -bottom-6 -right-6">
                    <svg className="w-24 h-24 text-emerald-600/30" viewBox="0 0 100 100">
                    <path
                        fill="currentColor"
                        d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
                    />
                    </svg>
                </div>

                {/* Minimalist stats */}
                <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
                    <div className="text-center">
                    <div className="text-2xl font-serif text-emerald-800">12+</div>
                    <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
                    </div>
                </div>
        </div>

      </div>
      
      {/* Minimal wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
          <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
        </svg>
      </div>
    </div>
     {/* /// */}
      <section className="relative overflow-hidden py-12">
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Curved Image */}
        <div className="w-full md:w-6/12 flex-shrink-0">
          {/* Wrapper with clip-path (curved right edge) */}
          <div
            className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-xl"
            /* clip-path uses SVG path coordinates for a curved right edge */
            style={{
              WebkitClipPath:
                'path("M0,0 L520,0 C650,0 800,200 520,600 L0,600 Z")',
              clipPath:
                'path("M0,0 L520,0 C650,0 800,200 520,600 L0,600 Z")'
            }}
          >
            {/* Next/Image fills the container */}
            <Image
              src="/images/fpkdl.com_960_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg"
              alt="Spa About"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-10 -bottom-6 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-6/12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-500 ">About Our Spa — Luxury Spa in Gurgaon</h2>
          <p className="mt-2 text-lg text-gray-600">Relax. Restore. Rejuvenate.</p>

          <div className="mt-6 space-y-4 text-gray-700">
            {paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}

            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-3 w-3 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-sm text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            {/* <Link
              href={cta.href}
              className="inline-block rounded-full px-6 py-3 bg-emerald-500 text-white font-medium shadow hover:bg-emerald-600 transition"
            >
              {cta.label}
            </Link> */}
          </div>
        </div>
      </div>
    </section>

      {/* Banner */}
        {/* <section
      className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/aboutusbanner.jpg')", // ✅ Change image as needed
      }}
    >
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide font-[PlayfairDisplay]">
          Discover Tranquility
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Welcome to our world of calm and luxury. Rejuvenate your body and soul.
        </p>
      </motion.div>
    </section> */}
    {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Intro */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-emerald-500 font-semibold">About Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-emerald-800">
            Welcome to the Best Spa in Gurgaon — Relax, Restore, Rejuvenate
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            At <span className="font-medium">[Your Spa Name]</span> we mix ancient
            healing traditions with modern wellness science to create bespoke
            treatments. Our therapists are certified, our products are natural,
            and every session is tailored to you.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#services"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-5 rounded-full font-medium shadow"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-block border border-emerald-200 text-emerald-700 py-3 px-5 rounded-full font-medium shadow-sm hover:shadow"
            >
              Book a Session
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/young-woman-relaxing-looking-candles-while-taking-bath.jpg"
            alt="Spa Treatment"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/images/blur-placeholder.png"
          />
        </motion.div>
      </section>

      {/* Services Highlights */}
      <section id="services" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-6 rounded-2xl bg-white border shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="text-emerald-600 rounded-lg bg-emerald-50 p-3 shadow-sm"><FaSpa size={28} /></div>
            <div>
              <h4 className="font-semibold text-gray-900">Signature Massages</h4>
              <p className="text-sm text-gray-600 mt-1">Female To Male Massage, B2B Massage, Swedish, and our signature aromatherapy blends to relax and relieve tension.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-6 rounded-2xl bg-white border shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="text-emerald-600 rounded-lg bg-emerald-50 p-3 shadow-sm"><FaLeaf size={28} /></div>
            <div>
              <h4 className="font-semibold text-gray-900">Expert Therapies</h4>
              <p className="text-sm text-gray-600 mt-1">Russian Therapist, Uzbeki Therapist, Thai Therapist, Indian Therapist using ethically-sourced ingredients.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-6 rounded-2xl bg-white border shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="text-emerald-600 rounded-lg bg-emerald-50 p-3 shadow-sm"><FaHandsHelping size={28} /></div>
            <div>
              <h4 className="font-semibold text-gray-900">5 Start Hotel Outlet</h4>
              <p className="text-sm text-gray-600 mt-1">Consultation-led sessions designed to meet your body type and wellness goals.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core values + Timeline */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Wellness is not a single treatment — it&apos;s a balanced routine. We focus
            on restorative experiences that are measurable, sustainable and
            deeply relaxing.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-emerald-600">
                <FaLeaf />
              </div>
              <div>
                <div className="font-medium text-gray-900">Clean Ingredients</div>
                <div className="text-sm text-gray-600">We use cruelty-free, natural oils and blends.</div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-emerald-600">
                <FaLeaf />
              </div>
              <div>
                <div className="font-medium text-gray-900">Certified Therapists</div>
                <div className="text-sm text-gray-600">Professional training and ongoing mastery programs.</div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-emerald-600">
                <FaLeaf />
              </div>
              <div>
                <div className="font-medium text-gray-900">Hygiene Focus</div>
                <div className="text-sm text-gray-600">Sanitized rooms and single-use linens for peace of mind.</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 shadow"
        >
          <h4 className="text-lg font-semibold text-emerald-700">Quick Facts</h4>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 p-2 rounded-full bg-white shadow-sm">
                <FaClock />
              </span>
              <div>
                <div className="font-medium">Established</div>
                <div className="text-sm text-gray-600">2018 in Delhi</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-600 p-2 rounded-full bg-white shadow-sm">
                <FaHandsHelping />
              </span>
              <div>
                <div className="font-medium">Therapists</div>
                <div className="text-sm text-gray-600">Certified & experienced</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-600 p-2 rounded-full bg-white shadow-sm">
                <FaLeaf />
              </span>
              <div>
                <div className="font-medium">Products</div>
                <div className="text-sm text-gray-600">Natural botanical blends</div>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Team */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900">Meet the Team</h3>
        <p className="mt-2 text-gray-600 max-w-2xl">Certified therapists and wellness experts.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-white border shadow-sm flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md">
              <Image src="/images/spaExpert4.jpg" alt="Anjali Sharma" fill className="object-cover" />
            </div>
            <div className="mt-4">
              <div className="font-semibold text-gray-900">Anjali Sharma</div>
              <div className="text-sm text-gray-600">Senior Therapist</div>
            </div>
            <a className="mt-4 inline-block text-sm text-emerald-600 font-medium" href="#">
              View Profile
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-white border shadow-sm flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md">
              <Image src="/images/spamodel.jpg" alt="Rohit Verma" fill className="object-cover" />
            </div>
            <div className="mt-4">
              <div className="font-semibold text-gray-900">Rohit Verma</div>
              <div className="text-sm text-gray-600">Spa Manager</div>
            </div>
            <a className="mt-4 inline-block text-sm text-emerald-600 font-medium" href="#">
              View Profile
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-white border shadow-sm flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md">
              <Image src="/images/staff1.jpg" alt="Priya Kapoor" fill className="object-cover" />
            </div>
            <div className="mt-4">
              <div className="font-semibold text-gray-900">Priya Kapoor</div>
              <div className="text-sm text-gray-600">Aromatherapist</div>
            </div>
            <a className="mt-4 inline-block text-sm text-emerald-600 font-medium" href="#">
              View Profile
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 bg-gradient-to-r from-emerald-50 to-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold">Ready to relax?</h4>
          <p className="text-gray-600">Book a curated session with our expert therapists today.</p>
        </div>
        <div className="flex gap-3">
          <a href="#book" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium shadow">
            Book Now
          </a>
          <a href="#contact" className="inline-block border border-emerald-200 px-5 py-3 rounded-full font-medium">
            Contact Us
          </a>
        </div>
      </section>
    </div>

       {/* End Services Section */}
     
    {/* ////// */}
    
       {/* about us */}
    <section className="w-full py-16 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
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
                          className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          We offer High-Quality, <span className="relative">
                            <span className="text-emerald-600 z-10 relative">Affordable Spa Services in Gurgaon</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/60 z-0"></span>
                          </span>
                        </motion.h2>
            <p className="text-gray-700 text-lg">
              At Luxury Body Spa, we are dedicated to creating a haven of peace, wellness, and rejuvenation in the heart of Delhi. With a blend of ancient healing traditions and modern techniques, our expert therapists restore balance and vitality.
              From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
            </p>
            
            {/* <p className="text-gray-700 text-lg">
              Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
              From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit. Our body spa treatments combine traditional techniques with modern wellness practices, ensuring every guest experiences deep relaxation and rejuvenation. Whether you seek relief from stress, muscle tension, or simply wish to indulge in self-care, our expert therapists tailor each session to your unique needs, helping you restore balance and vitality. </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/spaexpert3.webp" alt="Luxury Spa Room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/new5.jpeg" alt="Massage Session" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    {/* luxury spa content section */}
        <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
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
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-6 font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Spa Services in Guegaon</span>
                  </motion.h2>
                  
                  <motion.p
                    className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Discover our unique, high-end spa locations in Delhi, each offering world-class treatment.
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
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/spa-massage-concept-with-woman.jpg"
              alt="Luxury Spa in Delhi"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg p-8 rounded-xl"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Luxury Spa is a one-stop destination where expert therapists, premium oils, and tailored therapies come together to deliver a lasting sense of rejuvenation. We combine modern techniques with traditional practices to create therapy plans that suit your body and lifestyle — making us one of the most trusted luxury spas in Delhi.
              Our <span className="font-semibold text-emerald-700">massage spa in Delhi </span> 
              was established several years ago with the prime goal of giving 
              pleasure with the perfect package of massage services to individuals 
              struggling with finding peace. Luxury Spa is a one-stop destination where expert therapists, premium oils, and tailored therapies come together to deliver a lasting sense of rejuvenation.
            </p>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg p-8 rounded-xl order-2 md:order-1"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Our <span className="font-semibold text-emerald-700">full-body massage in Connaught Place </span> 
              is an ideal destination where you can set yourself free and get all set 
              to find the wonders with a deep relaxation massage led by the best 
              massage therapist. We combine modern techniques with traditional practices to create therapy plans that suit your body and lifestyle — making us one of the most trusted luxury spas in Delhi. Our massage spa in Delhi was established several years ago with the prime goal of giving pleasure with the perfect package of massage services to individuals struggling with finding peace. Luxury Spa is a one-stop destination where expert therapists, premium oils, and tailored therapies come together to deliver a lasting sense of rejuvenation.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <Image
              src="/images/spaimage.jpeg"
              alt="Full Body Massage in Connaught Place"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>       
      </div>
    </section>
    {/* end luxury spa content section */}
    {/* //// */}
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image with stylish overlay */}
          <div className="relative order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-80 sm:h-[420px] lg:h-[520px]">
              <Image
                src='/images/spa-concept-with-woman.jpg'
                alt={alt}
                fill
                className="object-cover transform-gpu transition-transform duration-700 ease-out hover:scale-105"
                priority
              />
            </div>

            {/* soft radial accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 rounded-full bg-emerald-200 opacity-60 blur-3xl"
            />

            {/* glass info card */}
            <div className="absolute left-6 bottom-6 w-[85%] sm:w-2/3 md:w-1/2 bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex-none w-12 h-12 rounded-lg bg-emerald-600/95 text-white grid place-items-center font-semibold">SG</div>
                <div className="flex-1">
                  <p className="text-xs text-emerald-900/80 uppercase font-medium">Signature</p>
                  <p className="text-sm font-semibold text-emerald-900">Therapy — Relax & Renew</p>
                  <p className="mt-1 text-xs text-gray-700">60 min • Aromatherapy • Expert therapist</p>
                </div>
                <div className="flex-none text-right">
                  <p className="text-sm text-emerald-900 font-bold">₹1,499</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-sm font-semibold">Premium Care</span>

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-emerald-900 leading-tight">
              Get First— <span className="text-emerald-600">Visit Special at ₹1999 at our spa in Gurgaon
</span>
            </h2>

            <p className="mt-4 text-gray-700 max-w-xl">
              Our signature treatments blend ancient healing and modern techniques to deliver deep muscle relief, improved circulation and lasting calm.
              Each session is personalised to your needs — from aromatherapy to hot stones.
            </p>

            {/* three highlight chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 rounded-md bg-emerald-600/10 grid place-items-center text-emerald-700 font-semibold">✓</div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">Foreigner Therapists</p>
                  <p className="text-xs text-gray-600">Trained by hospitality pros</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 rounded-md bg-emerald-600/10 grid place-items-center text-emerald-700 font-semibold">★</div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">5-Star Ambience</p>
                  <p className="text-xs text-gray-600">Hotel-grade comfort & privacy</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 rounded-md bg-emerald-600/10 grid place-items-center text-emerald-700 font-semibold">⏱</div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">Flexible Slots</p>
                  <p className="text-xs text-gray-600">Morning to late-evening</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 rounded-md bg-emerald-600/10 grid place-items-center text-emerald-700">
                  <FaHotel className="text-lg" />  {/* Hotel icon */}
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">5 Star Outlet</p>
                  <p className="text-xs text-gray-600">Morning to late-evening</p>
                </div>
              </div>
            </div>

            {/* description list */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-600">•</span>
                <span>Personalised treatment plan after a short consultation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-600">•</span>
                <span>Premium oils & clean, scented linens for absolute comfort.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-emerald-600">•</span>
                <span>Strict safety protocols and trained staff at every outlet.</span>
              </li>
            </ul>

            {/* CTA row */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#book"
                className="inline-block px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:scale-[1.02] transition-transform"
              >
                Book a Session
              </a>

              <a href="#services" className="text-emerald-900 font-medium hover:underline">Explore Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //// */}
      {/* end content section */}
      {/* new content */}
      <section
      className="bg-gradient-to-b from-emerald-50 via-white to-emerald-100 py-16"
      aria-labelledby="spa-content-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE COLUMN */}
          <motion.div
            className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl bg-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-72 sm:h-96 lg:h-[480px]">
              {imageSrc ? (
                <Image
                  src='/images/process3.jpeg'
                  alt={alt || 'Spa image'}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 opacity-40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9a5 5 0 1110 0c0 2.96-3.5 6.96-5 8.93C10.5 15.96 7 11.96 7 9z" />
                  </svg>
                </div>
              )}

              {/* Badge overlay */}
              <div className="absolute left-6 bottom-6 bg-emerald-900/85 text-white rounded-xl px-4 py-3 backdrop-blur-sm">
                <p className="text-sm opacity-90">Signature Package</p>
                <p className="font-semibold leading-tight">Relax & Renew — 60 mins</p>
              </div>
            </div>
          </motion.div>

          {/* TEXT COLUMN */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-sm font-semibold">Premium Spa</p>

            <h2 id="spa-content-heading" className="mt-6 text-3xl md:text-4xl font-extrabold text-emerald-900 leading-tight">{title}</h2>

            <p className="mt-4 text-gray-700 max-w-xl">{subtitle}</p>

            {/* <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
  {ctaHref ? (
    <Link
      href={ctaHref}
      aria-label={ctaText || 'Book session'}
      className="inline-block px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:brightness-95 transition"
    >
      {ctaText}
    </Link>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:brightness-95 transition"
            aria-label={ctaText || 'Book session'}
          >
            {ctaText}
          </button>
        )}

        <a
          href="#learn"
          className="inline-block px-6 py-3 rounded-full border border-emerald-200 text-emerald-900 font-medium hover:bg-emerald-50 transition text-center"
          aria-label="Learn more about treatments"
        >
          Learn More
        </a>
      </div> */}


            {/* === static content blocks (no Feature function) === */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <h4 className="text-emerald-900 font-semibold">Skilled Therapists</h4>
                <p className="text-sm text-gray-600 mt-1">Certified professionals handpicked for expertise and care.</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <h4 className="text-emerald-900 font-semibold">Safe & Hygienic</h4>
                <p className="text-sm text-gray-600 mt-1">Strict sanitation protocols and premium linens for client safety.</p>
              </div>
            </div>
            {/* === end static blocks === */}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 bg-emerald-50 px-3 py-2 rounded-full border border-emerald-100">
                <span className="text-emerald-900 font-semibold">24+</span>
                <span className="text-sm text-gray-600">Outlets</span>
              </div>
              <div className="flex items-center gap-3 bg-emerald-50 px-3 py-2 rounded-full border border-emerald-100">
                <span className="text-emerald-900 font-semibold">5★</span>
                <span className="text-sm text-gray-600">Hotel partners</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ///// */}
     <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-80 sm:h-[420px] lg:h-[520px]">
              <Image
                src="/images/cc8223d4-67a0-4b1e-bfba-c472cfd87144.jpeg"
                alt="Relaxing spa interior"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-medium text-emerald-600 uppercase">Our Promise</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900 leading-tight">
              What Makes Our Spa in Guegaon Special From Others?
            </h3>
            <p className="mt-4 text-gray-700 max-w-xl">
              A sanctuary crafted for deep relaxation — curated therapies, expert therapists, 
              and a mindful experience designed to restore balance.
            </p>

            {/* Static feature points */}
            <div className="mt-8 border-l-2 border-emerald-100 pl-6 space-y-6">
              <div className="relative pl-2">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <FaLeaf className="w-3 h-3" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900">Holistic Therapies</h4>
                <p className="text-sm text-gray-600 mt-1">We are providing a team of highly experienced <span className="text-sm text-emerald-600 mt-1 font-bold">foreigner therapists, Thai therapists, and Indian therapists,</span> all professionally trained in luxury spa treatments.</p>
              </div>

              <div className="relative pl-2">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <FaHands className="w-3 h-3" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900">Our Services</h4>
                <p className="text-sm text-gray-600 mt-1">Choose from a wide range of our signature therapies including: <span className="text-sm text-emerald-600 mt-1 font-bold">B2B Massage, Couple Massage, Erotic Massage</span></p>
              </div>

              <div className="relative pl-2">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <FaHeartbeat className="w-3 h-3" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900">5-Star Outlets</h4>
                <p className="text-sm text-gray-600 mt-1">We proudly serve our guests at luxury 5-star hotels across Delhi NCR: <span className='text-sm text-emerald-600 mt-1 font-bold'>Novotel, The Suryaa, The Park</span></p>
              </div>

              <div className="relative pl-2">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <FaClock className="w-3 h-3" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900">Flexible Timings</h4>
                <p className="text-sm text-gray-600 mt-1">Extended hours & easy booking to suit busy lives.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    {/* //// */}
     <section className="py-16 bg-white" aria-labelledby="about-extra-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-emerald-600 uppercase">About Us — Quick Look</p>
          <h2 id="about-extra-heading" className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
            Our Vision, Mission & Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine luxury hospitality and evidence-based therapies to create a calm, restorative experience for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <article className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 mb-4">
              <FaEye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Vision</h3>
            <p className="text-sm text-gray-600">
              To be the trusted sanctuary for wellness in Delhi NCR — where every visit restores balance of body & mind.
            </p>
          </article>

          {/* Mission */}
          <article className="bg-white border border-emerald-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 mb-4">
              <FaBullseye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Mission</h3>
            <p className="text-sm text-gray-600">
              Deliver consistent, high-quality spa services in premium hotel environments using trained therapists and safe protocols.
            </p>
          </article>

          {/* Values */}
          <article className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 mb-4">
              <FaHandsHelping className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Values</h3>
            <p className="text-sm text-gray-600">
              Respect, Care & Professionalism — we prioritize client dignity, therapist growth, and hygiene at every step.
            </p>
          </article>
        </div>

        {/* Stats & CTA */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
          <div className="flex gap-6 items-center">
            <div className="text-center">
              <div className="text-emerald-900 font-extrabold text-2xl">24+</div>
              <div className="text-sm text-gray-600">Outlets</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-900 font-extrabold text-2xl">5★</div>
              <div className="text-sm text-gray-600">Hotel partners</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-900 font-extrabold text-2xl">100k+</div>
              <div className="text-sm text-gray-600">Happy customers</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-block px-5 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:brightness-95 transition"
            >
              Contact & Book
            </a>
            <a
              href="#careers"
              className="text-emerald-900 font-medium hover:underline"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* ///////////// */}
      {/* new content */}
       
            {/* icon uytlet */}
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Spa Located  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">in Top Hotels of Guegaon</span>
          </motion.h2>
          
          <motion.p
            className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Discover our exclusive spa outlets at top luxury hotels across the city
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

        {/* Enhanced Outlets Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {outlets.map((outlet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-emerald-100 relative overflow-hidden group"
            >
              {/* Premium ribbon */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                <span>{outlet.rating}</span>
              </div>
              
              {/* Icon with subtle shine effect */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-full shadow-inner group-hover:shadow-md transition-all duration-300">
                    {outlet.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Hotel Name */}
              <h3 className="text-xl font-bold text-emerald-900 mb-3 font-serif">
                {outlet.name}
              </h3>
              
              {/* Tag */}
              <div className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs px-3 py-1 rounded-full mb-4">
                {outlet.tag}
              </div>

              {/* Description */}
              <p className="text-emerald-800/80 text-sm leading-relaxed mb-6">
                {outlet.desc}
              </p>
              
              {/* Decorative line */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent w-3/4 mx-auto group-hover:via-emerald-400 transition-colors duration-300"></div>
              
              {/* Button */}
              {/* <div className="mt-6">
                <button className="text-emerald-700 text-sm font-medium hover:text-emerald-900 flex items-center justify-center gap-1.5 mx-auto transition-colors duration-200 group-hover:gap-2">
                  <span>Explore Location</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* icon uytlet */}

      {/* About Us Section */}
                    {/* 18+ Exclusive Section */}
      <section 
  className="relative py-20 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/images/18+bodyspa.avif')" }}
>
  {/* Enhanced gradient overlay with subtle grain texture */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#3A2415]/80 to-black/90 z-0" />
  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light z-1" />

  <div className="relative z-10 max-w-6xl mx-auto text-[#FAF3E9]">
    {/* Elegant heading with decorative elements */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4A866] to-transparent mb-8" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 text-[#F9D9A9] tracking-wide">
        <span className="block text-xl font-light tracking-widest text-[#D4A866] mb-2">
          PREMIUM WELLNESS DESTINATIONS
        </span>
        24+ Exclusive Body Spa Outlets
      </h2>
      <div className="w-16 h-0.5 bg-[#D4A866] mt-6" />
    </div>

    {/* Refined description */}
    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed font-raleway tracking-wide">
      Indulge in unparalleled luxury & holistic wellness experiences across our premier 5-star locations worldwide.
    </p>

    {/* Sophisticated features grid */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {specialFeatures.map((item, index) => (
        <li key={index}>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-[#D4A866]/30 bg-gradient-to-b from-[#2D1B0F]/60 to-[#1A1109]/60 backdrop-blur-sm hover:border-[#D4A866]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-black/20">
            <svg
              className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#D4A866] group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
                0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
                36.204 0L192 312.69 432.095 72.596c9.997-9.997 
                26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 
                9.997 26.206 0 36.204l-294.4 294.401c-9.998 
                9.997-26.207 9.997-36.204-.001z"/>
            </svg>
            <span className="text-left font-light text-[#FAF3E9] group-hover:text-[#F9D9A9] transition-colors">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>

    {/* Decorative corner elements */}
    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#D4A866]/50" />
    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#D4A866]/50" />
    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#D4A866]/50" />
    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#D4A866]/50" />
  </div>
      </section>
       {/* Why Choose */}
      <section className="w-full py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-yellow-100/50 backdrop-blur-sm -z-10" />
        <div className="max-w-7xl mx-auto px-6">
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
                      Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Taking Spa In Gurgaon from Us</span>
                    </motion.h2>
                    
                    <motion.p
                      className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Visiting a spa offers more than just a moment of indulgence. Regular visits can have significant benefits for your mental, physical, and emotional well-being. Some of the key benefits include:
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
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuresData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-800 font-serif mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>   
          {/* F&Q Section */}
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
                        src="/images/fpkdl.com_750_1758982119_foot-massage-massage-parlor-female-hands-massage-female-feet-beauty-health_130265-8627.jpg"
                        alt="Spa FAQ Illustration"
                        className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
                      />
                    </motion.div>
                  </div>
                </section>   
    </div>
    
  );
}

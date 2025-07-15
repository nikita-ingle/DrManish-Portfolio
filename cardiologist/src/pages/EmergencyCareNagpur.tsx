
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { HeartHandshake } from 'lucide-react';

const EmergencyCareNagpur = () => {
  const serviceData = {
    title: "Emergency Cardiac Care in Nagpur",
    subtitle: "24/7 Heart Emergency Services",
    description: "Dr. Manish Ganwani provides round-the-clock emergency cardiac care in Nagpur with immediate response for heart attacks and cardiac emergencies.",
    icon: HeartHandshake,
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "24/7 availability",
      "Immediate response",
      "Advanced life support",
      "Emergency procedures",
      "ICU facilities",
      "Rapid diagnosis"
    ],
    symptoms: [
      "Severe chest pain",
      "Difficulty breathing",
      "Sudden weakness",
      "Rapid or irregular heartbeat",
      "Loss of consciousness"
    ],
    procedure: [
      "Immediate assessment",
      "Vital signs monitoring",
      "Emergency ECG",
      "Pain management",
      "Stabilization measures",
      "Further treatment planning"
    ]
  };

  const faqs = [
    {
      question: "When should I call for emergency cardiac care?",
      answer: "Call immediately if you experience severe chest pain, difficulty breathing, sudden weakness, or any symptoms that could indicate a heart attack. Don't wait - time is critical."
    },
    {
      question: "Is Dr. Ganwani available 24/7 for emergencies?",
      answer: "Yes, Dr. Ganwani provides emergency cardiac care and can be reached 24/7 for cardiac emergencies. Call +91-9373511338 for immediate assistance."
    },
    {
      question: "What should I do while waiting for emergency care?",
      answer: "Stay calm, sit or lie down comfortably, loosen tight clothing, and if prescribed, take your cardiac medication. Do not drive yourself to the hospital."
    },
    {
      question: "What emergency facilities are available?",
      answer: "Our emergency cardiac services include advanced monitoring, emergency procedures, medication management, and coordination with specialized cardiac units when needed."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Emergency Cardiac Care in Nagpur | 24x7 Heart Emergency | Dr. Manish Ganwani</title>
        <meta name="description" content="24/7 emergency cardiac care in Nagpur by Dr. Manish Ganwani. Immediate heart attack treatment, emergency angioplasty, critical cardiac services." />
        <meta name="keywords" content="emergency cardiac care nagpur, heart attack treatment, cardiac emergency doctor, 24x7 heart help, pre angioplasty, Free angioplasty under Ayushman, mjpjay" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Emergency Cardiac Care in Nagpur | 24x7 Heart Emergency" />
        <meta property="og:description" content="24/7 emergency cardiac care in Nagpur by Dr. Manish Ganwani. Immediate heart attack treatment, emergency angioplasty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshitdhake.info/emergency-cardiac-care-nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Emergency Cardiac Care in Nagpur | 24x7 Heart Emergency" />
        <meta name="twitter:description" content="24/7 emergency cardiac care in Nagpur by Dr. Manish Ganwani." />
        
        <link rel="canonical" href="https://akshitdhake.info/emergency-cardiac-care-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EmergencyService",
          "name": "Emergency Cardiac Care in Nagpur",
          "description": "24/7 emergency cardiac care services for heart attacks and cardiac emergencies",
          "url": "https://akshitdhake.info/emergency-cardiac-care-nagpur",
          "medicalSpecialty": "Emergency Cardiology",
          "physician": {
            "@type": "Physician",
            "name": "Dr. Manish Ganwani",
            "medicalSpecialty": "Cardiology"
          },
          "telephone": "+91-9373511338",
          "availableTime": "24/7"
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <ServiceHero {...serviceData} />
        <ServiceDetails 
          title="24/7 Emergency Cardiac Care in Nagpur"
          benefits={serviceData.benefits}
          symptoms={serviceData.symptoms}
          procedure={serviceData.procedure}
        />
        <ServiceFAQ faqs={faqs} />
        <Footer />
      </div>
    </>
  );
};

export default EmergencyCareNagpur;

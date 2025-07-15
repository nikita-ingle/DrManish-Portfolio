
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Gauge } from 'lucide-react';

const BloodPressureNagpur = () => {
  const serviceData = {
    title: "Blood Pressure Management in Nagpur",
    subtitle: "Expert Hypertension Treatment & Monitoring",
    description: "Dr. Manish Ganwani provides comprehensive blood pressure management services in Nagpur with personalized treatment plans for hypertension control.",
    icon: Gauge,
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "Regular BP monitoring",
      "Personalized medication plans",
      "Lifestyle modification guidance",
      "24/7 emergency support",
      "Dietary counseling",
      "Risk factor assessment"
    ],
    symptoms: [
      "High blood pressure readings",
      "Frequent headaches",
      "Dizziness or lightheadedness",
      "Chest pain or discomfort",
      "Family history of hypertension"
    ],
    procedure: [
      "Comprehensive health assessment",
      "Blood pressure monitoring",
      "Risk factor evaluation",
      "Medication adjustment",
      "Lifestyle counseling session",
      "Regular follow-up scheduling"
    ]
  };

  const faqs = [
    {
      question: "What is considered high blood pressure?",
      answer: "Blood pressure readings of 140/90 mmHg or higher are generally considered high. However, optimal levels vary by individual, and Dr. Ganwani will determine your target based on your overall health."
    },
    {
      question: "How often should I monitor my blood pressure?",
      answer: "For patients with hypertension, daily monitoring is recommended initially. Once controlled, frequency can be reduced based on Dr. Ganwani's recommendations."
    },
    {
      question: "Can high blood pressure be controlled without medication?",
      answer: "In some cases, lifestyle modifications like diet, exercise, and stress management can help control blood pressure. However, medication may be necessary for optimal control."
    },
    {
      question: "What are the risks of untreated high blood pressure?",
      answer: "Untreated hypertension can lead to heart disease, stroke, kidney damage, and other serious complications. Early treatment is crucial for preventing these risks."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>High Blood Pressure Treatment in Nagpur | Hypertension Specialist | Dr. Manish Ganwani</title>
        <meta name="description" content="Expert blood pressure management in Nagpur by Dr. Manish Ganwani. Comprehensive hypertension treatment with pre angioplasty consultation if needed." />
        <meta name="keywords" content="blood pressure treatment nagpur, hypertension specialist, high blood pressure doctor, pre angioplasty, Free angioplasty under Ayushman, mjpjay, BP management" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="High Blood Pressure Treatment in Nagpur | Hypertension Specialist" />
        <meta property="og:description" content="Expert blood pressure management in Nagpur by Dr. Manish Ganwani. Comprehensive hypertension treatment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshitdhake.info/blood-pressure-management-nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="High Blood Pressure Treatment in Nagpur" />
        <meta name="twitter:description" content="Expert blood pressure management in Nagpur by Dr. Manish Ganwani." />
        
        <link rel="canonical" href="https://akshitdhake.info/blood-pressure-management-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          "name": "Hypertension Treatment in Nagpur",
          "description": "Comprehensive blood pressure management and hypertension treatment",
          "url": "https://akshitdhake.info/blood-pressure-management-nagpur",
          "medicalSpecialty": "Cardiology",
          "physician": {
            "@type": "Physician",
            "name": "Dr. Manish Ganwani",
            "medicalSpecialty": "Cardiology"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <ServiceHero {...serviceData} />
        <ServiceDetails 
          title="Comprehensive Blood Pressure Management in Nagpur"
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

export default BloodPressureNagpur;

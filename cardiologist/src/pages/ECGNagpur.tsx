
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Activity } from 'lucide-react';

const ECGNagpur = () => {
  const serviceData = {
    title: "ECG Testing in Nagpur",
    subtitle: "Advanced Electrocardiogram Services by Expert Cardiologist",
    description: "Dr. Manish Ganwani provides comprehensive ECG testing services in Nagpur with latest equipment and expert interpretation for accurate cardiac diagnosis.",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "12-Lead ECG testing",
      "Holter monitoring available",
      "Event recording services",
      "Expert interpretation",
      "Same-day results",
      "Digital reports provided"
    ],
    symptoms: [
      "Chest pain or discomfort",
      "Irregular heartbeat",
      "Shortness of breath",
      "Dizziness or fainting",
      "Fatigue with exertion"
    ],
    procedure: [
      "Patient preparation and positioning",
      "Electrode placement on chest and limbs",
      "Recording of heart rhythm",
      "Computer analysis of results",
      "Expert interpretation by Dr. Ganwani",
      "Report generation and consultation"
    ]
  };

  const faqs = [
    {
      question: "What is an ECG and why is it important?",
      answer: "An ECG (Electrocardiogram) records the electrical activity of your heart. It's crucial for diagnosing heart rhythm disorders, heart attacks, and other cardiac conditions."
    },
    {
      question: "How long does an ECG test take?",
      answer: "A standard ECG takes only 5-10 minutes. However, consultation and result interpretation may take additional 15-20 minutes."
    },
    {
      question: "Do I need to prepare for an ECG?",
      answer: "No special preparation is needed. Wear comfortable clothes and avoid using lotions or oils on your chest area before the test."
    },
    {
      question: "Is ECG testing painful?",
      answer: "No, ECG is completely painless. You'll only feel the electrodes being placed on your skin, which is not uncomfortable."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>ECG Test in Nagpur | Best Cardiologist Bhandara Umred | Dr. Manish Ganwani</title>
        <meta name="description" content="ECG testing in Nagpur by Dr. Manish Ganwani. Expert electrocardiogram services for patients from Bhandara, Umred, Seoni. Advanced cardiac diagnosis with 15+ years experience. Same-day results available." />
        <meta name="keywords" content="ECG test nagpur, electrocardiogram nagpur, ECG bhandara, heart test umred, cardiac evaluation seoni, ECG test near me, heart rhythm test nagpur, cardiologist bhandara, heart specialist umred, ECG cost nagpur" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur, Maharashtra" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ECG Test in Nagpur | Best Cardiologist for Bhandara Umred Patients" />
        <meta property="og:description" content="Expert ECG testing in Nagpur by Dr. Manish Ganwani. Serving patients from Bhandara, Umred, Seoni with advanced cardiac diagnosis." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://akshitdhake.info/ecg-nagpur" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&h=630" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ECG Test in Nagpur | Dr. Manish Ganwani" />
        <meta name="twitter:description" content="Expert ECG testing services in Nagpur. Serving Bhandara, Umred, Seoni patients with advanced cardiac diagnosis." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&h=630" />
        
        <link rel="canonical" href="https://akshitdhake.info/ecg-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTest",
          "name": "ECG Testing in Nagpur",
          "alternateName": "Electrocardiogram Test Nagpur",
          "description": "Advanced electrocardiogram services for cardiac diagnosis and heart rhythm evaluation serving Nagpur, Bhandara, Umred, and Seoni",
          "url": "https://akshitdhake.info/ecg-nagpur",
          "medicalSpecialty": "Cardiology",
          "areaServed": ["Nagpur", "Bhandara", "Umred", "Seoni", "Mauda"],
          "provider": {
            "@type": "Physician",
            "name": "Dr. Manish Ganwani",
            "medicalSpecialty": "Cardiology",
            "telephone": "+91-9373511338"
          },
          "offers": {
            "@type": "Offer",
            "name": "ECG Test Package",
            "description": "Complete ECG testing with expert interpretation",
            "priceRange": "$$",
            "availability": "InStock"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <ServiceHero {...serviceData} />
        <ServiceDetails 
          title="Complete ECG Testing Services in Nagpur"
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

export default ECGNagpur;

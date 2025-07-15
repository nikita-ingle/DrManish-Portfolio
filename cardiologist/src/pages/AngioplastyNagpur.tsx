
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Heart } from 'lucide-react';

const AngioplastyNagpur = () => {
  const serviceData = {
    title: "Angioplasty in Nagpur",
    subtitle: "Advanced Coronary Intervention by Expert Cardiologist",
    description: "Dr. Manish Ganwani offers world-class angioplasty procedures in Nagpur with 20+ years of experience and 98% success rate.",
    icon: Heart,
    heroImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "Minimally invasive procedure",
      "Same-day discharge possible",
      "98% success rate",
      "Latest equipment and techniques",
      "24/7 emergency support",
      "Experienced cardiac team"
    ],
    symptoms: [
      "Chest pain or angina",
      "Shortness of breath",
      "Heart attack symptoms",
      "Blocked coronary arteries",
      "Reduced exercise tolerance"
    ],
    procedure: [
      "Pre-procedure cardiac evaluation",
      "Local anesthesia administered",
      "Catheter insertion through wrist/groin",
      "Balloon inflation to open blockage",
      "Stent placement if required",
      "Post-procedure monitoring"
    ]
  };

  const faqs = [
    {
      question: "What is angioplasty and when is it needed?",
      answer: "Angioplasty is a minimally invasive procedure to open blocked coronary arteries. It's needed when medications aren't sufficient to treat coronary artery disease or during heart attacks."
    },
    {
      question: "How long does angioplasty take?",
      answer: "The procedure typically takes 30-90 minutes depending on the complexity. Most patients can go home the same day or after an overnight stay."
    },
    {
      question: "What is the success rate of angioplasty in your clinic?",
      answer: "Dr. Manish Ganwani has achieved a 98% success rate in angioplasty procedures with minimal complications, thanks to advanced techniques and experienced team."
    },
    {
      question: "What are the risks of angioplasty?",
      answer: "While generally safe, risks include bleeding, infection, artery damage, or allergic reactions. Dr. Ganwani takes all precautions to minimize these risks."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Angioplasty in Nagpur | Pre Angioplasty | Free Angioplasty Under Ayushman | Dr. Manish Ganwani</title>
        <meta name="description" content="Expert angioplasty in Nagpur by Dr. Manish Ganwani. Pre angioplasty consultation, Free angioplasty under Ayushman, mjpjay schemes. 98% success rate." />
        <meta name="keywords" content="angioplasty nagpur, pre angioplasty, Free angioplasty under Ayushman, mjpjay, coronary angioplasty, heart stent nagpur, blocked artery treatment, interventional cardiology" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Angioplasty in Nagpur | Pre Angioplasty | Free Angioplasty Under Ayushman" />
        <meta property="og:description" content="Expert angioplasty in Nagpur by Dr. Manish Ganwani. Pre angioplasty consultation, Free angioplasty under Ayushman, mjpjay schemes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshitdhake.info/angioplasty-in-nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Angioplasty in Nagpur | Pre Angioplasty | Free Angioplasty Under Ayushman" />
        <meta name="twitter:description" content="Expert angioplasty in Nagpur by Dr. Manish Ganwani. Pre angioplasty consultation, Free angioplasty under Ayushman." />
        
        <link rel="canonical" href="https://akshitdhake.info/angioplasty-in-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": "Angioplasty Treatment in Nagpur",
          "description": "Advanced coronary angioplasty procedures with pre angioplasty consultation and Free angioplasty under Ayushman schemes",
          "url": "https://akshitdhake.info/angioplasty-in-nagpur",
          "medicalSpecialty": "Interventional Cardiology",
          "bodyLocation": "Heart",
          "preparation": "Pre angioplasty evaluation and consultation",
          "followup": "Post-procedure cardiac care and monitoring",
          "physician": {
            "@type": "Physician",
            "name": "Dr. Manish Ganwani",
            "medicalSpecialty": "Cardiology"
          },
          "location": {
            "@type": "MedicalClinic",
            "name": "Ganwani Heart Care Clinic",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <ServiceHero {...serviceData} />
        <ServiceDetails 
          title="Complete Angioplasty Care in Nagpur"
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

export default AngioplastyNagpur;

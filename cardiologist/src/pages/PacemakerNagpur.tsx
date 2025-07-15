
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Zap } from 'lucide-react';

const PacemakerNagpur = () => {
  const serviceData = {
    title: "Pacemaker Implantation in Nagpur",
    subtitle: "Advanced Cardiac Pacing Solutions by Expert Cardiologist",
    description: "Dr. Manish Ganwani provides expert pacemaker implantation services in Nagpur using latest technology for patients with heart rhythm disorders.",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "Latest generation pacemakers",
      "Minimally invasive procedure",
      "Same-day discharge available",
      "24/7 post-implant support",
      "Regular follow-up monitoring",
      "Emergency pacing available"
    ],
    symptoms: [
      "Slow heart rate (bradycardia)",
      "Fainting or dizziness",
      "Fatigue and weakness",
      "Heart block conditions",
      "Irregular heart rhythms"
    ],
    procedure: [
      "Pre-procedure cardiac evaluation",
      "Local anesthesia administration",
      "Small incision below collarbone",
      "Pacemaker device placement",
      "Lead positioning and testing",
      "Post-procedure monitoring"
    ]
  };

  const faqs = [
    {
      question: "What is a pacemaker and when is it needed?",
      answer: "A pacemaker is a small device that helps regulate your heartbeat. It's needed when your heart beats too slowly or irregularly, causing symptoms like fatigue, dizziness, or fainting."
    },
    {
      question: "How long does pacemaker surgery take?",
      answer: "The procedure typically takes 1-2 hours. Most patients can go home the same day or after an overnight stay for observation."
    },
    {
      question: "What is the success rate of pacemaker implantation?",
      answer: "Pacemaker implantation has a very high success rate of over 95%. Dr. Ganwani's experience ensures optimal outcomes with minimal complications."
    },
    {
      question: "How long do pacemakers last?",
      answer: "Modern pacemakers typically last 7-15 years depending on usage. Regular check-ups help monitor battery life and device function."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Pacemaker Implantation in Nagpur | Heart Rhythm Treatment | Dr. Manish Ganwani</title>
        <meta name="description" content="Expert pacemaker implantation in Nagpur by Dr. Manish Ganwani. Advanced cardiac pacing solutions for heart rhythm disorders. Pre angioplasty consultation available." />
        <meta name="keywords" content="pacemaker implantation nagpur, cardiac pacing, heart rhythm treatment, pre angioplasty, Free angioplasty under Ayushman, mjpjay, bradycardia treatment" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pacemaker Implantation in Nagpur | Heart Rhythm Treatment" />
        <meta property="og:description" content="Expert pacemaker implantation in Nagpur by Dr. Manish Ganwani. Advanced cardiac pacing solutions for heart rhythm disorders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshitdhake.info/pacemaker-implantation-nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Pacemaker Implantation in Nagpur | Heart Rhythm Treatment" />
        <meta name="twitter:description" content="Expert pacemaker implantation in Nagpur by Dr. Manish Ganwani. Advanced cardiac pacing solutions." />
        
        <link rel="canonical" href="https://akshitdhake.info/pacemaker-implantation-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": "Pacemaker Implantation in Nagpur",
          "description": "Advanced pacemaker implantation for heart rhythm disorders",
          "url": "https://akshitdhake.info/pacemaker-implantation-nagpur",
          "medicalSpecialty": "Cardiology",
          "bodyLocation": "Heart",
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
          title="Advanced Pacemaker Implantation Services in Nagpur"
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

export default PacemakerNagpur;

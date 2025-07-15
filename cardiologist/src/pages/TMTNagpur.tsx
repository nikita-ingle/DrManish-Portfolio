
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Zap } from 'lucide-react';

const TMTNagpur = () => {
  const serviceData = {
    title: "TMT Test in Nagpur",
    subtitle: "Treadmill Test (Exercise Stress Test) by Cardiac Expert",
    description: "Dr. Manish Ganwani offers comprehensive TMT (Treadmill Test) services in Nagpur to evaluate heart function under stress and detect coronary artery disease.",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "Exercise tolerance assessment",
      "Coronary artery disease detection",
      "Pre-operative evaluation",
      "Risk stratification",
      "Supervised by cardiologist",
      "Emergency equipment available"
    ],
    symptoms: [
      "Chest pain with exertion",
      "Shortness of breath during activity",
      "Unexplained fatigue",
      "Irregular heartbeat with exercise",
      "Pre-surgical cardiac clearance needed"
    ],
    procedure: [
      "Pre-test medical evaluation",
      "Baseline ECG and blood pressure",
      "Gradual exercise on treadmill",
      "Continuous heart monitoring",
      "Symptom and vital sign assessment",
      "Post-exercise monitoring and results"
    ]
  };

  const faqs = [
    {
      question: "What is a TMT test and when is it needed?",
      answer: "TMT (Treadmill Test) evaluates how your heart responds to physical stress. It's used to diagnose coronary artery disease, assess exercise capacity, and evaluate treatment effectiveness."
    },
    {
      question: "How should I prepare for a TMT test?",
      answer: "Wear comfortable exercise clothes and shoes. Avoid eating 2-3 hours before the test. Continue your medications unless specifically instructed otherwise by Dr. Ganwani."
    },
    {
      question: "Is the TMT test safe?",
      answer: "Yes, TMT is very safe when performed under proper medical supervision. Dr. Ganwani monitors you throughout the test with emergency equipment readily available."
    },
    {
      question: "How long does the TMT test take?",
      answer: "The complete procedure takes about 45-60 minutes, including preparation, the actual test (8-12 minutes), and recovery monitoring."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>TMT Test in Nagpur | Treadmill Test | Exercise Stress Test | Dr. Manish Ganwani</title>
        <meta name="description" content="TMT testing in Nagpur by Dr. Manish Ganwani. Professional treadmill test for cardiac evaluation. Pre angioplasty assessment available." />
        <meta name="keywords" content="TMT test nagpur, treadmill test nagpur, exercise stress test, cardiac evaluation, pre angioplasty, Free angioplasty under Ayushman, mjpjay, stress test" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TMT Test in Nagpur | Treadmill Test | Exercise Stress Test" />
        <meta property="og:description" content="TMT testing in Nagpur by Dr. Manish Ganwani. Professional treadmill test for cardiac evaluation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshitdhake.info/tmt-test-nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="TMT Test in Nagpur | Treadmill Test" />
        <meta name="twitter:description" content="TMT testing in Nagpur by Dr. Manish Ganwani. Professional treadmill test for cardiac evaluation." />
        
        <link rel="canonical" href="https://akshitdhake.info/tmt-test-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTest",
          "name": "TMT Testing in Nagpur",
          "description": "Professional treadmill testing services for cardiac evaluation and exercise tolerance assessment",
          "url": "https://akshitdhake.info/tmt-test-nagpur",
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
          title="Professional TMT Testing Services in Nagpur"
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

export default TMTNagpur;

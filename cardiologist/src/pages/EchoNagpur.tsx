
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Stethoscope } from 'lucide-react';

const EchoNagpur = () => {
  const serviceData = {
    title: "2D Echo in Nagpur",
    subtitle: "Advanced Echocardiography Services by Heart Specialist",
    description: "Dr. Manish Ganwani provides state-of-the-art 2D Echocardiography services in Nagpur for comprehensive cardiac imaging and diagnosis.",
    icon: Stethoscope,
    heroImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&h=600",
    benefits: [
      "High-resolution cardiac imaging",
      "Doppler blood flow assessment",
      "Valve function evaluation",
      "Heart chamber size measurement",
      "Non-invasive procedure",
      "Immediate results available"
    ],
    symptoms: [
      "Heart murmur evaluation",
      "Chest pain assessment",
      "Shortness of breath",
      "Swelling in legs or feet",
      "Suspected valve problems"
    ],
    procedure: [
      "Patient preparation and positioning",
      "Gel application on chest",
      "Ultrasound probe placement",
      "Image capture from multiple angles",
      "Doppler flow measurements",
      "Report generation and consultation"
    ]
  };

  const faqs = [
    {
      question: "What is 2D Echocardiography?",
      answer: "2D Echo is an ultrasound test that creates detailed images of your heart, showing its structure, function, and blood flow patterns without any radiation or discomfort."
    },
    {
      question: "How long does a 2D Echo take?",
      answer: "The procedure typically takes 30-45 minutes, including preparation and detailed imaging of all heart structures."
    },
    {
      question: "Do I need to prepare for a 2D Echo?",
      answer: "No special preparation is needed. Wear comfortable, loose-fitting clothes that can be easily removed from the chest area."
    },
    {
      question: "Is 2D Echo safe during pregnancy?",
      answer: "Yes, 2D Echo is completely safe during pregnancy as it uses sound waves, not radiation. It's often used to monitor heart health during pregnancy."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>2D Echo Test in Nagpur | Best Echocardiography Bhandara Umred | Dr. Manish Ganwani</title>
        <meta name="description" content="2D Echo testing in Nagpur by Dr. Manish Ganwani. Advanced echocardiography services for Bhandara, Umred, Seoni patients. Expert cardiac imaging with 15+ years experience. Immediate results available." />
        <meta name="keywords" content="2D echo nagpur, echocardiography nagpur, 2D echo bhandara, heart ultrasound umred, cardiac imaging seoni, 2D echo test near me, heart scan nagpur, echo test cost nagpur, cardiologist bhandara, heart specialist umred" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur, Maharashtra" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="2D Echo Test in Nagpur | Best Echocardiography for Bhandara Umred" />
        <meta property="og:description" content="Expert 2D Echo testing in Nagpur by Dr. Manish Ganwani. Advanced cardiac imaging for patients from Bhandara, Umred, Seoni." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://akshitdhake.info/2d-echo-nagpur" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&h=630" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2D Echo Test in Nagpur | Dr. Manish Ganwani" />
        <meta name="twitter:description" content="Expert 2D Echo testing services in Nagpur. Advanced cardiac imaging for Bhandara, Umred, Seoni patients." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&h=630" />
        
        <link rel="canonical" href="https://akshitdhake.info/2d-echo-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTest",
          "name": "2D Echocardiography in Nagpur",
          "alternateName": "2D Echo Test Nagpur",
          "description": "Advanced echocardiography services for comprehensive cardiac imaging and diagnosis serving Nagpur, Bhandara, Umred, and Seoni",
          "url": "https://akshitdhake.info/2d-echo-nagpur",
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
            "name": "2D Echo Test Package",
            "description": "Complete echocardiography with expert cardiac imaging",
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
          title="Advanced 2D Echocardiography Services in Nagpur"
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

export default EchoNagpur;

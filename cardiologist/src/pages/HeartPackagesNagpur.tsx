
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Heart, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeartPackagesNagpur = () => {
  const packages = [
    {
      name: "Basic Heart Check-up",
      price: "₹2,999",
      duration: "2 hours",
      tests: [
        "12-Lead ECG",
        "Blood Pressure Monitoring",
        "Basic Blood Tests",
        "Consultation with Dr. Ganwani",
        "Health Report & Recommendations"
      ],
      ideal: "Ages 20-40, No symptoms"
    },
    {
      name: "Advanced Cardiac Package",
      price: "₹5,999",
      duration: "Half day",
      tests: [
        "12-Lead ECG",
        "2D Echocardiography",
        "Stress Test (TMT)",
        "Comprehensive Blood Panel",
        "Lipid Profile",
        "Detailed Consultation",
        "Follow-up Plan"
      ],
      ideal: "Ages 40-60, Risk factors present",
      popular: true
    },
    {
      name: "Executive Cardiac Screening",
      price: "₹9,999",
      duration: "Full day",
      tests: [
        "Complete ECG & Echo",
        "Exercise Stress Test",
        "Holter Monitoring (24hrs)",
        "CT Coronary Angiography",
        "Complete Blood Work",
        "Nutritionist Consultation",
        "Personalized Care Plan",
        "6-month follow-up included"
      ],
      ideal: "Ages 50+, Executive health screening"
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Heart Checkup Packages in Nagpur | Preventive Cardiac Screening | Dr. Manish Ganwani</title>
        <meta name="description" content="Comprehensive heart checkup packages in Nagpur by Dr. Manish Ganwani. Preventive cardiac screening, executive health packages. Pre angioplasty evaluation included." />
        <meta name="keywords" content="heart checkup nagpur, preventive cardiac screening, executive heart packages, pre angioplasty, Free angioplasty under Ayushman, mjpjay, cardiac health screening" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Heart Checkup Packages in Nagpur | Preventive Cardiac Screening" />
        <meta property="og:description" content="Comprehensive heart checkup packages in Nagpur by Dr. Manish Ganwani. Preventive cardiac screening, executive health packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshitdhake.info/heart-checkup-nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Heart Checkup Packages in Nagpur" />
        <meta name="twitter:description" content="Comprehensive heart checkup packages in Nagpur by Dr. Manish Ganwani." />
        
        <link rel="canonical" href="https://akshitdhake.info/heart-checkup-nagpur" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTest",
          "name": "Heart Checkup Packages in Nagpur",
          "description": "Comprehensive cardiac screening packages for preventive heart care",
          "url": "https://akshitdhake.info/heart-checkup-nagpur",
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
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Heart Check-up Packages in Nagpur
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive cardiac screening packages designed by Dr. Manish Ganwani to detect heart problems early and prevent cardiac emergencies.
              </p>
              <div className="bg-green-100 inline-block px-6 py-3 rounded-full">
                <span className="text-green-800 font-semibold">Early Detection Can Save Your Life</span>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${
                    pkg.popular ? 'border-primary relative' : 'border-gray-200'
                  } hover:shadow-xl transition-shadow`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <div className="text-gray-600">Duration: {pkg.duration}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.tests.map((test, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6 p-3 bg-accent rounded-lg">
                    <div className="text-sm">
                      <strong>Ideal for:</strong> {pkg.ideal}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full text-lg py-3 ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Book This Package
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Why Choose Our Heart Check-up Packages?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Expert Care</h3>
                <p className="text-gray-600 text-sm">Dr. Ganwani's 20+ years of experience</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Early Detection</h3>
                <p className="text-gray-600 text-sm">Prevent cardiac emergencies before they happen</p>
              </div>
              <div className="text-center">
                <Check className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Comprehensive</h3>
                <p className="text-gray-600 text-sm">Complete cardiac evaluation in one visit</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Follow-up Care</h3>
                <p className="text-gray-600 text-sm">Ongoing monitoring and support</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HeartPackagesNagpur;

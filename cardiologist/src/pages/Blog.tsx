
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Heart, Activity, AlertTriangle, TrendingUp, Stethoscope, Shield, Zap, Users, Zap as Pulse, Target } from 'lucide-react';

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false);

  const newBlogPosts = [
    {
      id: 8,
      title: "ASD, VSD, PDA: Understanding Congenital Heart Defects",
      excerpt: "Comprehensive guide to congenital heart defects including symptoms, diagnosis, and treatment options for ASD, VSD, and PDA.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&h=400",
      date: "January 22, 2024",
      readTime: "8 min read",
      icon: Users,
      slug: "asd-vsd-pda-heart-defects"
    },
    {
      id: 9,
      title: "Atrial Fibrillation: Causes, Symptoms, and Treatment",
      excerpt: "Complete guide to atrial fibrillation management including causes, symptoms, diagnosis, and modern treatment approaches.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=400",
      date: "January 21, 2024",
      readTime: "10 min read",
      icon: Pulse,
      slug: "atrial-fibrillation-management"
    },
    {
      id: 10,
      title: "Hypertension Management Tips",
      excerpt: "Expert tips for managing high blood pressure through lifestyle changes, medications, and regular monitoring for optimal heart health.",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&h=400",
      date: "January 23, 2024",
      readTime: "7 min read",
      icon: Target,
      slug: "hypertension-management"
    },
    {
      id: 4,
      title: "How to Manage High Cholesterol?",
      excerpt: "Comprehensive guide to understanding and managing high cholesterol levels through lifestyle changes and medical treatments.",
      image: "https://images.unsplash.com/photo-1657035833978-996b9604a7d9?auto=format&fit=crop&w=600&h=400",
      date: "January 20, 2024",
      readTime: "6 min read",
      icon: TrendingUp,
      slug: "how-to-manage-high-cholesterol"
    },
    {
      id: 5,
      title: "What is Coronary Angiography?",
      excerpt: "Learn about coronary angiography, a vital diagnostic procedure for detecting heart blockages and planning treatment.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&h=400",
      date: "January 18, 2024",
      readTime: "8 min read",
      icon: Stethoscope,
      slug: "what-is-coronary-angiography"
    },
    {
      id: 6,
      title: "How to Get Angioplasty Free of Cost?",
      excerpt: "Complete guide to accessing free angioplasty through Ayushman Bharat and PMJAY schemes for eligible patients.",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=600&h=400",
      date: "January 16, 2024",
      readTime: "7 min read",
      icon: Shield,
      slug: "free-angioplasty-ayushman"
    },
    {
      id: 7,
      title: "What is Angioplasty?",
      excerpt: "Understanding angioplasty procedure, types, benefits, and recovery process explained by an experienced cardiologist.",
      image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&h=400",
      date: "January 14, 2024",
      readTime: "9 min read",
      icon: Zap,
      slug: "what-is-angioplasty"
    }
  ];

  const existingBlogPosts = [
    {
      id: 1,
      title: "When Should You Consult a Cardiologist? Essential Guidelines",
      excerpt: "Learn about the key symptoms and risk factors that indicate you should consult a heart specialist immediately for optimal cardiac care.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&h=400",
      date: "January 15, 2024",
      readTime: "5 min read",
      icon: Heart,
      slug: "when-to-consult-cardiologist"
    },
    {
      id: 2,
      title: "ECG vs TMT: Understanding the Difference and When Each is Needed",
      excerpt: "A comprehensive guide to cardiac diagnostic tests and their specific applications in heart disease detection and monitoring.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&h=400",
      date: "January 10, 2024",
      readTime: "7 min read",
      icon: Activity,
      slug: "ecg-vs-tmt-difference"
    },
    {
      id: 3,
      title: "Heart Attack Warning Signs You Should Never Ignore",
      excerpt: "Critical information about recognizing heart attack symptoms early, including signs specific to women and elderly patients.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400",
      date: "January 5, 2024",
      readTime: "6 min read",
      icon: AlertTriangle,
      slug: "heart-attack-warning-signs"
    }
  ];

  const allBlogPosts = [...newBlogPosts, ...existingBlogPosts];
  const displayedPosts = showAllPosts ? allBlogPosts : allBlogPosts.slice(0, 6);

  const handleViewMore = () => {
    setShowAllPosts(true);
    // Smooth scroll to the new content
    setTimeout(() => {
      const element = document.getElementById('additional-posts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Heart Health Blog | Cardiology Tips Nagpur | Dr. Manish Ganwani | Bhandara Umred Seoni</title>
        <meta name="description" content="Expert cardiology advice from Dr. Manish Ganwani, best heart specialist in Nagpur. Health tips for Bhandara, Umred, Seoni patients. Learn about angioplasty, hypertension, cardiac care with 15+ years experience." />
        <meta name="keywords" content="cardiology blog nagpur, heart health tips bhandara, cardiac care advice umred, heart specialist seoni, angioplasty information nagpur, hypertension management bhandara, heart disease prevention umred, cardiac health nagpur, cardiologist advice seoni" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur, Maharashtra" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Heart Health Blog | Expert Cardiology Tips from Dr. Manish Ganwani" />
        <meta property="og:description" content="Expert cardiology advice from leading heart specialist in Nagpur. Health tips for Bhandara, Umred, Seoni patients. 15+ years cardiac care experience." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://akshitdhake.info/blog" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&h=630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Dr. Manish Ganwani - Cardiologist Nagpur" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heart Health Blog | Expert Cardiology Tips" />
        <meta name="twitter:description" content="Expert cardiology advice from Dr. Manish Ganwani, leading heart specialist serving Nagpur, Bhandara, Umred, Seoni." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&h=630" />
        
        <link rel="canonical" href="https://akshitdhake.info/blog" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Dr. Manish Ganwani's Heart Health Blog",
          "description": "Expert cardiology advice and heart health tips from leading cardiologist in Nagpur serving Bhandara, Umred, Seoni",
          "url": "https://akshitdhake.info/blog",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "medicalSpecialty": "Cardiology",
            "worksFor": {
              "@type": "MedicalClinic",
              "name": "Ganwani Heart Care Clinic",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          },
          "inLanguage": "en-IN",
          "about": ["Heart Health", "Cardiology", "Preventive Care", "Cardiac Treatments"],
          "audience": {
            "@type": "PeopleAudience",
            "geographicArea": ["Nagpur", "Bhandara", "Umred", "Seoni", "Maharashtra"]
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Expert Cardiology Insights & Heart Health Tips from Dr. Manish Ganwani
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore expert cardiology insights, heart health tips, and the latest in cardiac care from Dr. Manish Ganwani. Stay informed with trusted advice on heart conditions, treatments, and prevention.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post, index) => (
                <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard {...post} />
                </div>
              ))}
            </div>

            {!showAllPosts && allBlogPosts.length > 6 && (
              <div className="text-center mt-12">
                <Button 
                  onClick={handleViewMore}
                  variant="outline" 
                  className="border-primary text-primary hover:bg-accent text-lg px-8 py-3"
                >
                  View More Health Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;


import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPost9 = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Atrial Fibrillation: Causes, Symptoms, and Treatment | Dr. Manish Ganwani</title>
        <meta name="description" content="Complete guide to atrial fibrillation - causes, symptoms, diagnosis, and treatment options. Expert advice from Dr. Manish Ganwani, cardiologist in Nagpur." />
        <meta name="keywords" content="atrial fibrillation, AFib, irregular heartbeat, heart rhythm disorder, anticoagulation, cardioversion, Dr. Manish Ganwani, cardiologist Nagpur, arrhythmia treatment" />
        <meta name="author" content="Dr. Manish Ganwani" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#556960" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Atrial Fibrillation: Causes, Symptoms, and Treatment | Dr. Manish Ganwani" />
        <meta property="og:description" content="Complete guide to atrial fibrillation from expert cardiologist Dr. Manish Ganwani." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://akshitdhake.info/blog/atrial-fibrillation-management" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=600" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atrial Fibrillation: Causes, Symptoms, and Treatment" />
        <meta name="twitter:description" content="Complete guide to atrial fibrillation from expert cardiologist." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=600" />
        
        <link rel="canonical" href="https://akshitdhake.info/blog/atrial-fibrillation-management" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Atrial Fibrillation: Causes, Symptoms, and Treatment",
          "description": "Complete guide to atrial fibrillation - causes, symptoms, diagnosis, and treatment options from expert cardiologist.",
          "author": {
            "@type": "Person",
            "name": "Dr. Manish Ganwani",
            "jobTitle": "Cardiologist",
            "alumniOf": "Sree Chitra Tirunal Institute, Trivandrum"
          },
          "datePublished": "2024-01-21",
          "dateModified": "2024-01-21",
          "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=600",
          "keywords": "atrial fibrillation, AFib, arrhythmia, heart rhythm disorder",
          "url": "https://akshitdhake.info/blog/atrial-fibrillation-management",
          "publisher": {
            "@type": "Organization",
            "name": "Ganwani Heart Care Clinic"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://akshitdhake.info/blog/atrial-fibrillation-management"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="text-primary hover:bg-accent mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Atrial Fibrillation: Causes, Symptoms, and Treatment
            </h1>
            
            <div className="flex items-center text-gray-500 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-6">January 21, 2024</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>10 min read</span>
            </div>

            <div className="flex items-center mb-6">
              <img
                src="/images/dr-ganwani.jpg"
                alt="Dr. Manish Ganwani"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-primary">
                  <Link to="/about-doctor" className="hover:underline">
                    Dr. Manish Ganwani
                  </Link>
                </p>
                <p className="text-sm text-gray-600">Cardiologist</p>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=600"
              alt="Heart rhythm monitoring"
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Atrial fibrillation (AFib) is the most common heart rhythm disorder, affecting millions of people worldwide. Understanding this condition, its causes, symptoms, and treatment options is crucial for effective management and prevention of serious complications like stroke and heart failure.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">What is Atrial Fibrillation?</h2>
            
            <p className="text-gray-700 mb-4">
              Atrial fibrillation is an irregular and often rapid heart rhythm that occurs when the two upper chambers of the heart (atria) beat chaotically and irregularly, out of sync with the two lower chambers (ventricles). This disrupts the normal flow of blood through the heart and can lead to various complications.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Types of Atrial Fibrillation</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Paroxysmal AFib</h3>
            <p className="text-gray-700 mb-4">
              Episodes come and go, usually lasting from a few minutes to hours, and stop on their own within 7 days.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Persistent AFib</h3>
            <p className="text-gray-700 mb-4">
              Lasts more than 7 days and usually requires treatment to restore normal rhythm.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Permanent AFib</h3>
            <p className="text-gray-700 mb-4">
              The irregular rhythm cannot be restored to normal, and long-term treatment focuses on rate control and stroke prevention.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Causes and Risk Factors</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Common Causes</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>High blood pressure (hypertension)</li>
              <li>Coronary artery disease</li>
              <li>Heart valve disorders</li>
              <li>Cardiomyopathy (enlarged or thickened heart)</li>
              <li>Congenital heart defects</li>
              <li>Hyperthyroidism</li>
              <li>Sleep apnea</li>
              <li>Excessive alcohol consumption</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Risk Factors</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Age (risk increases after 60)</li>
              <li>Family history of AFib</li>
              <li>Diabetes</li>
              <li>Obesity</li>
              <li>Chronic kidney disease</li>
              <li>Lung diseases</li>
              <li>Previous heart surgery</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Symptoms</h2>
            
            <p className="text-gray-700 mb-4">
              Some people with atrial fibrillation have no symptoms and are unaware of their condition until it's discovered during a physical examination. Others may experience:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Palpitations (rapid, irregular heartbeat)</li>
              <li>Shortness of breath</li>
              <li>Weakness and fatigue</li>
              <li>Chest pain or discomfort</li>
              <li>Dizziness or lightheadedness</li>
              <li>Reduced exercise tolerance</li>
              <li>Confusion (in elderly patients)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diagnosis</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Diagnostic Tests</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Electrocardiogram (ECG):</strong> Primary test to diagnose AFib</li>
              <li><strong>Holter monitor:</strong> 24-48 hour continuous heart rhythm monitoring</li>
              <li><strong>Event monitor:</strong> Longer-term monitoring for intermittent symptoms</li>
              <li><strong>Echocardiogram:</strong> Assesses heart structure and function</li>
              <li><strong>Blood tests:</strong> Check for thyroid problems and other conditions</li>
              <li><strong>Chest X-ray:</strong> Evaluate heart size and lung condition</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Treatment Strategies</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Rate Control</h3>
            <p className="text-gray-700 mb-4">
              Medications to slow down the heart rate while allowing AFib to continue:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Beta-blockers (metoprolol, atenolol)</li>
              <li>Calcium channel blockers (diltiazem, verapamil)</li>
              <li>Digoxin (in specific cases)</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Rhythm Control</h3>
            <p className="text-gray-700 mb-4">
              Treatments to restore and maintain normal heart rhythm:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Antiarrhythmic medications:</strong> Amiodarone, flecainide, propafenone</li>
              <li><strong>Cardioversion:</strong> Electrical or chemical restoration of normal rhythm</li>
              <li><strong>Catheter ablation:</strong> Destroys tissue causing abnormal rhythms</li>
              <li><strong>Surgical maze procedure:</strong> For complex cases</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Stroke Prevention</h3>
            <p className="text-gray-700 mb-4">
              Anticoagulation therapy based on stroke risk assessment:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Warfarin:</strong> Traditional anticoagulant requiring regular monitoring</li>
              <li><strong>DOACs:</strong> Direct oral anticoagulants (apixaban, rivaroxaban, dabigatran)</li>
              <li><strong>Aspirin:</strong> Limited use in low-risk patients</li>
              <li><strong>Left atrial appendage closure:</strong> For patients who cannot take anticoagulants</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Lifestyle Management</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Lifestyle Modifications</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Maintain healthy weight</li>
              <li>Regular moderate exercise</li>
              <li>Limit alcohol consumption</li>
              <li>Avoid excessive caffeine</li>
              <li>Manage stress effectively</li>
              <li>Treat sleep apnea if present</li>
              <li>Control blood pressure and diabetes</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Complications</h2>
            
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Stroke:</strong> Blood clots forming in the atria can travel to the brain</li>
              <li><strong>Heart failure:</strong> Prolonged rapid heart rate can weaken the heart</li>
              <li><strong>Cognitive impairment:</strong> Reduced blood flow may affect brain function</li>
              <li><strong>Other embolism:</strong> Clots can travel to other organs</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">When to Seek Emergency Care:</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Chest pain or pressure</li>
                <li>Severe shortness of breath</li>
                <li>Fainting or near-fainting</li>
                <li>Signs of stroke (sudden weakness, speech problems, vision changes)</li>
              </ul>
            </div>

            <div className="bg-accent rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Expert Atrial Fibrillation Management</h3>
              <p className="text-gray-700 mb-4">
                As an experienced cardiologist, I provide comprehensive evaluation and personalized treatment plans for atrial fibrillation. Early diagnosis and appropriate management can significantly reduce the risk of complications and improve quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Schedule Consultation
                  </Button>
                </Link>
                <Button variant="outline" className="border-primary text-primary">
                  Call: +91-9373511338
                </Button>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost9;

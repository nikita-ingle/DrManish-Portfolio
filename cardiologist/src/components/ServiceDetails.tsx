
import React from 'react';
import { CheckCircle, AlertTriangle, Clipboard } from 'lucide-react';

interface ServiceDetailsProps {
  title: string;
  benefits: string[];
  symptoms: string[];
  procedure: string[];
}

const ServiceDetails = ({ title, benefits, symptoms, procedure }: ServiceDetailsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-primary">Why Choose Us</h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Symptoms */}
          <div className="bg-orange-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-primary">When You Need This</h3>
            </div>
            <ul className="space-y-3">
              {symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedure */}
          <div className="bg-accent p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Clipboard className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-primary">Our Process</h3>
            </div>
            <ol className="space-y-3">
              {procedure.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;

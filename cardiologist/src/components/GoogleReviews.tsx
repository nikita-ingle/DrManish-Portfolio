
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-yellow-400 fill-current mr-2" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Patients Say
            </h2>
            <Star className="h-6 w-6 text-yellow-400 fill-current ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read authentic reviews from patients who have experienced exceptional cardiac care with Dr. Manish Ganwani.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div 
              className="elfsight-app-c00247e4-b2b3-48ae-a512-577fdf3da208 rounded-lg shadow-sm" 
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Reviews are updated automatically from Google My Business
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

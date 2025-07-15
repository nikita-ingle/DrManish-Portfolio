import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">
          Your message has been successfully sent. We'll get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;

import React from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+919373511338';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/919373511338';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ganwaniheartclinic@gmail.com';
  };

  const handleDirectionsClick = () => {
    const address =
      "Ganwani Heart Care Clinic, BS6, Sadoday Complex, Central Avenue Road, Nagpur, Maharashtra";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/place/21%C2%B008'58.1%22N+79%C2%B006'39.8%22E/@21.1494671,79.111056,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.1494671!4d79.111056?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your appointment or reach out for any cardiac care inquiries. We're here to help you maintain optimal heart health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone</h4>
                  <button
                    onClick={handleCallClick}
                    className="text-gray-700 hover:text-primary transition-colors block"
                  >
                    +91-9373511338
                  </button>
                  <span className="text-gray-500 text-sm">24/7 Emergency Available</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    ganwaniheartclinic@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-accent p-3 rounded-full mr-4 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Address</h4>
                  <button
                    onClick={handleDirectionsClick}
                    className="text-gray-700 hover:text-primary transition-colors text-left"
                  >
                    BS6, Sadoday Complex,<br />
                    Central Avenue Road, Nagpur, Maharashtra
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Hours</h4>
                  <div className="text-gray-700">
                    <div>Monday - Saturday: 10:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-2">Emergency Contact</h4>
              <p className="text-red-700 mb-4">
                For cardiac emergencies, call immediately. Don't wait - time is critical for heart-related issues.
              </p>
              <Button
                onClick={handleCallClick}
                className="bg-red-600 hover:bg-red-700 text-white w-full"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +91-9373511338
              </Button>
            </div>
          </div>

          {/* Contact Form (Using Formsubmit) */}
          <div>
            <div className="bg-accent/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>

              <form
                action="https://formsubmit.co/nikitaingle1311@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://https://dr-manish-portfolio.vercel.app/Thankyou" />
                <input type="hidden" name="_subject" value="New Message from Ganwani Heart Care Website" />
                {/* <input type="hidden" name="_next" value="https://ganwaniheartclinic.in/thankyou" /> */}


                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please describe your cardiac health concerns or appointment request..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

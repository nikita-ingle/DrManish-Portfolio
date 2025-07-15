
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  heroImage: string;
}

const ServiceHero = ({ title, subtitle, description, icon: Icon, heroImage }: ServiceHeroProps) => {

  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Icon className="h-12 w-12 text-primary mr-4" />
              <div className="w-1 h-12 bg-primary mr-4"></div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  {title}
                </h1>
                <p className="text-xl text-primary font-semibold mt-2">
                  {subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
              onClick={handleAppointmentClick}>
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>
          </div>

          <div className="text-center">
            <img
              src={heroImage}
              alt={title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

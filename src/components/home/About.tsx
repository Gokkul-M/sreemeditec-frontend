
import React from 'react';
import { CheckCircle,ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const About = () => {
  const stats = [
    { value: '20+', label: 'Years in Medical Industry' },
    { value: '400+', label: 'Hospitals & Clinics Served' },
    { value: '2000+', label: 'Medical Equipment Delivered' },
    { value: '10+', label: 'Skilled Professionals' }
  ];
  

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="public\hero1.jpeg" 
                alt="About Sreemeditec"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-4 shadow-lg hidden md:flex">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-4">
                    <div className="text-white text-2xl font-bold">{stat.value}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block text-sm font-semibold bg-blue-100 text-primary px-3 py-1 rounded-full">
              About Sreemeditec"
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Trusted Partner for Technology Solutions Since 2005
            </h2>
            <p className="text-gray-600">
            Delivering Trust. Powering Care.
For over 20 years, Sreemeditec has been at the heart of healthcare—providing hospitals and clinics with reliable, high-performance medical equipment that supports both caregivers and patients.

We believe that quality equipment saves lives, and our mission is to ensure every hospital we serve is equipped with the tools they need to deliver exceptional care.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <p>Trusted supplier of certified medical technologies</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <p> Dedicated after-sales service & technical support</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <p>Scalable solutions for clinics to multi-specialty hospitals</p>
              </div>
            </div>

            <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

             <div className="mt-12 text-left">
                      <Link to="/about" className="btn-primary inline-flex items-center">
                        About us <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

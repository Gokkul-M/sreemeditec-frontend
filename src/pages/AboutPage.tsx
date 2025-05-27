
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'With over 20 years of experience in technology leadership, Sarah has guided Sreemeditec through continuous growth and innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      bio: 'Michael leads our technical strategy and ensures we stay at the cutting edge of technology developments.'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      bio: 'David brings creative vision and user-centered design principles to all our client projects.'
    },
    {
      name: 'Priya Patel',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      bio: 'Priya ensures smooth delivery of all client projects and oversees our operational excellence.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sreemeditec</h1>
            <p className="text-xl max-w-3xl mx-auto">
            We are a team of experts committed to providing hospitals with reliable and high-quality medical equipment.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="public\meet.jpeg" 
                  alt="Our Story" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-600">
                Founded in 2005, Sreemeditec set out with one goal: to provide hospitals and healthcare facilities with reliable and high-quality medical equipment. What started as a small team of dedicated professionals has grown into a trusted supplier, offering a wide range of medical devices and solutions for hospitals and clinics worldwide.
                </p>
                <p className="text-gray-600">
                Over the years, we've partnered with hundreds of healthcare providers, equipping them with the technology needed to enhance patient care and streamline operations. Our focus on quality, reliability, and customer satisfaction is at the core of everything we do.
                </p>
                <p className="text-gray-600">
                  Today, with a growing team, we continue to expand our range of products and services, ensuring that healthcare professionals have the right tools to deliver exceptional care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600">
                These principles guide our work and define our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality & Reliability</h3>
                <p className="text-gray-600">
                We prioritize delivering only the highest quality, most reliable medical equipment to help healthcare professionals provide the best patient care.                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer-Centric Service
                </h3>
                <p className="text-gray-600">
                We are committed to continuously supporting our clients with personalized service, maintenance, and expertise, ensuring the equipment functions optimally at all times.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dependability</h3>
                <p className="text-gray-600">
                Our clients trust us for the quality and longevity of the equipment we provide, ensuring that healthcare professionals have reliable tools when they are needed most.                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
       
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

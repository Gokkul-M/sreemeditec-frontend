
import React from 'react';
import { Code, PenTool, Settings, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    id: 'software',
    icon: <Code size={40} className="text-primary" />,
    title: "Medical Equipment Supply",
    description: "We offer a broad selection of advanced medical equipment for hospitals..",    link: '/services#software'
  },
  {
    id: 'design',
    icon: <PenTool size={40} className="text-primary" />,
    title: "Installation & Maintenance",
    description: "Our trained technicians ensure proper installation and provide ongoing maintenance..",    link: '/services#design'
  },
  {
    id: 'consulting',
    icon: <Settings size={40} className="text-primary" />,
    title: 'Consultation & Procurement',
    description: "We help healthcare providers make informed decisions with expert consultation..",
    link: '/services#consulting'
  },
  {
    id: 'cloud',
    icon: <Cloud size={40} className="text-primary" />,
    title: 'After-Sales Support',
    description: "We provide reliable after-sales service, including training..",
    link: '/services#cloud'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
          We offer a range of high-quality medical equipment and services to help healthcare professionals provide exceptional patient care.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-l font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-primary hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center">
            View All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

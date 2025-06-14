
import React from 'react';
import { Phone, Mail, MapPin ,ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
          Looking for quality medical equipment? Contact us for a free consultation today!          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Our team is here to help during business hours</p>
            <a href="tel:+919884818398" className="text-primary font-medium hover:underline">+91 98848 18398</a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get in touch with our support team</p>
            <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=sreemeditec@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer" className="text-primary font-medium hover:underline">sreemeditec@gmail.com</a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-primary rounded-full mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come by our office</p>
            <address className="not-italic text-primary font-medium">
              No:18/2, Bajanai Koil Street, Rajakilpakkam, Chennai-73<br />
              Tamilnadu, India.
            </address>
          </div>
        </div>

         <div className="mt-12 text-center">
                  <Link to="/contact" className="btn-primary inline-flex items-center">
                    Contact <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
      </div>
    </section>
  );
};

export default Contact;

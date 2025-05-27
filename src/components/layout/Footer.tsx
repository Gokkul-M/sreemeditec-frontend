
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Sreemeditec</h3>
            <p className="mb-4">Supporting healthcare with trusted medical technology since 2005. Your vision, our mission.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/index" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#software" className="hover:text-primary transition-colors">Software Development</Link></li>
              <li><Link to="/services#design" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services#consulting" className="hover:text-primary transition-colors">IT Consulting</Link></li>
              <li><Link to="/services#cloud" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span>No:18/2, Bajanai Koil Street, Rajakilpakkam, Chennai-600073</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary" />
                <span>+91 9884818398</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary" />
                <span>sreemeditec@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Sreemeditec. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="mr-4 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

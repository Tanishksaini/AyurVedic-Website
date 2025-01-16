import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-Mehaai-dark text-white">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2 ">
                <img src="../public/Logo.png" alt="Logo" className='h-12 w-auto'/>
                <span className="ml-2 text-2xl font-serif text-Mehaai-primary">Mehaai Ayurveda</span>
              </Link>
              <p className="text-Mehaai-beige/80 pr-4">
                Ancient wisdom meets modern wellness. Discover authentic Ayurvedic remedies for holistic health.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-Mehaai-primary hover:text-Mehaai-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-Mehaai-primary hover:text-Mehaai-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-Mehaai-primary hover:text-Mehaai-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif text-Mehaai-primary mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-Mehaai-beige/80 hover:text-Mehaai-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-Mehaai-beige/80 hover:text-Mehaai-primary transition-colors">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-Mehaai-beige/80 hover:text-Mehaai-primary transition-colors">
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-Mehaai-beige/80 hover:text-Mehaai-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-serif text-Mehaai-primary mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-Mehaai-beige/80">
                  <Mail className="h-5 w-5 mr-3 text-Mehaai-primary" />
                  <span>contact@Mehaai.com</span>
                </li>
                <li className="flex items-center text-Mehaai-beige/80">
                  <Phone className="h-5 w-5 mr-3 text-Mehaai-primary" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center text-Mehaai-beige/80">
                  <MapPin className="h-5 w-5 mr-3 text-Mehaai-primary" />
                  <span>123 Ayurveda Street, Wellness City</span>
                </li>
              </ul>
            </div>
</div>
            {/* Newsletter */}
          

          {/* Bottom Bar */}
          <div className="border-t border-Mehaai-primary/20 py-6 text-center text-Mehaai-beige/60">
            <p>© {new Date().getFullYear()} Mehaai Ayurvedia. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Secondary Footer with Disclaimer and Certifications */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          {/* Certification Logos */}
          <div className="flex items-center space-x-8 mb-8">
            <img
              src="data:image/png;base64,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"
              alt="ISO Certification"
              className="h-20 w-auto object-contain"
            />
            <img
              src="data:image/jpeg;base64,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"
              alt="FSSAI Certification"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Disclaimer */}
          <div className="text-sm text-gray-400">
            <p className="mb-4">
              Disclaimer: The health-related information on this site is meant for basic informational purposes only. 
              This information has not been evaluated by the Food and Medical Authorities or by us. It is not intended 
              to serve as a medical advice, an alternative to a doctor's appointment or to be used for diagnosing or 
              treating any health condition.
            </p>
            <p>
              We do not promote self-medication. Users of this website are advised to consult with their physician 
              before making any decisions concerning their health. The products mentioned are not intended to diagnose, 
              treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
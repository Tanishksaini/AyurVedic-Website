import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-Mehaai-light bg-texture border-b border-Mehaai-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
          <img src="https://res.cloudinary.com/dxz23vjoo/image/upload/v1737040790/faysfzz3ymjamoxnxkic.png" className='h-12 w-auto'/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-Mehaai-primary text-white shadow-md'
                    : 'text-Mehaai-dark hover:bg-Mehaai-primary/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-Mehaai-dark hover:bg-Mehaai-primary/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg border border-Mehaai-primary/10 overflow-hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-3 transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'bg-Mehaai-primary/10 text-Mehaai-secondary font-medium'
                      : 'text-Mehaai-dark hover:bg-Mehaai-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
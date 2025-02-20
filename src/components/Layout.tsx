import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, MessageSquare } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ScamShield</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/upload-center"
                className={`${location.pathname === '/upload-center' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              >
                Upload Center
              </Link>
              <Link 
                to="/reporting"
                className={`${location.pathname === '/reporting' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              >
                Report Scam
              </Link>
              <Link 
                to="/awareness"
                className={`${location.pathname === '/awareness' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
              >
                Awareness Hub
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">Login</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/upload-center"
                  className={`${location.pathname === '/upload-center' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                >
                  Upload Center
                </Link>
                <Link 
                  to="/reporting"
                  className={`${location.pathname === '/reporting' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                >
                  Report Scam
                </Link>
                <Link 
                  to="/awareness"
                  className={`${location.pathname === '/awareness' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                >
                  Awareness Hub
                </Link>
                <button className="text-gray-700 hover:text-blue-600">Login</button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Chat Support Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50">
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">ScamShield</span>
              </div>
              <p className="text-gray-400">
                Protecting citizens from digital arrest scams through AI-powered prevention and detection.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/upload-center" className="hover:text-white">Upload Center</Link></li>
                <li><Link to="/reporting" className="hover:text-white">Report Scam</Link></li>
                <li><Link to="/awareness" className="hover:text-white">Awareness Hub</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1800-XXX-XXXX</li>
                <li>help@scamshield.ai</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full mb-2"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ScamShield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
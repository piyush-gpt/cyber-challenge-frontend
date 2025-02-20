import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Upload,
  FileCheck,
  UserX,
  Video,
  Brain,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Digital Arrest Scams with{' '}
              <span className="text-blue-600">AI-Powered Protection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Prevent fraud, detect scams, and report threats with advanced technology and real-time analytics. 
              Stay one step ahead of digital fraudsters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/upload-center"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Scams Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Saved from Fraud</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Active Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Protection Against Digital Arrest Scams
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered platform provides end-to-end protection through advanced detection and prevention mechanisms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Protection</h3>
              <p className="text-gray-600">
                Advanced AI algorithms continuously monitor and analyze potential threats to prevent scam attempts
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Detection</h3>
              <p className="text-gray-600">
                Machine learning models identify suspicious patterns in documents, calls, and identities
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Alerts</h3>
              <p className="text-gray-600">
                Receive immediate notifications about potential scam attempts and fraudulent activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How ScamShield Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple yet powerful process to keep you protected
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Upload className="h-6 w-6" />,
                title: "Upload Content",
                description: "Submit suspicious documents, calls, or identities"
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: "AI Analysis",
                description: "Our AI performs deep analysis of the content"
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Get Results",
                description: "Receive detailed analysis and threat assessment"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Stay Protected",
                description: "Take action based on our recommendations"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Threats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Threat Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about the most recent digital arrest scam patterns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-6 w-6 text-red-500" />,
                title: "Video Call Scams",
                description: "Fraudsters using deepfake technology to impersonate police officers",
                trend: "↑ 45% increase"
              },
              {
                icon: <Phone className="h-6 w-6 text-orange-500" />,
                title: "Phone Spoofing",
                description: "Scammers using fake police station numbers for credibility",
                trend: "↑ 32% increase"
              },
              {
                icon: <FileCheck className="h-6 w-6 text-yellow-500" />,
                title: "Document Forgery",
                description: "Sophisticated fake court orders and police documents",
                trend: "↑ 28% increase"
              }
            ].map((threat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg mr-4">
                    {threat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{threat.title}</h3>
                    <p className="text-red-600 text-sm font-medium">{threat.trend}</p>
                  </div>
                </div>
                <p className="text-gray-600">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped others stay safe from digital arrest scams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "ScamShield helped me identify a fake arrest warrant before I could fall victim to the scam.",
                author: "Rajesh Kumar",
                role: "Business Owner"
              },
              {
                quote: "The real-time detection saved my family from losing our savings to a sophisticated police impersonation scam.",
                author: "Priya Sharma",
                role: "Teacher"
              },
              {
                quote: "Their awareness resources helped me educate my entire community about digital arrest scams.",
                author: "Amit Patel",
                role: "Community Leader"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Yourself?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of others who are already protected by ScamShield
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/upload-center"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition"
              >
                Get Started Now
              </Link>
              <Link
                to="/awareness"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
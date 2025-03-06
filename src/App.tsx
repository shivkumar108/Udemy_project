import React from 'react';
import { ChevronRight } from 'lucide-react';

// Company logos
const companies = [
  { name: 'Volkswagen', logo: 'https://images.unsplash.com/photo-1687244158350-b78e4271c6c3?w=100&h=100&fit=crop&auto=format' },
  { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1662947995689-ec5165848bac?w=100&h=100&fit=crop&auto=format' },
  { name: 'Cisco', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&auto=format' },
  { name: 'Vimeo', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=100&fit=crop&auto=format' },
  { name: 'P&G', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&auto=format' },
];

// Testimonials data
const testimonials = [
  {
    quote: "Our platform was rated the most popular online course or certification program for learning how to code according to the 2023 Developer survey.",
    author: "Sarah Chen",
    position: "Lead Developer at TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&auto=format",
    cta: "View Web Development courses",
    responses: "37,076 responses collected"
  },
  {
    quote: "This platform was truly a game-changer and a great guide for me as we brought our vision to life.",
    author: "Michael Ross",
    position: "CTO at InnovateTech",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&auto=format",
    cta: "View this Development course"
  },
  {
    quote: "The platform gives you the ability to be persistent. I learned exactly what I needed to know in the real world.",
    author: "Emily Watson",
    position: "Senior Engineer at CloudTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&auto=format",
    cta: "View this Cloud course"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-center text-gray-700 text-2xl mb-12">
          Trusted by over 16,000 companies and millions of learners around the world
        </h1>

        {/* Company logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
          {companies.map((company) => (
            <div key={company.name} className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Main heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          See what others are achieving through learning
        </h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl text-gray-300 mb-4">"</div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>

              {testimonial.responses && (
                <p className="text-sm text-gray-500 mb-4">{testimonial.responses}</p>
              )}

              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                {testimonial.cta}
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
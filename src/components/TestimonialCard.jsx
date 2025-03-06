import React from 'react';
import { ChevronRight } from 'lucide-react';

function TestimonialCard({ testimonial, onButtonClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl text-gray-300 mb-4">"</div>
      <p className="text-gray-700 mb-6 min-h-[120px]">{testimonial.quote}</p>
      
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

      <button 
        onClick={() => onButtonClick(testimonial.link)}
        className="flex items-center text-purple-600 hover:text-purple-800 transition-colors group"
      >
        {testimonial.cta}
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export default TestimonialCard;
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

function TestimonialSection({ onTestimonialClick }) {
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
        See what others are achieving through learning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            onButtonClick={onTestimonialClick}
          />
        ))}
      </div>
    </>
  );
}

export default TestimonialSection;
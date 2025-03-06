import React from 'react';
import Header from './components/Header';
import TestimonialSection from './components/TestimonialSection';

function App() {
  const handleTestimonialClick = (link) => {
    // In a real app, you would use React Router here
    console.log(`Navigating to: ${link}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Header />
        <TestimonialSection onTestimonialClick={handleTestimonialClick} />
      </div>
    </div>
  );
}

export default App;
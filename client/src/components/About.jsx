import React, { useState } from 'react';
import './AboutUs.css'; // Make sure you have this CSS

// People data in the format you need
const peopleData = [
  {
    imageSrc: '/images/1.jpg', // Adjust paths as needed
    quote: "It's rewarding to see the children grow and smile.",
    name: 'John Doe',
    title: 'Volunteer',
  },
  {
    imageSrc: '/images/sarah.jpg',
    quote: "Creating a structured and caring environment is key.",
    name: 'Sarah Lee',
    title: 'Coordinator',
  },
  {
    imageSrc: '/images/michael.jpg',
    quote: "Every contribution helps build a brighter future for these kids.",
    name: 'Michael Chan',
    title: 'Donor',
  },
  {
    imageSrc: '/images/aisha.jpg',
    quote: "Their resilience and joy inspire me every day.",
    name: 'Aisha Noor',
    title: 'Caregiver',
  },
  // Add more people in this format
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPerson = peopleData[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? peopleData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === peopleData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            We are a non-profit organization dedicated to providing care and
            support to orphaned children. Our mission is to create a safe, loving,
            and nurturing environment where every child can thrive and feel
            valued.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We rely on the support of generous donors, volunteers, and caregivers
            who share our passion for helping those in need. Join us in making a
            positive impact on the lives of children who deserve a better future.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-center mb-4">Our Values</h3>
          <ul className="space-y-4 text-lg text-gray-600">
            <li>Compassion: We treat every child with kindness and empathy.</li>
            <li>Integrity: We operate with transparency and honesty in everything we do.</li>
            <li>Commitment: We are dedicated to improving the lives of children in need.</li>
            <li>Community: We believe in the power of working together to make a difference.</li>
          </ul>
        </div>
      </section>

      {/* New People Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Dedicated Team</h2>
        <div className="relative max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="image-container rounded-full overflow-hidden w-500 h-500 mx-auto mb-auto">
      
            <img
              src={currentPerson.imageSrc}
              alt={currentPerson.name}
              className="full h-full object-cover"
            />
          </div>
          <div className="text-content text-center">
            <p className="italic text-gray-700 mb-4">"{currentPerson.quote}"</p>
            <h3 className="text-xl font-semibold text-blue-600">{currentPerson.name}</h3>
            <p className="text-gray-600">{currentPerson.title}</p>
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
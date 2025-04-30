import React from 'react';
import Carousel from './Carousel';
import PreviousDonations from './PreviousDonations';
import Donation from './Donation';
import Footer from './Footer';

export default function Home() {
  return (
    // Just a small padding at the bottom to prevent overlap
    <div className="flex flex-col min-h-screen pb-16">
      <section id="home" className="flex-1">
        {/* Carousel */}
        <Carousel />

        {/* Welcome */}
        <div className="text-center mt-10 px-4">
          <h1 className="text-4xl font-bold">Welcome to Our Orphanage</h1>
          <p className="text-xl mt-4">We are here to help and nurture children in need.</p>
        </div>

        {/* Previous Donations */}
        <PreviousDonations />

        {/* Donation Form */}
        {/* <Donation /> */}
      </section>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

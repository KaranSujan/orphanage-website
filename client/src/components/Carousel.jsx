import React, { useState, useEffect } from 'react';

const images = [
  '/images/orphanage1.jpg',
  '/images/orphanage2.jpg',
  '/images/orphanage3.jpg',
  '/images/orphanage4.jpg',
  '/images/orphanage5.jpg',
  '/images/orphanage6.jpg',
  '/images/orphanage7.jpg',
  '/images/orphanage8.jpg',
];

export default function Carousel() {
  // Number of images per “page”
  const perPage = 2;
  // Total pages to show (4 images / 2 per page = 2 pages)
  const totalPages = Math.ceil(images.length / perPage);

  const [page, setPage] = useState(0);

  // Auto-advance every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 3000);
    return () => clearInterval(id);
  }, [totalPages]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <div className="relative w-screen h-[50vh] overflow-hidden">
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${totalPages * 100}vw`,
          transform: `translateX(-${page * 100}vw)`,
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-[50vw] h-full flex-shrink-0">
            <img src={src} alt={`Slide ${i+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ›
      </button>
    </div>
  );
}

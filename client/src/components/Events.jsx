import React, { useState } from 'react';

const events = [
  { id: 1, title: 'Christmas Celebration', date: 'December 25, 2025', image: '/images/1.jpg', details: 'A fun-filled day with gifts, food, and entertainment for the children. Join us for a heartwarming celebration of the season!' },
  { id: 2, title: 'Fundraising Gala', date: 'November 14, 2025', image: '/images/2.jpg', details: 'An elegant evening to support our orphanage. With your help, we aim to raise enough funds to support our projects.' },
  { id: 3, title: 'Volunteer Day', date: 'October 5, 2025', image: '/images/3.jpg', details: 'A special day to give back! Volunteer your time, skills, or resources to make a difference in the lives of children.' },
  { id: 4, title: 'Summer Camp', date: 'July 10, 2025', image: '/images/4.jpg', details: 'A fun-filled summer camp for the children with various outdoor activities, games, and learning sessions.' },
  { id: 5, title: 'School Supplies Drive', date: 'August 25, 2025', image: '/images/5.jpg', details: 'Join us in providing essential school supplies to our children to ensure they have the tools they need for a successful year.' },
  { id: 6, title: 'Annual Picnic', date: 'May 20, 2025', image: '/images/6.jpg', details: 'A day of fun and relaxation in the park, with games, food, and bonding time for our children and staff.' },
  { id: 7, title: 'Back to School Bash', date: 'September 1, 2025', image: '/images/7.jpg', details: 'A fun back-to-school event with games, activities, and a celebration for the new school year.' },
  { id: 8, title: 'Winter Wonderland', date: 'December 10, 2025', image: '/images/8.jpg', details: 'A magical winter celebration with holiday treats, crafts, and a visit from Santa Claus!' },
  { id: 9, title: 'Talent Show', date: 'January 15, 2026', image: '/images/9.jpg', details: 'A fun talent show where our children will showcase their skills and talents. Get ready to be amazed!' },
  { id: 10, title: 'Healthy Eating Workshop', date: 'April 22, 2025', image: '/images/10.jpg', details: 'A workshop for children to learn about healthy eating habits and how to make nutritious meals.' },
  { id: 11, title: 'Holiday Movie Night', date: 'November 30, 2025', image: '/images/11.jpg', details: 'Join us for a cozy holiday movie night with snacks, blankets, and classic holiday films.' },
  { id: 12, title: 'Spring Fling', date: 'March 15, 2025', image: '/images/12.jpg', details: 'Celebrate the start of spring with outdoor games, a picnic, and a day of fun with the children.' },
  { id: 13, title: 'Art & Craft Workshop', date: 'June 5, 2025', image: '/images/13.jpg', details: 'Children explore creativity with painting, drawing, and crafting fun projects!' },
  { id: 14, title: 'Science Fair', date: 'July 25, 2025', image: '/images/14.jpg', details: 'Our budding scientists display experiments and projects in this exciting fair.' },
  { id: 15, title: 'Music & Dance Evening', date: 'August 15, 2025', image: '/images/15.jpg', details: 'An evening of performances showcasing singing, dancing, and musical talents.' },
];

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null);

  const toggleEvent = (id) => {
    setActiveEvent((prev) => (prev === id ? null : id));
  };

  return (
    <section id="events" className="min-h-screen py-0 bg-gray-100 px-0 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Upcoming Events
      </h2>

      {/* Full width container for events, scrollable horizontally */}
      <div className="flex overflow-x-auto w-full h-full space-x-6 px-4 py-4">
        {/* Each event box will take 40% width and 100% height of the event page */}
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => toggleEvent(event.id)}
            className="flex-shrink-0 w-[40%] h-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <div className="flex items-center justify-between p-3">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <span className="text-gray-600 text-sm">{event.date}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeEvent === event.id ? 'h-auto' : 'h-48'}`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            {activeEvent === event.id && (
              <div className="p-3 text-sm text-gray-700">
                {event.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

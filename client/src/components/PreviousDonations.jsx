import React from 'react';

const PreviousDonations = () => {
  const donations = [
    {
      id: 1,
      donorName: 'John Doe',
      amount: 5000,
      message: 'Supporting the kids with love.',
      image: '/images/donation1.jpg',
    },
    {
      id: 2,
      donorName: 'Jane Smith',
      amount: 3500,
      message: 'May this bring smiles to your faces!',
      image: '/images/donation2.jpg',
    },
    {
      id: 3,
      donorName: 'M. Ali',
      amount: 7500,
      message: 'A little help can go a long way ❤️',
      image: '/images/donation3.jpg',
    },
    {
      id: 4,
      donorName: 'Sara Williams',
      amount: 12000,
      message: 'Wishing the children a bright future!',
      image: '/images/donation4.jpg',
    },
    {
      id: 5,
      donorName: 'Michael Jordan',
      amount: 9000,
      message: 'Happy to contribute to this wonderful cause.',
      image: '/images/donation5.jpg',
    },
    {
      id: 6,
      donorName: 'Olivia Brown',
      amount: 4500,
      message: 'Every little bit helps, let’s make a difference!',
      image: '/images/donation6.jpg',
    },
    {
      id: 7,
      donorName: 'David Lee',
      amount: 2500,
      message: 'Sending love and support to all the children.',
      image: '/images/donation7.jpg',
    },
    {
      id: 8,
      donorName: 'Emily Davis',
      amount: 8000,
      message: 'Together we can make the world a better place!',
      image: '/images/donation8.jpg',
    },
    {
      id: 9,
      donorName: 'Daniel Green',
      amount: 13000,
      message: 'Let’s help these kids build a brighter future.',
      image: '/images/donation9.jpg',
    },
    {
      id: 10,
      donorName: 'Sophia Taylor',
      amount: 7000,
      message: 'Best wishes for the children and your amazing work!',
      image: '/images/donation10.jpg',
    },
  ];

  return (
    <section
      id="previous-donations"
      className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-16"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        ❤️ Previous Donations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={donation.image}
              alt="Donation"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {donation.donorName}
              </h3>
              <p className="text-gray-600">Donated: Rs. {donation.amount}</p>
              <p className="italic text-sm text-gray-500 mt-2">
                "{donation.message}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousDonations;

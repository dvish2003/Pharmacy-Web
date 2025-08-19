import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeatureProducts() {
  const FeatureProducts = [
    {
      id: 1,
      name: "X+REME",
      description: "FLUORIDE TOOTHPASTE",
      image: "/fp/FetureMedi_1.jpeg",
      price: "$9.99"
    },
    {
      id: 2,
      name: "FIRST AID KIT",
      description: "First Aid Kit",
      image: "/fp/FetureMedi_2.jpeg",
      price: "$24.99"
    },
    {
      id: 3,
      name: "FACE MASK",
      description: "Protective Face Mask",
      image: "/fp/FetureMedi_3.jpeg",
      price: "$12.99"
    },
    {
      id: 4,
      name: "VITAMIN C SERUM",
      description: "Brightening Vitamin C Serum",
      image: "/fp/FetureMedi_4.jpeg",
      price: "$29.99"
    }
  ];

  return (
    <section className="px-4 py-8 md:px-8 lg:px-16 bg-gray-50">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        {/* left side topic */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Featured Products</h1>
        <Link 
          className="text-purple-700 hover:text-purple-900 font-medium transition-colors flex items-center"
          href="#"
        >
          View All Products
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FeatureProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative h-60 bg-gray-100">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                style={{objectFit: 'cover'}}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-purple-700 font-bold">{product.price}</span>
            
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </section>
  );
}
'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Article {
  id: number;
  heading: string;
  content: string;
  image: string;
}

export default function Articles() {
  const [article, setArticle] = useState<Article>({
    id: 1,
    heading: 'Nutrition Tips for Better Health',
    content: 'Learn about the importance of a balanced diet and how it can improve your overall health. Discover which nutrients are essential and how to incorporate them into your daily meals.',
    image: '/artical/artical_1.jpeg',
  });

  const articles: Article[] = [
    {
      id: 1,
      heading: 'Nutrition Tips for Better Health',
      content: 'Learn about the importance of a balanced diet and how it can improve your overall health. Discover which nutrients are essential and how to incorporate them into your daily meals.',
    image: '/artical/artical_1.jpeg',
    },
    {
      id: 2,
      heading: 'Exercise for Mental Health',
      content: 'Regular physical activity can help reduce anxiety and depression. Find out which exercises are most effective for mental wellbeing.',
    image: '/artical/artical_2.jpeg',
    },
    {
      id: 3,
      heading: 'Benefits of Daily Jogging',
      content: 'Discover how a daily jogging routine can improve cardiovascular health, boost mood, and increase overall fitness levels.',
    image: '/artical/artical_3.jpeg',
    },
    {
      id: 4,
      heading: 'Pharmacy Tips for Seniors',
      content: 'Essential medication management advice for older adults to ensure safe and effective use of prescriptions.',
      image: '/artical/artical_4.jpeg',
    }
  ];

  const handleArticleSelect = (selectedArticle: Article) => {
    setArticle(selectedArticle);
  };

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <div className='text-center mb-12'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='text-4xl font-bold mb-4 text-black'
        >
         Health Tips & Articles
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Stay informed with the latest health information and tips from our expert pharmacists
        </motion.p>
      </div>
      
      {/* Featured article card */}
      <motion.div 
        key={article.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-700 rounded-2xl shadow-lg overflow-hidden mb-12 lg:flex max-w-6xl mx-auto"
      >
        <div className="lg:w-1/2 relative h-64 lg:h-96">
          <Image
            src={article.image}
            alt={article.heading}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">{article.heading}</h2>
          <p className="text-white mb-6 text-lg">{article.content}</p>
          <button className="self-start bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Read Full Article
          </button>
        </div>
      </motion.div>

      {/* Articles grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">More Health Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all ${article.id === art.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
              onClick={() => handleArticleSelect(art)}
            >
              <div className="relative h-48">
                <Image
                  src={art.image}
                  alt={art.heading}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 my-2 line-clamp-2">{art.heading}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{art.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
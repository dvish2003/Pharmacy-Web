'use client'
import React from 'react';
import Image from "next/image";
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Articles from '../article/page';
import FeatureProducts from '../featureProducts/page';
import Service from '../mediServices/page';

export default function Hero() {
  return (
 <>
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Left side - Content */}
        <motion.div
          className='md:w-1/2 space-y-6 order-1 md:order-none'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Your Health Is Our <span className='text-purple-700'>Priority</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600'>
            Get your medications delivered to your doorstep with our fast and reliable service
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button name='Order Now'/>
            <button className='w-full sm:w-auto px-6 py-3 border-1 border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition duration-300'>
              Refill Prescription
            </button>
          </div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          className='md:w-1/2 flex justify-center order-0 md:order-none'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/Adobe Express - file.png"
            alt='Medicine delivery'
            width={600}
            height={600}
            className='w-full max-w-md lg:max-w-lg'
            priority
          />
        </motion.div>
      </div>
      <br />
      
    </section>
     <Service />
          <FeatureProducts />
          <Articles />
          <Footer />
 </>
  );
}

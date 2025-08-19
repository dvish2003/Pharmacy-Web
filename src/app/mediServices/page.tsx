'use client'
import React from 'react';
import { Pill, Clock, Package, FileText, Stethoscope, Calendar } from "lucide-react";
import { motion } from 'framer-motion';

export default function Service() {
  const services = [
    { id: 1, 
      title: "Prescription Refills",
      icon: <Pill />, description: "Quick and easy prescription refills with automatic reminders" },
    { id: 2, 
      title: "24/7 Availability", 
      icon: <Clock />, 
      description: "Our pharmacists are available around the clock for your needs" },
    { id: 3, 
      title: "Home Delivery", 
      icon: <Package />, 
      description: "Get your medications delivered directly to your doorstep" },
    { id: 4, 
      title: "Health Records", 
      icon: <FileText />, 
      description: "Coming Soon" },
    { id: 5, 
      title: "Health Consultations", 
      icon: <Stethoscope />, 
      description: "Coming Soon" },
    { id: 6, 
      title: "Appointment Booking", 
      icon: <Calendar />, 
      description: "Coming Soon" },
  ];



  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <div className='text-center mb-8'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='text-4xl font-bold mb-4'
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='text-gray-600 text-lg max-w-2xl mx-auto'>
          We offer a range of pharmaceutical services to keep you healthy and make managing your medications easier.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className='border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col'>
            <div className='bg-purple-100 w-12 h-12 flex items-center justify-center text-purple-700 rounded-full mb-4'>
              {service.icon}
            </div>
            <h2 className='text-xl font-semibold mb-2'>{service.title}</h2>
            <p className='text-gray-600 flex-grow'>{service.description}</p>
          </motion.div>
        ))}
      </div>
      <br />
      <div className='text-center'>
          <br />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-800 transition-colors'
        >
          Get Started
        </motion.button>
      </div>
      <br />
            <br />



    </section>
  );
}

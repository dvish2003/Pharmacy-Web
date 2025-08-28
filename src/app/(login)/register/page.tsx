'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { user } from '@/models/user';
import axios from 'axios';


export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleValidation = (user: user) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
      console.error('Invalid email format');
      return false;
    }
    if (user.password.length < 6) {
      console.error('Password must be at least 6 characters long');
      return false;
    }
    if (user.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      const user: user = {
        user_id: '',
        name: formData.name,
        email: formData.email,
        password: formData.password,
        active: true,
        role: 'CUSTOMER',

      }
      const isValid = handleValidation(user);


      if (!isValid) {
        alert('Validation failed Please Enter valid details');
        return;
      }


      const res = await axios.post('/api/auth/register', {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        active: true,
        role: 'CUSTOMER'
      });



      if (res.status === 201) {
        alert('Registration successful!');
        setFormData({ email: '', name: '', password: '', confirmPassword: '' });
        window.location.href = '/login';
      }
      if (res.status === 400) {
        alert('User Already exist');
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-600">Join us and access exclusive features</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="terms" className="block ml-2 text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-4 py-3 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-center text-gray-500">
          <p>By registering, you agree to our Privacy Policy and Cookie Policy.</p>
        </div>
      </motion.div>
    </section>
  );
}
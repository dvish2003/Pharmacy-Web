'use client'
import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">MediCare</h3>
            <p className="text-sm max-w-xs">
              Your trusted partner in health and wellness, providing quality medications and healthcare solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Online Prescriptions</a></li>
              <li><a href="#" className="hover:text-white transition">Health Consultations</a></li>
              <li><a href="#" className="hover:text-white transition">Medicine Delivery</a></li>
              <li><a href="#" className="hover:text-white transition">Health Checkups</a></li>
              <li><a href="#" className="hover:text-white transition">Vaccinations</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Kalutara, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+94725038727" className="hover:text-white transition">072 503 8727</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:Vishanchathuranga2003@gmail.com" className="hover:text-white transition">Vishanchathuranga2003@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 flex items-center">
              © {new Date().getFullYear()} PharmaCare. Made with <Heart size={14} className="mx-1 text-red-500" /> in Sri Lanka
            </p>
            <div className="flex items-center space-x-6 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
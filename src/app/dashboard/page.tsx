'use client'
import React from 'react';
import { 
  Pill, 
  Calendar, 
  Clock,
  FileText,
  Heart,
  ShoppingBag,
  MapPin,
  CreditCard
} from 'lucide-react';

export default function CustomerDashboard() {
  // Sample data
  const currentPrescriptions = [
    { name: 'Amoxicillin 500mg', refills: 2, nextRefill: '2023-12-15' },
    { name: 'Metformin 850mg', refills: 5, nextRefill: '2023-12-20' },
    { name: 'Atorvastatin 20mg', refills: 1, nextRefill: '2023-12-10' }
  ];

  const upcomingAppointments = [
    { type: 'Medication Review', date: '2023-12-08', time: '10:00 AM' },
    { type: 'Flu Vaccination', date: '2023-12-15', time: '2:30 PM' }
  ];

  const recentOrders = [
    { id: '#ORD-4587', date: '2023-11-28', status: 'Delivered', amount: '$45.75' },
    { id: '#ORD-4586', date: '2023-11-25', status: 'Delivered', amount: '$89.50' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, Sarah!</h1>
        <p className="text-gray-600">Here is your health overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Pill size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Prescriptions</p>
            <p className="text-xl font-bold text-gray-800">3</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <Calendar size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Upcoming Appointments</p>
            <p className="text-xl font-bold text-gray-800">2</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg mr-4">
            <ShoppingBag size={24} className="text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Recent Orders</p>
            <p className="text-xl font-bold text-gray-800">2</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Prescriptions */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center mb-5">
            <Pill size={20} className="text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Current Prescriptions</h2>
          </div>
          <div className="space-y-4">
            {currentPrescriptions.map((prescription, index) => (
              <div key={index} className="p-3 border border-gray-100 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800">{prescription.name}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {prescription.refills} refills left
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={14} className="mr-1" />
                  Next refill: {prescription.nextRefill}
                </div>
                <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Request Refill
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
            View All Prescriptions
          </button>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center mb-5">
            <Calendar size={20} className="text-green-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h2>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="p-3 border border-gray-100 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-1">{appointment.type}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar size={14} className="mr-1" />
                  {appointment.date}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={14} className="mr-1" />
                  {appointment.time}
                </div>
                <div className="flex mt-3 space-x-2">
                  <button className="text-xs py-1 px-3 bg-green-100 text-green-800 rounded-full">
                    Confirm
                  </button>
                  <button className="text-xs py-1 px-3 bg-gray-100 text-gray-800 rounded-full">
                    Reschedule
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Schedule New Appointment
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
        <div className="flex items-center mb-5">
          <ShoppingBag size={20} className="text-purple-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-left text-sm text-gray-500">Order ID</th>
                <th className="pb-3 text-left text-sm text-gray-500">Date</th>
                <th className="pb-3 text-left text-sm text-gray-500">Status</th>
                <th className="pb-3 text-left text-sm text-gray-500">Amount</th>
                <th className="pb-3 text-left text-sm text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-0">
                  <td className="py-3 text-sm font-medium text-gray-800">{order.id}</td>
                  <td className="py-3 text-sm text-gray-600">{order.date}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-gray-800">{order.amount}</td>
                  <td className="py-3">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
          View Order History
        </button>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
            <div className="p-3 bg-blue-100 rounded-lg mb-2">
              <Pill size={24} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium text-center">Request Refill</span>
          </button>
          
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition">
            <div className="p-3 bg-green-100 rounded-lg mb-2">
              <Calendar size={24} className="text-green-600" />
            </div>
            <span className="text-sm font-medium text-center">Book Appointment</span>
          </button>
          
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition">
            <div className="p-3 bg-purple-100 rounded-lg mb-2">
              <FileText size={24} className="text-purple-600" />
            </div>
            <span className="text-sm font-medium text-center">Medical Records</span>
          </button>
          
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition">
            <div className="p-3 bg-red-100 rounded-lg mb-2">
              <Heart size={24} className="text-red-600" />
            </div>
            <span className="text-sm font-medium text-center">Health Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
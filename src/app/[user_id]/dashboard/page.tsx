'use client'
import React, { use } from 'react'
import Image from 'next/image'
interface DashboardProps {
  params: Promise<{ userId: string }>
}

function Dashboard({ params }: DashboardProps) {
  const { userId } = use(params);

  const products = [
    {
      id: 1,
      name: "Vitamin C Serum",
      category: "Skincare",
      price: 29.99,
      image: "/fp/FetureMedi_4.jpeg",
      description: "Brightening serum with antioxidant protection"
    },
    {
      id: 2,
      name: "Hyaluronic Acid Moisturizer",
      category: "Skincare",
      price: 24.99,
      image: "/fp/FetureMedi_4.jpeg",
      description: "Deep hydration for all skin types"
    },
    {
      id: 3,
      name: "Retinol Night Cream",
      category: "Skincare",
      price: 34.99,
      image: "/fp/FetureMedi_4.jpeg",
      description: "Anti-aging treatment for renewed skin"
    },
    {
      id: 4,
      name: "Niacinamide Serum",
      category: "Skincare",
      price: 27.99,
      image: "/fp/FetureMedi_4.jpeg",
      description: "Pore refining and oil control solution"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="p-6 mb-8 text-white shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
        <h2 className="mb-2 text-2xl font-bold">Welcome back, user : ${userId}</h2>
          <p className="opacity-90">We have new products that you might like. Check them out!</p>
        </div>

        {/* Products Section */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Our Products</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="mb-2 text-sm text-gray-500">{product.category}</p>
                    <p className="mb-3 text-sm text-gray-700">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-700">${product.price}</span>
                      <button 
                        className="px-3 py-1 text-sm text-white transition-colors bg-purple-600 rounded-md hover:bg-purple-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        

        {/* Orders Section
        {activeTab === 'orders' && (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Recent Orders</h2>
            <div className="overflow-hidden bg-white rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Order ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )} */}

        {/* Account Section
        {activeTab === 'account' && (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Account Information</h2>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 mr-4 bg-purple-600 rounded-full">
                  <span className="text-xl font-medium text-white">JS</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Jessica Smith</h3>
                  <p className="text-gray-600">jessica@example.com</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-900">Contact Information</h4>
                  <p className="text-gray-600">123 Main Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className="mb-2 font-medium text-gray-900">Account Details</h4>
                  <p className="text-gray-600">Member since: January 2023</p>
                  <p className="text-gray-600">Orders: 5</p>
                  <p className="text-gray-600">Loyalty points: 250</p>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </main>

    
    </div>
  )
}

export default Dashboard
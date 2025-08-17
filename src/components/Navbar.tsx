import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-white shadow'>
      <div className='flex justify-between items-center p-4'>
       
           <div>
            <h1 className='text-2xl font-bold text-[#470047]'>MediCare</h1>
        </div>
        
        <div>
            <ul className='flex space-x-4 text-[17px] font-semibold'>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">Products</Link>
                </li>
                 <li>
                    <Link href="#">Service</Link>
                </li>
                 <li>
                    <Link href="#">Prescription</Link>
                </li>
                <li>
                    <Link href="#">Contact</Link>
                </li>
            </ul>
        </div>
        <div>
           <ul className='flex space-x-4 text-[17px]'>
               <li className='bg-[#470047] rounded-md px-3 py-1 text-white'>
                   <Link href="#">Login</Link>
               </li>
               <li className='bg-[#470047] rounded-md px-3 py-1 text-white'>
                   <Link href="#">Register</Link>
               </li>
           </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

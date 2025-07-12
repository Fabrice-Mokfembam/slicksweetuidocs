'use client'

import { Button } from "slicksweetui"; 
import { Input } from "slicksweetui"; 

export const ComponentShowcase = () => {
  return (
    <section className='py-16 sm:py-24 lg:py-32 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4'>
          Explore Our Components
        </h2>
        <p className='text-lg text-gray-600 mb-12'>
          Get a quick glance at the versatile building blocks SlicksweetUI
          offers.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2  gap-12'>
          {/* Buttons Section */}
          <div className='bg-white p-8 rounded-lg shadow-md flex flex-col items-center'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2'>
              Buttons
            </h3>
            <div className='flex flex-col space-y-4 w-full max-w-xs'>
              <Button variant='normal' className="text-gray-600 bg-blue-500">Normal Button</Button>
              <Button variant='outline'>Outline Button</Button>
              <Button variant='ghost'>Ghost Button</Button>
            </div>
          </div>

          {/* Inputs Section */}
          <div className='bg-white p-8 rounded-lg shadow-md flex flex-col items-center'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2'>
              Input Fields
            </h3>
            <div className='flex flex-col space-y-4 w-full max-w-xs'>
              <Input type='text' placeholder='Enter your name' />
              <Input type='password' placeholder='Enter password' />
              <Input type='number' placeholder='Enter age' />
              <Input type='date' />
              <Input type='text' placeholder='Disabled field' disabled />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

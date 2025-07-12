"use client";

import Link from "next/link";
import { Search, Github, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white border-b border-gray-200 w-full fixed top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
        
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='text-2xl font-bold text-gray-900'>
              SlicksweetUI
            </Link>
          </div>

       
          <div className='hidden md:flex md:space-x-8'>
            <Link
              href='/documentation'
              className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Documentation
            </Link>
            <Link
              href='/components'
              className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Components
            </Link>
          </div>

        
          <div className='flex items-center space-x-4'>
            
            <div className='relative hidden sm:block'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </div>
              <input
                type='text'
                placeholder='Search documentation...'
                className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>

         
            <a
              href='https://github.com/your-github-repo'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-900 hidden sm:block'
            >
              <Github className='h-6 w-6' />
            </a>

            {/* Mobile menu button */}
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={toggleMenu}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out'
                aria-controls='mobile-menu'
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className='sr-only'>Open main menu</span>
                {isOpen ? (
                  <X className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Menu className='block h-6 w-6' aria-hidden='true' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div
        className={`md:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            href='/documentation'
            onClick={toggleMenu}
            className='block text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200'
          >
            Documentation
          </Link>
          <Link
            href='/components'
            onClick={toggleMenu}
            className='block text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200'
          >
            Components
          </Link>

          <div className='relative px-3 py-2'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </div>
            <input
              type='text'
              placeholder='Search documentation...'
              className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 sm:text-sm'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

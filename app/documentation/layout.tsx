"use client";

import Link from "next/link";
import { ChevronsRight, ChevronsLeft } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/Footer/Footer";

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {/* Mobile Sidebar Toggle */}
      <div className='md:hidden fixed top-16 left-0 right-0 z-30 bg-white border-b border-gray-200 p-4 flex justify-between items-center'>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className='p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none'
        >
          <span className='sr-only'>Open sidebar</span>
          {sidebarOpen ? (
            <ChevronsLeft className='h-6 w-6' />
          ) : (
            <ChevronsRight className='h-6 w-6' />
          )}
        </button>
      </div>

   
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transform fixed top-32 md:ml-10 md:top-26 left-0 z-20 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 ease-in-out`}
      >
        <div className='p-6'>
          <nav className='space-y-6'>
            <div>
              <h3 className='font-bold text-gray-900 mb-3 text-lg'>
                Getting Started
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/documentation/introduction'
                    className='text-gray-600 hover:text-blue-600 hover:underline text-sm'
                    onClick={() => setSidebarOpen(false)}
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href='/documentation/installation'
                    className='text-gray-600 hover:text-blue-600 hover:underline text-sm'
                    onClick={() => setSidebarOpen(false)}
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/documentation/usage'
                    className='text-gray-600 hover:text-blue-600 hover:underline text-sm'
                    onClick={() => setSidebarOpen(false)}
                  >
                    Usage
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold text-gray-900 mb-3 text-lg'>
                Components
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/documentation/button'
                    className='text-gray-600 hover:text-blue-600 hover:underline text-sm'
                    onClick={() => setSidebarOpen(false)}
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    href='/documentation/input'
                    className='text-gray-600 hover:text-blue-600 hover:underline text-sm'
                    onClick={() => setSidebarOpen(false)}
                  >
                    Input
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

   

      {/* Main Content Area - Scrollable */}
      <main className='flex-1 md:ml-64 mt-36 md:mt-32 p-4 md:pl-8 md:pt-8 overflow-x-hidden'>
        <div className='max-w-4xl mx-auto w-full mb-8'>{children}</div>
        <Footer/>
      </main>
    </div>
  );
}

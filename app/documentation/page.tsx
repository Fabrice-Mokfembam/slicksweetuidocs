"use client";

import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className='prose max-w-none'>
      <h1 className='text-3xl font-bold mb-6'>Welcome to SlicksweetUI</h1>
      <p className='text-lg text-gray-700 mb-8'>
        SlicksweetUI is a modern, lightweight, and highly customizable React
        component library designed to streamline your web development workflow.
        Built with a focus on developer experience and beautiful aesthetics,
        SlicksweetUI provides a collection of essential UI components that are
        easy to integrate and extend.
      </p>

      <h2 className='text-2xl font-bold mt-10 mb-4'>Why SlicksweetUI?</h2>
      <ul className='list-disc list-inside text-gray-700 space-y-2 mb-8'>
        <li>
          **Developer-Friendly:** Intuitive API and clear documentation make it
          a joy to work with.
        </li>
        <li>
          **Highly Customizable:** Easily override styles with Tailwind CSS or
          your own custom CSS.
        </li>
        <li>
          **Responsive by Design:** Components are built to look great on any
          screen size.
        </li>
        <li>
          **Lightweight & Performant:** Optimized for speed and efficiency,
          ensuring a smooth user experience.
        </li>
        <li>
          **Modern Aesthetics:** Clean, sleek designs that elevate your
          applications visual appeal.
        </li>
      </ul>

      <h2 className='text-2xl font-bold mt-10 mb-4'>What You will Find Here</h2>
      <p className='text-gray-700 mb-4'>
        This documentation serves as your comprehensive guide to SlicksweetUI.
        You will find:
      </p>
      <ul className='list-disc list-inside text-gray-700 space-y-2 mb-8'>
        <li>
          **Installation Guide:** Quick steps to get SlicksweetUI up and running
          in your project.
        </li>
        <li>
          **Component Reference:** Detailed information and examples for each
          component.
        </li>
        <li>
          **Usage Patterns:** Best practices and common use cases to help you
          build faster.
        </li>
      </ul>

      <p className='text-gray-700 mt-8'>
        Ready to get started? Head over to the{" "}
        <Link
          href='/documentation/installation'
          className='text-blue-600 hover:underline'
        >
          Installation
        </Link>{" "}
        section to begin your journey with SlicksweetUI!
      </p>
    </div>
  );
}

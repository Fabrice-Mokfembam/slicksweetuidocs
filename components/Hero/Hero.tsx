import Link from "next/link";

export const Hero = () => {
  return (
    <div className='bg-white h-screen flex items-center py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6'>
          Modern React Components for Rapid Development
        </h1>
        <p className='text-lg sm:text-xl text-gray-600 mb-10'>
          A collection of high-quality React components for building modern web
          applications
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            href='/documentation/introduction'
            className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Get Started
          </Link>
          <a
            href='https://github.com/Fabrice-Mokfembam/slicksweetui'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300'
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

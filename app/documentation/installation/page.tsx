"use client";

import { Copy } from "lucide-react"; 
import Link from "next/link";


function CopyButton({ content }: { content: string }) {
  return (
    <button
      className='absolute top-3 right-3 p-1 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors'
      onClick={() => {
        const textarea = document.createElement("textarea");
        textarea.value = content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Code copied to clipboard!"); 
      }}
      aria-label='Copy code to clipboard'
    >
      <Copy className='h-4 w-4' />
    </button>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md relative group'>
      <pre className='overflow-x-auto text-sm'>
        <code>{code}</code>
      </pre>
      <CopyButton content={code} />
    </div>
  );
}

export default function InstallationPage() {
  const npmInstallCode = `npm install slicksweetui`;
  const yarnAddCode = `yarn add slicksweetui`;
  const tailwindConfigCode = `// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/slicksweetui/**/*.{js,ts,jsx,tsx}', // Add this line for SlicksweetUI
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;
  const useClientNote = `// YourComponent.jsx (or .tsx)
'use client'; // Add this at the top for interactive components

import { Button } from 'slicksweetui';

export default function YourComponent() {
  return <Button>Click Me</Button>;
}`;

  return (
    <div className='prose max-w-none'>
      <h1 className='text-3xl font-bold mb-6'>Installation</h1>
      <p className='text-lg text-gray-700 mb-8'>
        Getting SlicksweetUI up and running in your project is straightforward.
        Follow the steps below to integrate the library.
      </p>

      <h2 className='text-2xl font-bold mt-10 mb-4'>1. Install SlicksweetUI</h2>
      <p className='text-gray-700 mb-4'>
        You can install SlicksweetUI using either npm or yarn:
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Using npm:</h3>
      <CodeBlock code={npmInstallCode} />

      <h3 className='text-xl font-bold mt-6 mb-3'>Using yarn:</h3>
      <CodeBlock code={yarnAddCode} />

      <h2 className='text-2xl font-bold mt-10 mb-4'>
        2. Configure Tailwind CSS (if applicable)
      </h2>
      <p className='text-gray-700 mb-4'>
        If you are using Tailwind CSS in your project, ensure that Tailwind can
        scan SlicksweetUIs components for classes. Update your
        `tailwind.config.js` file:
      </p>
      <CodeBlock code={tailwindConfigCode} />

      <h2 className='text-2xl font-bold mt-10 mb-4'>
        3. Client Components in Next.js App Router
      </h2>
      <p className='text-gray-700 mb-4'>
        If you are using Next.js App Router, remember that components from
        SlicksweetUI that require client-side interactivity (e.g., using
        `useState`, `useEffect`, or event handlers like `onClick`) must be
        rendered within a Client Component. SlicksweetUI components are already
        marked with use client internally, but if you create your own
        wrapper components around them, ensure those wrappers are also Client
        Components.
      </p>
      <CodeBlock code={useClientNote} />

      <p className='text-gray-700 mt-8'>
        You are now ready to start using SlicksweetUI components in your project!
        Proceed to the{" "}
        <Link
          href='/documentation/usage'
          className='text-blue-600 hover:underline'
        >
          Usage
        </Link>{" "}
        section to learn how to incorporate them into your application.
      </p>
    </div>
  );
}

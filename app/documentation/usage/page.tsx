"use client";

import { Button } from "slicksweetui"; 
import { Copy } from "lucide-react"; 


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

export default function UsagePage() {
  const basicButtonCode = `import { Button } from 'slicksweetui';

function MyComponent() {
  return (
    <Button onClick={() => console.log('Button clicked!')}>
      Hello SlicksweetUI
    </Button>
  );
}`;

  const customButtonCode = `import { Button } from 'slicksweetui';

function MyCustomComponent() {
  return (
    <Button 
      variant="outline" 
      className="text-green-600 border-green-600 hover:bg-green-50"
    >
      Custom Green Button
    </Button>
  );
}`;

  return (
    <div className='prose max-w-none'>
      <h1 className='text-3xl font-bold mb-6'>Basic Usage</h1>
      <p className='text-lg text-gray-700 mb-8'>
        Once SlicksweetUI is installed, you can start importing and using its
        components in your React or Next.js application. Each component is
        designed to be intuitive and highly customizable.
      </p>

      <h2 className='text-2xl font-bold mt-10 mb-4'>Importing Components</h2>
      <p className='text-gray-700 mb-4'>
        All components are named exports from the `slicksweetui` package. You
        can import them like this:
      </p>
      <CodeBlock code={`import { ComponentName } from 'slicksweetui';`} />

      <h2 className='text-2xl font-bold mt-10 mb-4'>Using Components</h2>
      <p className='text-gray-700 mb-4'>
        Components can be used directly in your JSX. Here is a basic example
        using the `Button` component:
      </p>
      <div className='bg-blue-50 border border-blue-200 p-6 rounded-md flex items-center justify-center gap-4 mb-6'>
        <Button onClick={() => alert("Usage example button clicked!")}>
          Hello SlicksweetUI
        </Button>
      </div>
      <CodeBlock code={basicButtonCode} />

      <h2 className='text-2xl font-bold mt-10 mb-4'>Customizing Components</h2>
      <p className='text-gray-700 mb-4'>
        SlicksweetUI components are built with Tailwind CSS, allowing for easy
        customization using the `className` prop. You can also leverage
        component-specific props like `variant` to change their appearance.
      </p>
      <div className='bg-blue-50 border border-blue-200 p-6 rounded-md flex items-center justify-center gap-4 mb-6'>
        <Button
          variant='outline'
          className='text-green-600 border-green-600 hover:bg-green-50'
        >
          Custom Green Button
        </Button>
      </div>
      <CodeBlock code={customButtonCode} />

      <p className='text-gray-700 mt-8'>
        For detailed information on each components props and specific
        examples, please refer to their individual documentation pages in the
        sidebar.
      </p>
    </div>
  );
}

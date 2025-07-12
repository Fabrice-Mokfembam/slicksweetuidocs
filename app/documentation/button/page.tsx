"use client";

import { Button } from "slicksweetui";
import { Copy } from "lucide-react";

export default function ButtonDocsPage() {
  const handleButtonClick = (variant: string) => {
    alert(`${variant} Button Clicked!`);
  };

  const codeImport = `import { Button } from 'slicksweetui';`;
  const codeDefault = `<Button 
  onClick={() => alert("Default Button Clicked!")} 
  className="bg-purple-600 hover:bg-purple-700 text-white">
  Default Button
</Button>`;
  const codeOutline = `<Button variant="outline" onClick={() => alert("Outline Button Clicked!")}>Outline Button</Button>`;
  const codeGhost = `<Button variant="ghost" onClick={() => alert("Ghost Button Clicked!")}>Ghost Button</Button>`;

  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold mb-3'>
          Button Component
        </h1>
        <p className='text-gray-700'>
          The Button component is a fundamental UI element that enables users to
          perform actions and make selections within your application.
        </p>
      </div>

      {/* Import Section */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-3'>Import</h2>
        <CodeBlock code={codeImport} />
      </section>

      {/* Variants Section */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>Variants</h2>
        <p className='text-gray-700 mb-4'>
          Buttons offer different visual styles using the `variant` prop:
          `default`, `outline`, and `ghost`.
        </p>

        {/* Default Button */}
        <div className='mb-8'>
          <h3 className='text-lg md:text-xl font-bold mb-3'>
            Default Variant (with custom `className`)
          </h3>
          <p className='text-gray-700 mb-3'>
            The default button, which can be easily customized with additional
            Tailwind CSS classes via the `className` prop.
          </p>
          <div className='bg-blue-50 border border-blue-200 p-4 rounded-md mb-4'>
            <div className='flex justify-center'>
              <Button
                onClick={() => handleButtonClick("Default")}
                className='bg-purple-600 hover:bg-purple-700 text-white'
              >
                Default Button
              </Button>
            </div>
          </div>
          <CodeBlock code={codeDefault} />
        </div>

        {/* Outline Button */}
        <div className='mb-8'>
          <h3 className='text-lg md:text-xl font-bold mb-3'>Outline Variant</h3>
          <div className='bg-blue-50 border border-blue-200 p-4 rounded-md mb-4'>
            <div className='flex justify-center'>
              <Button
                variant='outline'
                onClick={() => handleButtonClick("Outline")}
              >
                Outline Button
              </Button>
            </div>
          </div>
          <CodeBlock code={codeOutline} />
        </div>

        {/* Ghost Button */}
        <div className='mb-8'>
          <h3 className='text-lg md:text-xl font-bold mb-3'>Ghost Variant</h3>
          <div className='bg-blue-50 border border-blue-200 p-4 rounded-md mb-4'>
            <div className='flex justify-center'>
              <Button
                variant='ghost'
                onClick={() => handleButtonClick("Ghost")}
              >
                Ghost Button
              </Button>
            </div>
          </div>
          <CodeBlock code={codeGhost} />
        </div>
      </section>

      {/* Props Table */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>Props</h2>
        <div className='border border-gray-200 rounded-lg overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <TableHeader>Prop</TableHeader>
                  <TableHeader>Type</TableHeader>
                  <TableHeader>Default</TableHeader>
                  <TableHeader>Description</TableHeader>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <TableRow
                  prop='children'
                  type='React.ReactNode'
                  defaultValue='Required'
                  description='The content to be rendered inside the button.'
                />
                <TableRow
                  prop='onClick'
                  type='() => void'
                  defaultValue='undefined'
                  description='Callback function invoked when the button is clicked.'
                />
                <TableRow
                  prop='type'
                  type='button | submit | reset'
                  defaultValue='button'
                  description='The type attribute of the button.'
                />
                <TableRow
                  prop='className'
                  type='string'
                  defaultValue='undefined'
                  description='Additional CSS classes to apply to the button.'
                />
                <TableRow
                  prop='variant'
                  type='default | outline | ghost'
                  defaultValue='default'
                  description='The visual style of the button.'
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable components
function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
      {children}
    </th>
  );
}

function TableRow({
  prop,
  type,
  defaultValue,
  description,
}: {
  prop: string;
  type: string;
  defaultValue: string;
  description: string;
}) {
  return (
    <tr>
      <td className='px-4 py-3 text-sm font-medium text-gray-900'>{prop}</td>
      <td className='px-4 py-3 text-sm text-gray-600'>{type}</td>
      <td className='px-4 py-3 text-sm text-gray-600'>{defaultValue}</td>
      <td className='px-4 py-3 text-sm text-gray-600'>{description}</td>
    </tr>
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

function CopyButton({ content }: { content: string }) {
  return (
    <button
      className='absolute top-3 right-3 p-1 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors'
      onClick={() => navigator.clipboard.writeText(content)}
      aria-label='Copy code to clipboard'
    >
      <Copy className='h-4 w-4' />
    </button>
  );
}

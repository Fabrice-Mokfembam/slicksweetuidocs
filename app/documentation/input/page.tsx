"use client";

import { Input } from "slicksweetui";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function InputDocsPage() {
  const [textValue, setTextValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<string>("");
  const [dateValue, setDateValue] = useState<string>("");

  const codeImport = `import { Input } from 'slicksweetui';`;
  const codeBasic = `<Input 
  type="text" 
  placeholder="Enter your name" 
  value={value} 
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
/>`;
  const codePassword = `<Input 
  type="password" 
  placeholder="Enter password"
  value={password}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
/>`;
  const codeDisabled = `<Input 
  type="text" 
  placeholder="Disabled input" 
  disabled 
/>`;

  // Typed event handlers
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold mb-3'>Input Component</h1>
        <p className='text-gray-700'>
          A flexible input component that supports various types including text,
          password, number, and date with built-in password visibility toggle.
        </p>
      </div>

      {/* Import Section */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-3'>Import</h2>
        <CodeBlock code={codeImport} />
      </section>

      {/* Basic Usage */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>Basic Usage</h2>
        <div className='bg-blue-50 border border-blue-200 p-4 rounded-md mb-4'>
          <div className='max-w-md mx-auto'>
            <Input
              type='text'
              placeholder='Enter your name'
              value={textValue}
              onChange={handleTextChange}
            />
          </div>
        </div>
        <CodeBlock code={codeBasic} />
      </section>

      {/* Password Input */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>Password Input</h2>
        <p className='text-gray-700 mb-3'>
          The password type includes a visibility toggle button.
        </p>
        <div className='bg-blue-50 border border-blue-200 p-4 rounded-md mb-4'>
          <div className='max-w-md mx-auto'>
            <Input
              type='password'
              placeholder='Enter password'
              value={passwordValue}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <CodeBlock code={codePassword} />
      </section>

      {/* Other Types */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>
          Other Input Types
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <div className='bg-blue-50 border border-blue-200 p-4 rounded-md'>
            <h3 className='font-medium mb-2'>Number Input</h3>
            <Input
              type='number'
              placeholder='Enter a number'
              value={numberValue}
              onChange={handleNumberChange}
            />
          </div>
          <div className='bg-blue-50 border border-blue-200 p-4 rounded-md'>
            <h3 className='font-medium mb-2'>Date Input</h3>
            <Input type='date' value={dateValue} onChange={handleDateChange} />
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className='mb-8'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>Disabled State</h2>
        <div className='bg-blue-50 border border-blue-200 p-4 rounded-md mb-4'>
          <div className='max-w-md mx-auto'>
            <Input type='text' placeholder='Disabled input' disabled />
          </div>
        </div>
        <CodeBlock code={codeDisabled} />
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
                  prop='type'
                  type='"text" | "number" | "date" | "password"'
                  defaultValue='text'
                  description='The type of input field'
                />
                <TableRow
                  prop='placeholder'
                  type='string'
                  defaultValue='""'
                  description='Placeholder text'
                />
                <TableRow
                  prop='value'
                  type='string | number'
                  defaultValue='undefined'
                  description='Controlled value'
                />
                <TableRow
                  prop='onChange'
                  type='(e: React.ChangeEvent<HTMLInputElement>) => void'
                  defaultValue='undefined'
                  description='Change event handler'
                />
                <TableRow
                  prop='className'
                  type='string'
                  defaultValue='""'
                  description='Additional CSS classes'
                />
                <TableRow
                  prop='disabled'
                  type='boolean'
                  defaultValue='false'
                  description='Disables the input when true'
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable components remain the same...
// Reusable components (same as in your Button docs)
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

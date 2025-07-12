import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 mb-12">
         
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">About SlicksweetUI</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A modern React component library for building beautiful interfaces with ease.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/documentation" className="text-gray-600 hover:text-gray-900 text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/components" className="text-gray-600 hover:text-gray-900 text-sm">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-600 hover:text-gray-900 text-sm">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-600 hover:text-gray-900 text-sm">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/your-github-repo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/your-discord-invite" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-gray-600 hover:text-gray-900 text-sm">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-300 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SlicksweetUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
import Logo from './Logo'

export default function Footer() {
  const footerLinks = {
    'Company': [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Products', href: '#products' }
    ]
  }

  return (
    <footer className="bg-dark-900 border-t border-neon-pink/20">
      {/* Animated line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className="flex-1 max-w-2xl">
            <Logo className="h-10 mb-6" />
            <p className="text-gray-400 mb-6 max-w-md">
              Next-generation LED technology startup revolutionizing professional lighting solutions.
              Join us in illuminating the future with innovation, sustainability, and cutting-edge design.
            </p>

            {/* Contact Information */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">16 Stevensgate Dr, Ajax, ON L1T 4Z3</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15487886606" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">
                  +1 (548) 788-6606
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@moonlights.ca" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">
                  sales@moonlights.ca
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
            </div>
          </div>

          {/* Company Links - Aligned to the right */}
          <div className="text-right">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks['Company'].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-neon-pink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 moonlights. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import cmML1 from '../assets/CM_ML-1.webp'
import cmML4 from '../assets/CM_ML-4.webp'
import cmML6 from '../assets/CM_ML-6.webp'
import cmML7 from '../assets/CM_ML-7.webp'

export default function CommercialLights() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Commercial LED products data - professional showcase selection
  const commercialProducts = [
    {
      id: 1,
      name: "Professional RGB+White Strip",
      image: cmML1,
      description: "Premium RGB+White LED strip combining vibrant color and pure white light for versatile commercial applications.",
      features: ["RGB + White Combined", "High Color Accuracy", "Professional Grade", "Long Lifespan", "Modular Design"],
      specifications: {
        chipType: "5050RGB+2835W",
        powerConsumption: "14.4W/M",
        voltage: "24V DC",
        ipRating: "IP65",
        density: "60 LEDs/m",
        width: "15mm"
      },
      applications: ["Retail Displays", "Hospitality Lighting", "Architectural Accents", "Entertainment Venues"],
      color: "from-neon-purple to-neon-pink",
      itemCode: "moon-5050RGB-15"
    },
    {
      id: 2,
      name: "High-Density RGB Strip",
      image: cmML4,
      description: "Compact high-performance RGB LED strip designed for detailed lighting applications requiring precise color control.",
      features: ["Ultra-Compact Design", "High Color Saturation", "Energy Efficient", "Easy Integration", "Smooth Color Mixing"],
      specifications: {
        chipType: "2835RGB",
        powerConsumption: "9.6W/M",
        voltage: "24V DC",
        ipRating: "IP67",
        density: "120 LEDs/m",
        width: "10mm"
      },
      applications: ["Digital Signage", "Display Backlighting", "Cove Lighting", "Feature Walls"],
      color: "from-neon-blue to-neon-cyan",
      itemCode: "moon-2835RGB-10"
    },
    {
      id: 3,
      name: "Ultra-Bright RGB Strip",
      image: cmML6,
      description: "High-intensity RGB LED strip delivering exceptional brightness and color performance for demanding commercial environments.",
      features: ["Maximum Brightness", "Superior Heat Management", "Waterproof Design", "Color Consistency", "Professional Grade"],
      specifications: {
        chipType: "2835RGB",
        powerConsumption: "19.2W/M",
        voltage: "24V DC",
        ipRating: "IP68",
        density: "96 LEDs/m",
        width: "8mm"
      },
      applications: ["Outdoor Facades", "Stadium Lighting", "Large Displays", "Industrial Applications"],
      color: "from-neon-green to-neon-blue",
      itemCode: "moon-2835RGB-8"
    },
    {
      id: 4,
      name: "Commercial White Strip",
      image: cmML7,
      description: "High-efficiency pure white LED strip optimized for general commercial lighting with excellent color rendering.",
      features: ["Pure White Light", "High CRI >90", "Energy Efficient", "Consistent Output", "Long Life Rating"],
      specifications: {
        chipType: "2835W",
        powerConsumption: "9.6W/M",
        voltage: "24V DC",
        ipRating: "IP65",
        density: "120 LEDs/m",
        width: "10mm"
      },
      applications: ["Office Lighting", "Retail Spaces", "Task Lighting", "General Illumination"],
      color: "from-neon-cyan to-neon-purple",
      itemCode: "moon-2835W-10"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-20 w-1 h-96 bg-gradient-to-b from-neon-blue to-transparent opacity-60 animate-pulse"></div>
            <div className="absolute top-0 right-20 w-1 h-96 bg-gradient-to-b from-neon-cyan to-transparent opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-64 bg-gradient-to-t from-neon-blue to-transparent opacity-40 animate-pulse delay-500"></div>
            <div className="absolute bottom-0 right-1/4 w-1 h-64 bg-gradient-to-t from-neon-cyan to-transparent opacity-40 animate-pulse delay-1500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center text-neon-blue hover:text-neon-cyan transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan animate-glow">Commercial</span> LED Systems
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional-grade LED solutions designed for scalability, durability, and high-traffic commercial environments
              </p>

              <div className="flex justify-center space-x-4 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan mb-2">IP68</div>
                  <div className="text-gray-400 text-sm">Protection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Hours Lifespan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Gallery Section */}
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Product <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">Showcase</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore our professional-grade commercial LED lighting solutions designed for demanding business environments
              </p>
            </div>

            <div className="grid gap-12">
              {commercialProducts.map((product, index) => (
                <div key={product.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Product Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className={`aspect-video bg-gradient-to-br ${product.color} p-0.5 rounded-xl`}>
                      <div className="w-full h-full bg-dark-700 rounded-xl overflow-hidden flex items-center justify-center p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold mb-4 text-white">{product.name}</h3>
                    <p className="text-gray-400 mb-6 text-lg">{product.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3 text-white">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3 text-white">Specifications</h4>
                      <div className="p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Chip Type:</span>
                          <span className="text-white">{product.specifications.chipType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Power Consumption:</span>
                          <span className="text-white">{product.specifications.powerConsumption}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Voltage:</span>
                          <span className="text-white">{product.specifications.voltage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">IP Rating:</span>
                          <span className="text-white">{product.specifications.ipRating}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">LED Density:</span>
                          <span className="text-white">{product.specifications.density}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Width:</span>
                          <span className="text-white">{product.specifications.width}</span>
                        </div>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3 text-white">Perfect For</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className={`px-3 py-1 ${product.color} text-white text-sm`}>
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Item Code */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3 text-white">Item Code</h4>
                      <span className="inline-block px-4 py-2 bg-dark-600 text-neon-blue font-mono text-sm rounded-lg border border-neon-blue/30">
                        {product.itemCode}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">Specifications</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Detailed specifications for our commercial LED lighting solutions
              </p>
            </div>

            {/* Creative Table Design */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl border border-neon-blue/20 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-neon-blue to-neon-cyan p-1">
                <div className="bg-dark-800 rounded-t-xl">
                  <div className="grid grid-cols-6 gap-4 p-6 text-white font-bold">
                    <div className="text-center">ITEM CODE</div>
                    <div className="text-center">CHIP TYPE</div>
                    <div className="text-center">POWER</div>
                    <div className="text-center">VOLTAGE</div>
                    <div className="text-center">IP RATING</div>
                    <div className="text-center">WIDTH</div>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="space-y-2 p-6">
                {commercialProducts.map((product, index) => (
                  <div key={product.id} className="grid grid-cols-6 gap-4 p-4 bg-dark-700 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 hover:bg-dark-600 group">
                    <div className="text-center text-neon-blue font-mono text-sm group-hover:text-neon-cyan transition-colors">
                      {product.itemCode}
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.specifications.chipType}
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.specifications.powerConsumption}
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.specifications.voltage}
                    </div>
                    <div className="text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${product.specifications.ipRating === 'IP68' ? 'text-neon-green' :
                        product.specifications.ipRating === 'IP67' ? 'text-neon-blue' :
                          product.specifications.ipRating === 'IP65' ? 'text-neon-cyan' :
                            'text-neon-purple'
                        }`}>
                        {product.specifications.ipRating}
                      </span>
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.specifications.width}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">High Efficiency</h3>
                <p className="text-gray-400">
                  Advanced LED technology delivering superior lumens per watt for maximum energy savings
                </p>
              </div>

              <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Weather Protection</h3>
                <p className="text-gray-400">
                  IP65 to IP68 rated enclosures ensuring reliable operation in any environment
                </p>
              </div>

              <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Easy Installation</h3>
                <p className="text-gray-400">
                  Modular design with standardized connections for quick and reliable installations
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-pink/20">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">
                  Ready to Illuminate Your Commercial Space?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get professional consultation and custom solutions tailored to your commercial lighting needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/#contact"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/#products"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

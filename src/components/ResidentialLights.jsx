import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import rlML1 from '../assets/RL_ML-1.webp'
import rlML2 from '../assets/RL_ML-2.webp'
import rlML3 from '../assets/RL_ML-3.webp'

export default function ResidentialLights() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const residentialProducts = [
    {
      id: 1,
      name: "Home Lighting Strips",
      image: rlML1,
      description: "Motion-activated LED strips perfect for home perimeters, driveways, and walkways.",
      features: ["Motion Detection", "Weather Resistant IP65", "Energy Efficient", "Easy Installation", "Smart Controls"],
      specifications: {
        chipType: "2835 SMD",
        colorTemp: "3000K-6500K",
        ledDensity: "60LEDs/m",
        brightness: "1000 LM/m",
        pcbWidth: "10mm",
        protection: "IP65"
      },
      applications: ["Driveways", "Garden Paths", "Entrance Gates", "Perimeter Fencing"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      id: 2,
      name: "Garden Lighting",
      image: rlML2,
      description: "Decorative LED solutions for landscaping and outdoor entertainment areas.",
      features: ["Color Changing RGB", "App Control", "Timer Functions", "Weatherproof", "Low Voltage"],
      specifications: {
        chipType: "5050 RGB",
        colorTemp: "RGB + Warm White",
        ledDensity: "30LEDs/m",
        brightness: "750 LM/m",
        pcbWidth: "12mm",
        protection: "IP65"
      },
      applications: ["Garden Beds", "Patio Areas", "Pool Lighting", "Landscape Features"],
      color: "from-neon-green to-neon-blue"
    },
    {
      id: 3,
      name: "Pathway Safety Lights",
      image: rlML3,
      description: "Low-profile LED strips for safe navigation along walkways and stairs.",
      features: ["Low Profile Design", "Anti-Slip Surface", "Dusk-to-Dawn Sensor", "Long Life LED", "Solar Option"],
      specifications: {
        chipType: "3528 SMD",
        colorTemp: "4000K",
        ledDensity: "120LEDs/m",
        brightness: "600 LM/m",
        pcbWidth: "8mm",
        protection: "IP65"
      },
      applications: ["Walkways", "Stairs", "Deck Edges", "Entrance Steps"],
      color: "from-neon-cyan to-neon-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-20 w-1 h-96 bg-gradient-to-b from-neon-pink to-transparent opacity-60 animate-pulse"></div>
            <div className="absolute top-0 right-20 w-1 h-96 bg-gradient-to-b from-neon-purple to-transparent opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-64 bg-gradient-to-t from-neon-pink to-transparent opacity-40 animate-pulse delay-500"></div>
            <div className="absolute bottom-0 right-1/4 w-1 h-64 bg-gradient-to-t from-neon-purple to-transparent opacity-40 animate-pulse delay-1500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-glow">Residential</span> LED Solutions
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your home with intelligent LED lighting systems designed for safety, security, and style
              </p>

              <div className="flex justify-center space-x-4 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-2">Smart</div>
                  <div className="text-gray-400 text-sm">Controls</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple mb-2">IP65</div>
                  <div className="text-gray-400 text-sm">Weather Proof</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-2">Energy</div>
                  <div className="text-gray-400 text-sm">Efficient</div>
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
                Explore our comprehensive range of residential LED lighting solutions designed for home applications
              </p>
            </div>

            <div className="grid gap-12">
              {residentialProducts.map((product, index) => (
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
                          <span className="text-gray-400">Color Temperature:</span>
                          <span className="text-white">{product.specifications.colorTemp}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">LED Density:</span>
                          <span className="text-white">{product.specifications.ledDensity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Brightness:</span>
                          <span className="text-white">{product.specifications.brightness}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Protection:</span>
                          <span className="text-white">{product.specifications.protection}</span>
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
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-pink/20">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">
                  Ready to brighten your home?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Contact our team for a personalized consultation and transform your home with smart LED lighting.
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

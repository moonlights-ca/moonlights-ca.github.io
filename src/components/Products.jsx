import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cmSS1 from '../assets/CM_SS-1.webp'
import cmSS2 from '../assets/CM_SS-2.webp'
import cmSS3 from '../assets/CM_SS-3.webp'
import rlSS1 from '../assets/RL_SS-1.webp'
import rlSS2 from '../assets/RL_SS-2.webp'
import rlSS3 from '../assets/RL_SS-3.webp'

// Slideshow component for Commercial product images
function CommercialSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cmSS1, cmSS2, cmSS3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Commercial Light ${index + 1}`}
          loading="lazy"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
    </div>
  );
}

// Slideshow component for Residential product images
function ResidentialSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rlSS1, rlSS2, rlSS3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Residential Light ${index + 1}`}
          loading="lazy"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
    </div>
  );
}

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Residential Lights",
      description: "High-quality LED safety systems for modern homes and gated communities. Features weather resistance, motion detection, and energy efficiency.",
      image: "/api/placeholder/300/200",
      category: "Residential",
      features: ["Motion Sensors", "Weather Resistant", "Energy Efficient", "Easy Installation"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      id: 2,
      name: "Commercial Lights",
      description: "Professional-grade LED solutions for commercial spaces. Scalable, durable, and designed for high-traffic environments.",
      image: "/api/placeholder/300/200",
      category: "Commercial",
      features: ["Scalable System", "Durable Design", "Professional Grade", "24/7 Reliability"],
      color: "from-neon-blue to-neon-cyan"
    }
  ]

  return (
    <section id="products" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">LED Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional LED lighting systems built for reliability and efficiency.
            Designed for modern environments with focus on quality and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {products.map((product) => {
            const ProductCard = ({ children }) => {
              if (product.category === "Commercial") {
                return (
                  <Link
                    to="/commercial-lights"
                    className="group cursor-pointer block h-full"
                  >
                    {children}
                  </Link>
                );
              } else if (product.category === "Residential") {
                return (
                  <Link
                    to="/residential-lights"
                    className="group cursor-pointer block h-full"
                  >
                    {children}
                  </Link>
                );
              }
              return (
                <div className="group cursor-pointer h-full">
                  {children}
                </div>
              );
            };

            return (
              <ProductCard key={product.id}>
                <div className="bg-dark-700 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-pink/20 hover:scale-105 h-full flex flex-col">
                  {/* Product Image Placeholder */}
                  <div className={`aspect-video bg-gradient-to-br ${product.color} p-0.5`}>
                    <div className="w-full h-full bg-dark-800 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                      {product.category === "Residential" && (
                        <ResidentialSlideshow />
                      )}
                      {product.category === "Commercial" && (
                        <CommercialSlideshow />
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-neon-pink transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <span key={index} className="inline-block px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${product.color} text-white text-sm rounded-full font-medium`}>
                        {product.category}
                      </span>
                      {product.category === "Commercial" ? (
                        <span
                          className="text-neon-pink hover:text-neon-purple transition-colors text-sm font-medium"
                          onClick={(e) => e.preventDefault()} // Prevent double navigation since whole card is clickable
                        >
                          Learn More →
                        </span>
                      ) : product.category === "Residential" ? (
                        <span
                          className="text-neon-pink hover:text-neon-purple transition-colors text-sm font-medium"
                          onClick={(e) => e.preventDefault()} // Prevent double navigation since whole card is clickable
                        >
                          Learn More →
                        </span>
                      ) : (
                        <button className="text-neon-pink hover:text-neon-purple transition-colors text-sm font-medium">
                          Learn More →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ProductCard>
            );
          })}
        </div>

        {/* Custom Solutions Call-to-Action */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <Link
            to="/custom-moonlights"
            className="block group cursor-pointer"
          >
            <div className="bg-dark-700 rounded-2xl p-8  border border-gray-700 hover:scale-105 hover:border-neon-pink/50 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">
                Need Custom Specifications?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Create your perfect LED solution with our interactive specification builder and get instant quotes for custom configurations.
              </p>
              <div className="flex justify-center">
                <span className="btn-primary">
                  Build Custom Moonlights
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

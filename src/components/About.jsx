import { useState, useEffect } from 'react';
import blueStrip from '../assets/blue-strip.webp';
import greenStrip from '../assets/green-strip.webp';
import pinkStrip from '../assets/pink-strip.webp';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [blueStrip, greenStrip, pinkStrip];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">moonlights</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're a passionate team of innovators on a mission to revolutionize lighting technology and create smarter, safer environments for tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-32">
          {/* Our Story */}
          <div className="space-y-6 flex flex-col justify-start">
            <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Founded with a vision to transform how we think about lighting, moonlights is pioneering the next generation
                of LED systems. We believe that lighting should be more than just illumination—it should be reliable,
                efficient, and seamlessly integrated into our environments.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As a startup, we're not bound by traditional approaches. We're free to innovate, experiment, and push the
                boundaries of what's possible with LED technology. Our solutions combine cutting-edge engineering
                and sustainable design principles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6">
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-colors duration-300 flex flex-col justify-center min-h-[80px]">
                <div className="text-2xl font-bold text-neon-pink mb-1">100%</div>
                <div className="text-gray-400 text-sm">Bright</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-colors duration-300 flex flex-col justify-center min-h-[80px]">
                <div className="text-2xl font-bold text-neon-blue mb-1">Quality</div>
                <div className="text-gray-400 text-sm">Focused</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors duration-300 flex flex-col justify-center min-h-[80px]">
                <div className="text-2xl font-bold text-neon-green mb-1">90%</div>
                <div className="text-gray-400 text-sm">Energy Efficient</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-colors duration-300 flex flex-col justify-center min-h-[80px]">
                <div className="text-2xl font-bold text-neon-purple mb-1">∞</div>
                <div className="text-gray-400 text-sm">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="flex justify-center lg:justify-end items-start">
            <div
              className="w-full max-w-md aspect-square rounded-2xl border border-neon-blue/30 overflow-hidden relative cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={images[currentImageIndex]}
                alt={`LED Strip ${currentImageIndex + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 mt-16">
          <div className="text-center p-6 lg:p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 group flex flex-col h-full">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
            <p className="text-gray-400 leading-relaxed flex-grow">
              We challenge conventional thinking and embrace cutting-edge technologies to create revolutionary lighting solutions.
            </p>
          </div>

          <div className="text-center p-6 lg:p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 group flex flex-col h-full">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Sustainability</h3>
            <p className="text-gray-400 leading-relaxed flex-grow">
              Environmental responsibility drives our design process, creating energy-efficient solutions for a greener future.
            </p>
          </div>

          <div className="text-center p-6 lg:p-8 bg-dark-700 rounded-xl border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300 group flex flex-col h-full">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
            <p className="text-gray-400 leading-relaxed flex-grow">
              We work closely with our customers to understand their needs and create customized lighting solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7464998/pexels-photo-7464998.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-navy/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6 leading-tight">
              
              <span className="text-orange">Arun Packers </span>
              & Movers
              <span className="text-orange"> All Over India</span>
            </h1>
            
            <p className="text-xl text-white/90 font-lato mb-8 leading-relaxed">
              Making your relocation stress-free across India with our expert packing, secure transportation, 
              and professional moving services. From local moves to interstate relocations - trust us for a seamless moving experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToQuote}
                className="bg-orange text-white px-8 py-4 rounded-lg font-lato font-semibold text-lg hover:bg-orange/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </button>
              <a 
                href="tel:+919739913248"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-lato font-semibold text-lg hover:bg-white hover:text-navy transition-colors duration-200 text-center"
              >
                Call Now: +91 97399 13248
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 border border-white/30">
                  <Shield className="text-white" size={24} />
                </div>
                <p className="text-white font-lato font-medium">100% Safe</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 border border-white/30">
                  <Clock className="text-white" size={24} />
                </div>
                <p className="text-white font-lato font-medium">On-Time</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 border border-white/30">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-white font-lato font-medium">Expert Team</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg" 
                alt="Professional moving team with truck"
                className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
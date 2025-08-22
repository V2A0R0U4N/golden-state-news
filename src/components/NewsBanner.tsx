import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

const NewsBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('news-banner')?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    const banner = document.getElementById('news-banner');
    banner?.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      banner?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  // Easily changeable social media links
  const socialLinks = {
    facebook: "https://facebook.com/gujaratfocusnews",
    instagram: "https://instagram.com/gujaratfocusnews", 
    twitter: "https://twitter.com/gujaratfocusnews",
    youtube: "https://youtube.com/@gujaratfocusnews"
  };

  return (
    <section id="news-banner" className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/d5359617-1efa-4391-a8a0-a04fadb732ac.png" 
          alt="Gujarat Focus News Banner"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/60 via-transparent to-red-700/60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Enhanced Logo and Brand */}
          <div className="flex items-center gap-6">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-2xl">
              <img 
                src="/lovable-uploads/2a10624f-f8b7-4362-8bec-087f48ee4f32.png" 
                alt="Gujarat Focus News Logo" 
                className="h-16 w-auto drop-shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-md">
                GUJARAT FOCUS NEWS
              </h1>
              <p className="text-red-100 text-lg font-medium tracking-wider drop-shadow-sm">
                FAITH NEWS
              </p>
            </div>
          </div>

          {/* Center: 3D Interactive Microphone */}
          <div className="hidden lg:flex items-center gap-4">
            <div 
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-20 h-24 bg-gradient-to-b from-gray-200 to-gray-500 rounded-t-full border-4 border-white shadow-2xl relative">
                <div className="absolute inset-2 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-600 rounded-full"></div>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-5 bg-gray-400 border-2 border-white rounded shadow-lg"></div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-14 h-3 bg-gray-600 rounded-b shadow-lg"></div>
              </div>
            </div>
            <div className="text-white/90 text-lg font-bold drop-shadow-md animate-pulse">
              LIVE
            </div>
          </div>

          {/* Right: Enhanced Channel Info and Social */}
          <div className="text-center lg:text-right">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 drop-shadow-md">
              GUJARAT FOCUS NEWS CHANNEL
            </h2>
            <div className="flex items-center justify-center lg:justify-end gap-4 mb-4">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30 shadow-lg">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30 shadow-lg">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30 shadow-lg">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30 shadow-lg">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="text-red-100 text-lg font-medium drop-shadow-sm">
              /gujaratfocusnews
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom accent line */}
      <div className="h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-lg"></div>
    </section>
  );
};

export default NewsBanner;
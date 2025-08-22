import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import newsBannerImage from '@/assets/news-banner.jpg';

const NewsBanner = () => {
  // Easily changeable social media links
  const socialLinks = {
    facebook: "https://facebook.com/gujaratfocusnews",
    instagram: "https://instagram.com/gujaratfocusnews", 
    twitter: "https://twitter.com/gujaratfocusnews",
    youtube: "https://youtube.com/@gujaratfocusnews"
  };

  return (
    <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={newsBannerImage} 
          alt="Gujarat Focus News Banner"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 via-red-600/80 to-red-700/80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <img 
                src="/lovable-uploads/2a10624f-f8b7-4362-8bec-087f48ee4f32.png" 
                alt="Gujarat Focus News Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
                GUJARAT FOCUS NEWS
              </h1>
              <p className="text-red-100 text-sm font-medium tracking-wider">
                FAITH NEWS
              </p>
            </div>
          </div>

          {/* Center: Microphone Visual */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-600 rounded-t-full border-4 border-white shadow-lg">
                <div className="absolute inset-2 bg-gradient-to-b from-gray-800 to-black rounded-t-full">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="w-8 h-4 bg-gray-400 mx-auto border-2 border-white"></div>
              <div className="w-12 h-2 bg-gray-600 mx-auto rounded-b"></div>
            </div>
            <div className="text-white/80 text-sm font-medium">
              LIVE
            </div>
          </div>

          {/* Right: Channel Info and Social */}
          <div className="text-center lg:text-right">
            <h2 className="text-xl lg:text-2xl font-bold mb-2">
              GUJARAT FOCUS NEWS CHANNEL
            </h2>
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-red-100 text-sm">
              @gujaratfocusnews
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};

export default NewsBanner;
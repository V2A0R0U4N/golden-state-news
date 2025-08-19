import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const NewsBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
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
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
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
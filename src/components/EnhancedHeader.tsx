import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Sun, Moon, Laptop, Phone, Mail, MapPin, Send } from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { Link, useLocation } from 'react-router-dom';

const EnhancedHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Breaking News', href: '/breaking' },
    { name: 'Politics', href: '/category/politics' },
    { name: 'Business', href: '/category/business' },
    { name: 'Sports', href: '/category/sports' },
    { name: 'Entertainment', href: '/category/entertainment' },
    { name: 'Technology', href: '/category/technology' },
    { name: 'Events', href: '/events' },
    { name: 'Archives', href: '/archives' },
    { name: 'Contact', href: '#', action: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: Email functionality requires backend - user needs to connect to Supabase
    alert('Contact form submitted! (Note: Email functionality requires backend connection)');
    setContactForm({ name: '', email: '', message: '' });
    setIsContactOpen(false);
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="h-4 w-4" />;
    if (theme === 'dark') return <Moon className="h-4 w-4" />;
    return <Laptop className="h-4 w-4" />;
  };

  return (
    <>
      {/* Breaking News Ticker */}
      <div className="bg-breaking-news text-breaking-news-foreground">
        <div className="container mx-auto container-padding">
          <div className="flex items-center py-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mr-4 animate-pulse-glow">
              Breaking
            </span>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm font-medium">
                <span className="inline-block px-4">
                  Gujarat government announces new economic policy • CM inaugurates new infrastructure projects for state development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-lift">
              <img 
                src="/lovable-uploads/2a10624f-f8b7-4362-8bec-087f48ee4f32.png" 
                alt="Gujarat Focus News"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href || 
                  (item.href.includes('/category/') && location.pathname === item.href);
                
                if (item.action === 'contact') {
                  return (
                    <button
                      key={item.name}
                      onClick={() => setIsContactOpen(true)}
                      className="text-sm font-medium transition-colors hover:text-primary hover-glow ui-text text-foreground"
                    >
                      {item.name}
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary hover-glow ui-text ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="search-container">
                    <Input
                      type="text"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 pl-4 pr-10 bg-transparent border-0 focus:ring-0 ui-text"
                      autoFocus
                      onBlur={() => {
                        if (!searchQuery) setIsSearchOpen(false);
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="hover-lift"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={cycleTheme}
                className="theme-toggle"
                title={`Current theme: ${theme}`}
              >
                {getThemeIcon()}
              </Button>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="theme-toggle"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={cycleTheme}
                className="theme-toggle"
              >
                {getThemeIcon()}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <form onSubmit={handleSearchSubmit} className="search-container">
                <Input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full ui-text"
                />
              </form>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border animate-fade-in-up">
              <nav className="container-padding py-4 space-y-3">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                    (item.href.includes('/category/') && location.pathname === item.href);
                  
                  if (item.action === 'contact') {
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          setIsContactOpen(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-sm font-medium transition-colors hover:text-primary ui-text text-foreground"
                      >
                        {item.name}
                      </button>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block text-sm font-medium transition-colors hover:text-primary ui-text ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsContactOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 79 2658 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@gujaratfocus.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">123, Press Complex, Ashram Road, Ahmedabad</span>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-border rounded-md resize-none h-24"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                required
              />
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedHeader;
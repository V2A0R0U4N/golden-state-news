import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Search, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'હોમ', href: '#', active: true },
    { name: 'રાજકારણ', href: '#' },
    { name: 'બિઝનેસ', href: '#' },
    { name: 'સ્પોર્ટ્સ', href: '#' },
    { name: 'સંસ્કૃતિ', href: '#' },
    { name: 'ઇવેન્ટ્સ', href: '#' },
    { name: 'સ્થાનિક', href: '#' },
  ];

  return (
    <>
      {/* Breaking News Ticker */}
      <div className="bg-breaking-news text-breaking-news-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mr-4 animate-pulse">
              Breaking
            </span>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm font-medium">
                <span className="inline-block px-4">
                  ગુજરાત સરકારે નવી શિક્ષણ નીતિની જાહેરાત કરી • મુખ્યમંત્રીએ રાજ્યના વિકાસ માટે નવા પ્રોજેક્ટ્સની શરૂઆત કરી
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GF</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Gujarat Focus</h1>
                <p className="text-xs text-muted-foreground -mt-1">News</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.active
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary-hover">
                Subscribe
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    item.active ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex space-x-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="default" size="sm" className="flex-1 bg-primary hover:bg-primary-hover">
                  Subscribe
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'હોમ', href: '#' },
    { name: 'રાજકારણ', href: '#' },
    { name: 'બિઝનેસ', href: '#' },
    { name: 'સ્પોર્ટ્સ', href: '#' },
    { name: 'સંસ્કૃતિ', href: '#' },
    { name: 'ઇવેન્ટ્સ', href: '#' }
  ];

  const categories = [
    { name: 'Breaking News', href: '#' },
    { name: 'અમદાવાદ', href: '#' },
    { name: 'સુરત', href: '#' },
    { name: 'વડોદરા', href: '#' },
    { name: 'રાજકોટ', href: '#' },
    { name: 'જામનગર', href: '#' }
  ];

  const policies = [
    { name: 'About Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Advertise', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              દરરોજ સવારે તાજા સમાચાર મેળવો
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              ગુજરાતના તાજેતરના સમાચાર અને અપડેટ્સ સીધા તમારા ઇનબોક્સમાં
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email"
                placeholder="તમારું ઇમેઇલ એડ્રેસ"
                className="flex-1 bg-white text-black"
              />
              <Button variant="secondary" className="bg-secondary hover:bg-secondary-hover">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GF</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Gujarat Focus</h3>
                  <p className="text-sm text-muted-foreground">News</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ગુજરાતના તાજેતરના સમાચાર, રાજકારણ, બિઝનેસ, સ્પોર્ટ્સ અને સંસ્કૃતિની વિશ્વસનીય માહિતી.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-lg mb-6">Categories</h4>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a 
                      href={category.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">સંપર્ક</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      123, Press Complex,<br />
                      Ashram Road, Ahmedabad<br />
                      Gujarat, India - 380009
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">+91 79 2658 1234</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">info@gujaratfocus.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Gujarat Focus News. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {policies.map((policy) => (
                <a 
                  key={policy.name}
                  href={policy.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedNews from '@/components/FeaturedNews';
import CategorySection, { politicsStories, businessStories, sportsStories } from '@/components/CategorySection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calendar, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <Header />

      {/* Hero Section with Breaking News Carousel */}
      <HeroSection />

      {/* Featured News Section */}
      <FeaturedNews />

      {/* Quick Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">50K+</h3>
              <p className="text-muted-foreground">દૈનિક વાચકો</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
              <p className="text-muted-foreground">માસિક ઇવેન્ટ્સ</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">લાઇવ અપડેટ્સ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Politics Section */}
      <CategorySection
        title="રાજકારણ"
        stories={politicsStories}
        viewAllLink="/politics"
      />

      {/* Business Section */}
      <section className="bg-muted/30">
        <CategorySection
          title="બિઝનેસ"
          stories={businessStories}
          viewAllLink="/business"
        />
      </section>

      {/* Events Section */}
      <EventsSection />

      {/* Sports Section */}
      <CategorySection
        title="સ્પોર્ટ્સ"
        stories={sportsStories}
        viewAllLink="/sports"
      />

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ગુજરાતના તાજા સમાચાર મેળવવા જોડાઓ
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            દરરોજ સવારે તાજેતરના સમાચાર, ઇવેન્ટ અપડેટ્સ અને વિશેષ કવરેજ સીધા તમારા ફોનમાં મેળવો
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary-hover">
              મોબાઇલ એપ ડાઉનલોડ કરો
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              WhatsApp પર જોડાઓ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

import EnhancedHeader from '@/components/EnhancedHeader';
import NewsBanner from '@/components/NewsBanner';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import EventsSection from '@/components/EventsSection';
import YouMayHaveMissed from '@/components/YouMayHaveMissed';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Main breaking news data
  const heroStory = {
    id: 1,
    title: "ગુજરાત સરકારે જાહેર કર્યું ૫૦૦ કરોડનું વિકાસ પેકેજ",
    excerpt: "રાજ્યના સર્વાંગીણ વિકાસ માટે મુખ્યમંત્રીએ મોટા પાયાના વિકાસ કાર્યોની જાહેરાત કરી છે જેમાં શિક્ષણ, આરોગ્ય, અને ઇન્ફ્રાસ્ટ્રક્ચર સુધારણાનો સમાવેશ થાય છે.",
    image: "https://images.unsplash.com/photo-1586285851904-f2d2d59eeab2?w=1200&h=800&fit=crop",
    category: "Breaking News",
    categoryColor: "red-600",
    author: "Rajesh Patel",
    time: "1 hour ago"
  };

  // Top news stories
  const topStories = [
    {
      id: 2,
      title: "સુરતમાં ડાયમંડ ઇન્ડસ્ટ્રીમાં નવી ટેકનોલોજીનો ઉપયોગ",
      excerpt: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ અને મશીન લર્નિંગ દ્વારા ડાયમંડ કટિંગમાં ક્રાંતિકારી બદલાવ.",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop",
      category: "Business",
      categoryColor: "amber-600",
      author: "Mehta Sahib",
      time: "2 hours ago"
    },
    {
      id: 3,
      title: "અમદાવાદમાં મેટ્રો રેલ પ્રોજેક્ટના બીજા તબક્કાની શરૂઆત",
      excerpt: "શહેરી પરિવહન વ્યવસ્થામાં સુધારો લાવવા માટે મેટ્રોની નવી લાઇન શરૂ કરવાની તૈયારી.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      category: "Development",
      categoryColor: "blue-600",
      author: "Priya Shah",
      time: "3 hours ago"
    },
    {
      id: 4,
      title: "ગુજરાતી ક્રિકેટ ટીમે રણજી ટ્રોફીમાં લગાવી જીતની હેટ્રિક",
      excerpt: "મજબૂત પ્રદર્શન સાથે ગુજરાતી ક્રિકેટ ટીમે સતત ત્રીજી જીત મેળવીને ટોપ પર પહોંચવાનું લક્ષ્ય.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop",
      category: "Sports",
      categoryColor: "green-600",
      author: "Kiran Modi",
      time: "4 hours ago"
    },
    {
      id: 5,
      title: "રાજકોટમાં નવી ટેક્નોલોજી પાર્કનું ઉદ્ઘાટન",
      excerpt: "IT કંપનીઓ માટે વિશ્વમાનના ઇન્ફ્રાસ્ટ્રક્ચર સાથે આધુનિક ટેકનોલોજી પાર્કનો પ્રારંભ.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "Technology",
      categoryColor: "blue-500",
      author: "Amit Joshi",
      time: "5 hours ago"
    }
  ];

  // Latest news grid
  const latestNews = [
    {
      id: 6,
      title: "વડોદરામાં ઐતિહાસિક બારોડા મ્યુઝિયમનું નવીનીકરણ",
      excerpt: "પુરાતત્ત્વ વિભાગ દ્વારા મ્યુઝિયમમાં આધુનિક સુવિધાઓ અને ડિજિટલ ડિસ્પ્લેનો ઉમેરો.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "Culture",
      categoryColor: "purple-600",
      author: "Nisha Prajapati",
      time: "6 hours ago"
    },
    {
      id: 7,
      title: "ગુજરાતમાં સોલાર એનર્જી પ્રોજેક્ટનું વિસ્તરણ",
      excerpt: "પર્યાવરણ રક્ષણ અને ઉર્જા સુરક્ષા માટે નવેનવા સોલાર પાર્કનું નિર્માણ કાર્ય.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      category: "Environment",
      categoryColor: "emerald-600",
      author: "Dr. Hitesh Pandya",
      time: "8 hours ago"
    },
    {
      id: 8,
      title: "ગાંધીનગરમાં આંતરરાષ્ટ્રીય કન્વેન્શન સેન્ટરનો વિકાસ",
      excerpt: "વિશ્વ સ્તરના કાર્યક્રમો આયોજિત કરવા માટે આધુનિક સુવિધાઓ સાથે કન્વેન્શન સેન્ટર.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      category: "Infrastructure",
      categoryColor: "slate-600",
      author: "Rakesh Vaghela",
      time: "10 hours ago"
    },
    {
      id: 9,
      title: "ભાવનગરમાં નવું મેરીન એન્જિનિયરિંગ કોલેજ",
      excerpt: "દરિયાઇ વેપાર અને શિપિંગ ઇન્ડસ્ટ્રી માટે વિશેષજ્ઞ એન્જિનિયરો તૈયાર કરવાનો હેતુ.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      category: "Education",
      categoryColor: "indigo-600",
      author: "Prof. Geeta Trivedi",
      time: "12 hours ago"
    },
    {
      id: 10,
      title: "જામનગરમાં રિન્યુએબલ એનર્જી રિસર્ચ સેન્ટર",
      excerpt: "સ્વચ્છ ઉર્જા ક્ષેત્રે સંશોધન અને વિકાસ માટે અત્યાધુનિક સંશોધન કેન્દ્રની સ્થાપના.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "Research",
      categoryColor: "cyan-600",
      author: "Dr. Vikram Soni",
      time: "14 hours ago"
    },
    {
      id: 11,
      title: "નડિયાદમાં ઓર્ગેનિક ફાર્મિંગ પ્રમોશન કેન્ટર",
      excerpt: "જૈવિક ખેતી અને ટકાઉ કૃષિ વિકાસ માટે કિસાનોને તાલીમ અને સહાયતા કેન્દ્ર.",
      image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1dff?w=600&h=400&fit=crop",
      category: "Agriculture",
      categoryColor: "lime-600",
      author: "Jagdish Chaudhary",
      time: "16 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />
      <NewsBanner />

      {/* Hero Breaking News Section */}
      <section className="py-8 bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-950/20 dark:via-background dark:to-red-950/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase animate-pulse">
              Breaking News
            </span>
            <h2 className="text-2xl font-bold text-foreground">Latest Updates</h2>
          </div>
          
          <NewsCard {...heroStory} variant="featured" className="mb-8" />
        </div>
      </section>

      {/* Top Stories Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Top Stories</h2>
            <Link to="/breaking">
              <Button variant="outline" className="hover-lift">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {topStories.map((story) => (
              <NewsCard key={story.id} {...story} variant="horizontal" className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
            <Link to="/archives">
              <Button variant="outline" className="hover-lift">
                More News <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((story) => (
              <NewsCard key={story.id} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">50K+</h3>
              <p className="text-muted-foreground">Daily Readers</p>
            </div>
            <div className="text-center group hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
              <p className="text-muted-foreground">Monthly Events</p>
            </div>
            <div className="text-center group hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">Live Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
            <Link to="/events">
              <Button variant="outline" className="hover-lift">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <EventsSection />
        </div>
      </section>

      {/* You May Have Missed Section */}
      <YouMayHaveMissed />

      {/* Newsletter CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Gujarat Focus News
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest news, event updates, and special coverage delivered straight to your phone every morning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary-hover">
              Download Mobile App
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Join WhatsApp Updates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
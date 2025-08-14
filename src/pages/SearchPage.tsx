import { useState } from 'react';
import { Search, Filter, Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NewsCard from '@/components/NewsCard';
import { Link } from 'react-router-dom';
import politicsNews from '@/assets/politics-news.jpg';
import businessNews from '@/assets/business-news.jpg';
import sportsNews from '@/assets/sports-news.jpg';
import culturalEvent from '@/assets/cultural-event.jpg';
import heroNewsroom from '@/assets/hero-newsroom.jpg';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  // Sample search results data
  const searchResults = [
    {
      id: 1,
      title: "ગુજરાત સરકારે નવી ટેક્નોલોજી પોલિસીની જાહેરાત કરી",
      excerpt: "AI અને ડિજિટલ ઇન્ફ્રાસ્ટ્રક્ચર વિકાસ માટે મહત્વપૂર્ણ પગલાં લેવાશે. આ પોલિસીથી ટેક સેક્ટરમાં નવા રોજગારીની તકો ઉભી થશે.",
      image: businessNews,
      category: "Technology",
      categoryColor: "category-tech",
      author: "તેજસ મોદી",
      time: "2 કલાક પહેલાં",
      relevanceScore: 95
    },
    {
      id: 2,
      title: "અમદાવાદ મેટ્રો પ્રોજેક્ટ ફેઇઝ 2 શરૂ",
      excerpt: "શહેરની કનેક્ટિવિટી વધારવા માટે નવા રૂટ્સ અને સ્ટેશનોનું કામ શરૂ થયું છે.",
      image: heroNewsroom,
      category: "Infrastructure",
      categoryColor: "category-business",
      author: "અનિલ શાહ",
      time: "4 કલાક પહેલાં",
      relevanceScore: 88
    },
    {
      id: 3,
      title: "ગુજરાત યુનિવર્સિટીમાં નવા કોર્સ લોન્ચ",
      excerpt: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ અને ડેટા સાઇન્સમાં સ્પેશિયલાઇઝેશન કોર્સ શરૂ કરવામાં આવ્યા છે.",
      image: politicsNews,
      category: "Education",
      categoryColor: "category-culture",
      author: "પ્રિયા વર્મા",
      time: "6 કલાક પહેલાં",
      relevanceScore: 82
    },
    {
      id: 4,
      title: "રણઉત્સવમાં રેકોર્ડ પ્રવાસીઓનું આગમન",
      excerpt: "આ વર્ષે કચ્છના રણઉત્સવમાં 5 લાખથી વધુ પ્રવાસીઓએ ભાગ લીધો છે.",
      image: culturalEvent,
      category: "Tourism",
      categoryColor: "category-culture",
      author: "કિરણ જોશી",
      time: "8 કલાક પહેલાં",
      relevanceScore: 76
    },
    {
      id: 5,
      title: "ગુજરાત ફોર્ટુન જાયન્ટ્સ PKL માં ટોચ પર",
      excerpt: "પ્રો કબડ્ડી લીગમાં ગુજરાતની ટીમે સતત જીતથી લીડરબોર્ડ પર ટોચનું સ્થાન મેળવ્યું છે.",
      image: sportsNews,
      category: "Sports",
      categoryColor: "category-sports",
      author: "વિરાટ ઠાકુર",
      time: "10 કલાક પહેલાં",
      relevanceScore: 71
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'politics', label: 'Politics' },
    { value: 'business', label: 'Business' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'education', label: 'Education' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const trendingSearches = [
    "Gujarat budget 2024",
    "Ahmedabad metro",
    "Navratri 2024",
    "Gujarat elections",
    "Startup policy"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto container-padding section-padding">
        {/* Search Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Search News
          </h1>
          <p className="text-lg text-muted-foreground mb-8 ui-text">
            Find the latest news and stories from Gujarat Focus News
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="search-container p-2">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-muted-foreground ml-2" />
                <Input
                  type="text"
                  placeholder="Search for news, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent focus:ring-0 ui-text"
                />
                <Button type="submit" className="hover-lift">
                  Search
                </Button>
              </div>
            </div>
          </form>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm ui-text focus:ring-2 focus:ring-primary/20"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm ui-text focus:ring-2 focus:ring-primary/20"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Results */}
          <div className="lg:col-span-3">
            {searchQuery ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Search Results for "{searchQuery}"
                  </h2>
                  <span className="text-sm text-muted-foreground ui-text">
                    {searchResults.length} results found
                  </span>
                </div>

                <div className="space-y-6">
                  {searchResults.map((article, index) => (
                    <div 
                      key={article.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <NewsCard
                        title={article.title}
                        excerpt={article.excerpt}
                        image={article.image}
                        category={article.category}
                        categoryColor={article.categoryColor}
                        author={article.author}
                        time={article.time}
                        variant="horizontal"
                        className="hover-lift"
                      />
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="hover-lift ui-text">
                    Load More Results
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Start your search
                </h3>
                <p className="text-muted-foreground ui-text">
                  Enter keywords in the search box above to find relevant news articles
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Searches */}
            <div className="news-card-premium p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Trending Searches</h3>
              </div>
              <div className="space-y-2">
                {trendingSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(term)}
                    className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="news-card-premium p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link 
                  to="/archives" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Archives
                </Link>
                <Link 
                  to="/category/politics" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Politics
                </Link>
                <Link 
                  to="/category/business" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Business
                </Link>
                <Link 
                  to="/events" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
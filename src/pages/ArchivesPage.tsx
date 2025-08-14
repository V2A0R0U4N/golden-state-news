import { useState } from 'react';
import { Calendar, Filter, ArrowLeft, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/NewsCard';
import { Link } from 'react-router-dom';
import politicsNews from '@/assets/politics-news.jpg';
import businessNews from '@/assets/business-news.jpg';
import sportsNews from '@/assets/sports-news.jpg';
import culturalEvent from '@/assets/cultural-event.jpg';
import heroNewsroom from '@/assets/hero-newsroom.jpg';

const ArchivesPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(8); // August
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2024, 2023, 2022, 2021, 2020];
  
  const categories = [
    { value: 'all', label: 'All Categories', count: 156 },
    { value: 'politics', label: 'Politics', count: 45 },
    { value: 'business', label: 'Business', count: 38 },
    { value: 'sports', label: 'Sports', count: 29 },
    { value: 'entertainment', label: 'Entertainment', count: 24 },
    { value: 'technology', label: 'Technology', count: 20 }
  ];

  // Sample archive data
  const archiveArticles = [
    {
      id: 1,
      title: "ગુજરાત સરકારે ઇન્ફ્રાસ્ટ્રક્ચર ડેવલપમેન્ટ પ્લાન જાહેર કર્યો",
      excerpt: "રાજ્યના મુખ્યમંત્રીએ આગામી 5 વર્ષ માટે વિશાળ ઇન્ફ્રાસ્ટ્રક્ચર વિકાસ યોજનાની જાહેરાત કરી છે.",
      image: businessNews,
      category: "Politics",
      categoryColor: "category-politics",
      author: "સુરેશ ગુપ્તા",
      time: "August 10, 2024",
      views: 12500
    },
    {
      id: 2,
      title: "અમદાવાદ IT હબ તરીકે વિકસતું જાય છે",
      excerpt: "નવા IT કંપનીઓના આગમનથી અમદાવાદ ટેક્નોલોજી સેક્ટરમાં નવી ઊંચાઈઓ છૂવી રહ્યું છે.",
      image: heroNewsroom,
      category: "Business",
      categoryColor: "category-business",
      author: "અનિલ પટેલ",
      time: "August 8, 2024",
      views: 9800
    },
    {
      id: 3,
      title: "ગુજરાતી સંસ્કૃતિનું જશ્ન વિશ્વભરમાં",
      excerpt: "વિદેશોમાં રહેતા ગુજરાતીઓએ પરંપરાગત તહેવારો ઉજવીને સંસ્કૃતિને જીવંત રાખી છે.",
      image: culturalEvent,
      category: "Culture",
      categoryColor: "category-culture",
      author: "પ્રિયા મહેતા",
      time: "August 5, 2024",
      views: 8200
    },
    {
      id: 4,
      title: "ગુજરાત સ્પોર્ટ્સ એકેડેમીનું શુભારંભ",
      excerpt: "રાજ્યના યુવા ખેલાડીઓને વિશ્વ સ્તરીય તાલીમ આપવા માટે આધુનિક સુવિધાઓથી સજ્જ એકેડેમી.",
      image: sportsNews,
      category: "Sports",
      categoryColor: "category-sports",
      author: "રોહિત ખાન",
      time: "August 3, 2024",
      views: 7100
    },
    {
      id: 5,
      title: "ગુજરાતમાં રિન્યુએબલ એનર્જી પ્રોજેક્ટ",
      excerpt: "સોલાર અને વિન્ડ એનર્જી પ્રોજેક્ટથી ગુજરાત ગ્રીન એનર્જીમાં આગળ વધી રહ્યું છે.",
      image: politicsNews,
      category: "Environment",
      categoryColor: "category-business",
      author: "વિકાસ શર્મા",
      time: "August 1, 2024",
      views: 6500
    }
  ];

  const monthlyStats = [
    { month: 'August 2024', articles: 156, views: '2.3M', trending: 'Technology' },
    { month: 'July 2024', articles: 142, views: '2.1M', trending: 'Politics' },
    { month: 'June 2024', articles: 138, views: '1.9M', trending: 'Sports' },
    { month: 'May 2024', articles: 163, views: '2.5M', trending: 'Business' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto container-padding section-padding">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            News Archives
          </h1>
          <p className="text-lg text-muted-foreground mb-8 ui-text">
            Explore our comprehensive collection of past news stories and articles
          </p>

          {/* Archive Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm ui-text focus:ring-2 focus:ring-primary/20"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select 
                value={selectedMonth} 
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm ui-text focus:ring-2 focus:ring-primary/20"
              >
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm ui-text focus:ring-2 focus:ring-primary/20"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label} ({cat.count})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-2 text-sm ui-text transition-colors ${
                  viewMode === 'calendar' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
              >
                Calendar
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm ui-text transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Archive Content */}
          <div className="lg:col-span-3">
            {/* Current Selection Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {months[selectedMonth - 1]} {selectedYear}
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Archive Articles */}
            <div className="space-y-6">
              {archiveArticles.map((article, index) => (
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
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground ui-text">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {article.views.toLocaleString()} views
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Monthly Statistics */}
            <div className="news-card-premium p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Statistics</h3>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index} className="border-b border-border pb-3 last:border-b-0">
                    <div className="font-medium text-foreground ui-text">{stat.month}</div>
                    <div className="text-sm text-muted-foreground ui-text">
                      {stat.articles} articles • {stat.views} views
                    </div>
                    <div className="text-xs text-primary ui-text">
                      Trending: {stat.trending}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="news-card-premium p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.slice(1).map((category) => (
                  <div key={category.value} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground ui-text">
                      {category.label}
                    </span>
                    <span className="text-sm font-medium text-foreground ui-text">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="news-card-premium p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h3>
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Latest News
                </Link>
                <Link 
                  to="/search" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Search Archives
                </Link>
                <Link 
                  to="/category/politics" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Politics Archives
                </Link>
                <Link 
                  to="/events" 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors ui-text"
                >
                  Event History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivesPage;
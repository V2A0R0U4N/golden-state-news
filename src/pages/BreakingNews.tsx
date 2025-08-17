import EnhancedHeader from '@/components/EnhancedHeader';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';

const BreakingNews = () => {
  // Mock breaking news data
  const breakingNewsStories = [
    {
      id: 1,
      title: "ગુજરાત સરકારે જાહેર કર્યું નવું અર્થિક પેકેજ",
      excerpt: "ગુજરાતના વિકાસ માટે સરકારે ૫૦૦ કરોડનું ખાસ પેકેજ જાહેર કર્યું છે...",
      image: "https://images.unsplash.com/photo-1586285851904-f2d2d59eeab2?w=800&h=600&fit=crop",
      category: "Breaking",
      categoryColor: "red-600",
      author: "Rajesh Patel",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "સુરતમાં મોટો ઔદ્યોગિક પ્રોજેક્ટ શરૂ",
      excerpt: "વૈશ્વિક કંપની દ્વારા ૧૦૦ કરોડનું મોટું રોકાણ સુરત શહેરમાં...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      category: "Breaking", 
      categoryColor: "red-600",
      author: "Mehta Sahib",
      time: "4 hours ago"
    },
    {
      id: 3,
      title: "અમદાવાદમાં મેટ્રોની નવી લાઇન માટે મંજૂરી",
      excerpt: "બીજા તબક્કામાં મેટ્રો રેલ વિસ્તરણ માટે સરકારી મંજૂરી મળી...",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      category: "Breaking",
      categoryColor: "red-600", 
      author: "Priya Shah",
      time: "6 hours ago"
    },
    {
      id: 4,
      title: "ગુજરાતમાં આવતા વર્ષે નવા ૧૦૦ શાળા શરૂ થશે",
      excerpt: "શિક્ષણના ક્ષેત્રે મોટું પગલું ભરતાં સરકારે ગ્રામ્ય વિસ્તારમાં નવી શાળા શરૂ કરવાની જાહેરાત કરી...",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      category: "Breaking",
      categoryColor: "red-600",
      author: "Kiran Modi",
      time: "8 hours ago"
    },
    {
      id: 5,
      title: "વડોદરામાં IT હબ બનાવવાની યોજના",
      excerpt: "આધુનિક ટેકનોલોજી પાર્ક બનાવવાની મોટી યોજનાનો પ્રારંભ વડોદરામાં...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "Breaking",
      categoryColor: "red-600",
      author: "Amit Joshi",
      time: "12 hours ago"
    },
    {
      id: 6,
      title: "રાજકોટમાં વૈશ્વિક ઓટો એક્સ્પો આયોજન",
      excerpt: "આંતરરાષ્ટ્રીય કારિગરો અને કંપનીઓની ભાગીદારી સાથે મોટો આયોજન...",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop",
      category: "Breaking",
      categoryColor: "red-600",
      author: "Nisha Prajapati",
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Breaking News</h1>
          <p className="text-lg text-muted-foreground">Latest breaking news and urgent updates from Gujarat</p>
        </div>

        {/* Featured Breaking News */}
        <div className="mb-12">
          <NewsCard 
            {...breakingNewsStories[0]}
            variant="featured"
            className="mb-8"
          />
        </div>

        {/* Other Breaking News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breakingNewsStories.slice(1).map((story) => (
            <NewsCard key={story.id} {...story} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BreakingNews;

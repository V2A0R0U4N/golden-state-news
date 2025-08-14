import NewsCard from './NewsCard';
import politicsNews from '@/assets/politics-news.jpg';
import businessNews from '@/assets/business-news.jpg';
import sportsNews from '@/assets/sports-news.jpg';
import culturalEvent from '@/assets/cultural-event.jpg';
import heroNewsroom from '@/assets/hero-newsroom.jpg';

const FeaturedNews = () => {
  const featuredStories = [
    {
      id: 1,
      title: "ગુજરાત સરકારે નવી ટેક્નોલોજી પોલિસીની જાહેરાત કરી",
      excerpt: "AI અને ડિજિટલ ઇન્ફ્રાસ્ટ્રક્ચર વિકાસ માટે મહત્વપૂર્ણ પગલાં લેવાશે. આ પોલિસીથી ટેક સેક્ટરમાં નવા રોજગારીની તકો ઉભી થશે.",
      image: businessNews,
      category: "ટેક્નોલોજી",
      categoryColor: "category-business",
      author: "તેજસ મોદી",
      time: "1 કલાક પહેલાં"
    },
    {
      id: 2,
      title: "અમદાવાદ મેટ્રો પ્રોજેક્ટ ફેઇઝ 2 શરૂ",
      excerpt: "શહેરની કનેક્ટિવિટી વધારવા માટે નવા રૂટ્સ અને સ્ટેશનોનું કામ શરૂ થયું છે.",
      image: heroNewsroom,
      category: "ઇન્ફ્રા",
      categoryColor: "category-business",
      author: "અનિલ શાહ",
      time: "2 કલાક પહેલાં"
    },
    {
      id: 3,
      title: "ગુજરાત યુનિવર્સિટીમાં નવા કોર્સ લોન્ચ",
      excerpt: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ અને ડેટા સાઇન્સમાં સ્પેશિયલાઇઝેશન કોર્સ શરૂ કરવામાં આવ્યા છે.",
      image: politicsNews,
      category: "શિક્ષણ",
      categoryColor: "category-culture",
      author: "પ્રિયા વર્મા",
      time: "3 કલાક પહેલાં"
    },
    {
      id: 4,
      title: "રણઉત્સવમાં રેકોર્ડ પ્રવાસીઓનું આગમન",
      excerpt: "આ વર્ષે કચ્છના રણઉત્સવમાં 5 લાખથી વધુ પ્રવાસીઓએ ભાગ લીધો છે.",
      image: culturalEvent,
      category: "પ્રવાસન",
      categoryColor: "category-culture",
      author: "કિરણ જોશી",
      time: "4 કલાક પહેલાં"
    },
    {
      id: 5,
      title: "ગુજરાત ફોર્ટુન જાયન્ટ્સ PKL માં ટોચ પર",
      excerpt: "પ્રો કબડ્ડી લીગમાં ગુજરાતની ટીમે સતત જીતથી લીડરબોર્ડ પર ટોચનું સ્થાન મેળવ્યું છે.",
      image: sportsNews,
      category: "સ્પોર્ટ્સ",
      categoryColor: "category-sports",
      author: "વિરાટ ઠાકુર",
      time: "5 કલાક પહેલાં"
    }
  ];

  const sideStories = featuredStories.slice(1);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">આજના મુખ્ય સમાચાર</h2>
          <p className="text-lg text-muted-foreground">
            ગુજરાતના તાજેતરના અને મહત્વપૂર્ણ સમાચારોનો સંગ્રહ
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Story */}
          <div className="lg:col-span-2">
            <NewsCard
              title={featuredStories[0].title}
              excerpt={featuredStories[0].excerpt}
              image={featuredStories[0].image}
              category={featuredStories[0].category}
              categoryColor={featuredStories[0].categoryColor}
              author={featuredStories[0].author}
              time={featuredStories[0].time}
              variant="featured"
            />
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            {sideStories.map((story) => (
              <NewsCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
                category={story.category}
                categoryColor={story.categoryColor}
                author={story.author}
                time={story.time}
                variant="horizontal"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
import NewsCard from './NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import politicsNews from '@/assets/politics-news.jpg';
import businessNews from '@/assets/business-news.jpg';
import sportsNews from '@/assets/sports-news.jpg';
import culturalEvent from '@/assets/cultural-event.jpg';
import heroNewsroom from '@/assets/hero-newsroom.jpg';

const YouMayHaveMissed = () => {
  // Simulated data for missed news (would come from backend)
  const missedStories = [
    {
      id: 1,
      title: "ગુજરાત સરકારે આરોગ્ય ક્ષેત્રે મોટો બજેટ ફાળવ્યો",
      excerpt: "રાજ્યની હોસ્પિટલોમાં નવી સુવિધાઓ અને સાધનોની ખરીદી માટે ₹500 કરોડનું બજેટ ફાળવવામાં આવ્યું છે.",
      image: heroNewsroom,
      category: "આરોગ્ય",
      categoryColor: "category-business",
      author: "ડૉ. અનિલ મહેતા",
      time: "3 દિવસ પહેલાં",
      daysAgo: 3
    },
    {
      id: 2,
      title: "વાઘરી અને દહોદ જિલ્લામાં વરસાદી પાણીનો સંગ્રહ",
      excerpt: "મૌસમી વરસાદથી ડેમોમાં પાણીનું પ્રમાણ વધતાં ખેડૂતોમાં ખુશીનો માહોલ છે.",
      image: businessNews,
      category: "કૃષિ",
      categoryColor: "category-sports",
      author: "કિરણ પટેલ",
      time: "4 દિવસ પહેલાં",
      daysAgo: 4
    },
    {
      id: 3,
      title: "અમદાવાદની સાબરમતી ઋવરફ્રન્ટને નવો લુક",
      excerpt: "પર્યટકોના આકર્ષણ માટે રિવરફ્રન્ટ પર નવી સુવિધાઓ અને લાઇટિંગ સિસ્ટમ ઉમેરવામાં આવી છે.",
      image: culturalEvent,
      category: "પર્યટન",
      categoryColor: "category-culture",
      author: "મીરા શર્મા",
      time: "5 દિવસ પહેલાં",
      daysAgo: 5
    },
    {
      id: 4,
      title: "ગુજરાત યુનિવર્સિટીમાં ઇન્ટરનેશનલ સ્ટુડન્ટ્સનું વધતું પ્રમાણ",
      excerpt: "વિદેશી વિદ્યાર્થીઓ ગુજરાતમાં ઉચ્ચ શિક્ષણ લેવા વધુ રસ દેખાવી રહ્યા છે.",
      image: politicsNews,
      category: "શિક્ષણ",
      categoryColor: "category-politics",
      author: "પ્રિયા વર્મા",
      time: "6 દિવસ પહેલાં",
      daysAgo: 6
    },
    {
      id: 5,
      title: "ગુજરાતી ચિત્રકાર રાષ્ટ્રીય પુરસ્કાર જીત્યો",
      excerpt: "પરંપરાગત કલાને આધુનિક શૈલીમાં રજૂ કરનાર કલાકારને દિલ્હીમાં સન્માન આપવામાં આવ્યું.",
      image: sportsNews,
      category: "કલા",
      categoryColor: "category-entertainment",
      author: "અર્જુન દેસાઈ",
      time: "1 અઠવાડિયું પહેલાં",
      daysAgo: 7
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              You May Have Missed
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto ui-text">
            Important stories from the past week that you might have overlooked. Stay informed with Gujarat's most significant news.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {missedStories.map((story, index) => (
            <div 
              key={story.id} 
              className="animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <NewsCard
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
                category={story.category}
                categoryColor={story.categoryColor}
                author={story.author}
                time={story.time}
                variant="compact"
                className="h-full"
              />
              {/* Days ago indicator */}
              <div className="mt-2 text-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-accent text-accent-foreground ui-text">
                  {story.daysAgo} days ago
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover-lift ui-text"
          >
            View More Past Stories
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouMayHaveMissed;
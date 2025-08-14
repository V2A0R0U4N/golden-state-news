import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import NewsCard from './NewsCard';
import politicsNews from '@/assets/politics-news.jpg';
import businessNews from '@/assets/business-news.jpg';
import sportsNews from '@/assets/sports-news.jpg';
import culturalEvent from '@/assets/cultural-event.jpg';

interface CategorySectionProps {
  title: string;
  stories: Array<{
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    categoryColor: string;
    author: string;
    time: string;
  }>;
  viewAllLink?: string;
}

const CategorySection = ({ title, stories, viewAllLink }: CategorySectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          {viewAllLink && (
            <Button variant="outline" className="group">
              બધા જુઓ
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <NewsCard
              key={story.id}
              title={story.title}
              excerpt={story.excerpt}
              image={story.image}
              category={story.category}
              categoryColor={story.categoryColor}
              author={story.author}
              time={story.time}
              variant={index === 0 ? 'featured' : 'default'}
              className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample data for different categories
export const politicsStories = [
  {
    id: 1,
    title: "ગુજરાત વિધાનસભામાં નવા કાયદાની ચર્ચા",
    excerpt: "સરકારે શિક્ષણ ક્ષેત્રમાં સુધારા માટે નવું બિલ રજૂ કર્યું છે. વિપક્ષે આ બિલનો વિરોધ કર્યો છે.",
    image: politicsNews,
    category: "રાજકારણ",
    categoryColor: "category-politics",
    author: "સુરેશ ગુપ્તા",
    time: "3 કલાક પહેલાં"
  },
  {
    id: 2,
    title: "મુખ્યમંત્રીની વડાપ્રધાન સાથે મુલાકાત",
    excerpt: "ગુજરાતના વિકાસ અંગે મહત્વપૂર્ણ ચર્ચા થઈ છે.",
    image: businessNews,
    category: "રાજકારણ",
    categoryColor: "category-politics",
    author: "પ્રિતિ શાહ",
    time: "5 કલાક પહેલાં"
  },
  {
    id: 3,
    title: "સ્થાનિક સ્વરાજ્ય ચૂંટણીની તૈયારી",
    excerpt: "ચૂંટણી પંચે તૈયારીઓ શરૂ કરી દીધી છે.",
    image: sportsNews,
    category: "રાજકારણ",
    categoryColor: "category-politics",
    author: "રાજુ વર્મા",
    time: "7 કલાક પહેલાં"
  },
  {
    id: 4,
    title: "નવી ઔદ્યોગિક નીતિની જાહેરાત",
    excerpt: "રોજગારી સર્જનાને પ્રોત્સાહન આપવાની યોજના.",
    image: culturalEvent,
    category: "રાજકારણ",
    categoryColor: "category-politics",
    author: "અનિતા મહેતા",
    time: "9 કલાક પહેલાં"
  }
];

export const businessStories = [
  {
    id: 5,
    title: "ગુજરાતમાં નવા સ્ટાર્ટઅપ્સને પ્રોત્સાહન",
    excerpt: "સરકારે યુવાઓના સ્ટાર્ટઅપ્સ માટે વિશેષ ફંડની જાહેરાત કરી છે.",
    image: businessNews,
    category: "બિઝનેસ",
    categoryColor: "category-business",
    author: "મીતા પટેલ",
    time: "2 કલાક પહેલાં"
  },
  {
    id: 6,
    title: "અમદાવાદ સ્ટોક એક્સચેન્જમાં તેજી",
    excerpt: "આજે બજારમાં સારો ઉછાળો નોંધાયો છે.",
    image: politicsNews,
    category: "બિઝનેસ",
    categoryColor: "category-business",
    author: "અર્જુન દેસાઈ",
    time: "4 કલાક પહેલાં"
  },
  {
    id: 7,
    title: "ઇન્ફોસિસનું ગુજરાતમાં નવું કેન્દ્ર",
    excerpt: "હજારો IT જોબ્સ સર્જાશે.",
    image: sportsNews,
    category: "બિઝનેસ",
    categoryColor: "category-business",
    author: "વિકાસ શર્મા",
    time: "6 કલાક પહેલાં"
  },
  {
    id: 8,
    title: "એક્સપોર્ટમાં ગુજરાત આગળ",
    excerpt: "રાષ્ટ્રીય નિકાસમાં રાજ્યનો મહત્વપૂર્ણ ફાળો.",
    image: culturalEvent,
    category: "બિઝનેસ",
    categoryColor: "category-business",
    author: "નીલમ જોશી",
    time: "8 કલાક પહેલાં"
  }
];

export const sportsStories = [
  {
    id: 9,
    title: "ગુજરાત ટાઇટન્સ IPL ફાઇનલમાં",
    excerpt: "રોમાંચક મેચમાં ટીમે જીત મેળવી છે.",
    image: sportsNews,
    category: "સ્પોર્ટ્સ",
    categoryColor: "category-sports",
    author: "રોહિત ખાન",
    time: "1 કલાક પહેલાં"
  },
  {
    id: 10,
    title: "રાજકોટમાં નવું ક્રિકેટ સ્ટેડિયમ",
    excerpt: "વિશ્વ સ્તરની સુવિધાઓ સાથે સ્ટેડિયમ તૈયાર.",
    image: businessNews,
    category: "સ્પોર્ટ્સ",
    categoryColor: "category-sports",
    author: "સચિન ગુજરાતી",
    time: "3 કલાક પહેલાં"
  },
  {
    id: 11,
    title: "ખેલો ઇન્ડિયા યુથ ગેમ્સ",
    excerpt: "ગુજરાતના ખેલાડીઓએ સર્વાધિક મેડલ જીત્યા.",
    image: politicsNews,
    category: "સ્પોર્ટ્સ",
    categoryColor: "category-sports",
    author: "પ્રિયંકા શાહ",
    time: "5 કલાક પહેલાં"
  },
  {
    id: 12,
    title: "કબડ��ડી લીગમાં ગુજરાતની ટીમ",
    excerpt: "પરંપરાગત રમતને પ્રોત્સાહન મળી રહ્યું છે.",
    image: culturalEvent,
    category: "સ્પોર્ટ્સ",
    categoryColor: "category-sports",
    author: "અમિત ઠાકર",
    time: "7 કલાક પહેલાં"
  }
];

export default CategorySection;
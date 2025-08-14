import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import heroNewsroom from '@/assets/hero-newsroom.jpg';
import gujaratBanner from '@/assets/gujarat-banner.jpg';
import politicsNews from '@/assets/politics-news.jpg';
import culturalEvent from '@/assets/cultural-event.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroStories = [
    {
      id: 1,
      title: "ગુજરાત સરકારે નવી આર્થિક નીતિની જાહેરાત કરી",
      excerpt: "મુખ્યમંત્રીએ રાજ્યના ઔદ્યોગિક વિકાસ માટે મહત્વપૂર્ણ નિર્ણયોની જાહેરાત કરી છે. આ નીતિથી હજારો નવી નોકરીઓ સર્જાશે.",
      image: gujaratBanner,
      category: "રાજકારણ",
      categoryColor: "category-politics",
      author: "રાજેશ પટેલ",
      time: "2 કલાક પહેલાં",
      breaking: true
    },
    {
      id: 2,
      title: "અમદાવાદમાં મેગા ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ શરૂ",
      excerpt: "શહેરના વિકાસ માટે 500 કરોડ રૂપિયાની યોજનાને મંજૂરી મળી છે. આમાં મેટ્રો વિસ્તરણ અને સ્માર્ટ સિટી પ્રોજેક્ટ સામેલ છે.",
      image: heroNewsroom,
      category: "બિઝનેસ",
      categoryColor: "category-business",
      author: "પ્રિયા શર્મા",
      time: "4 કલાક પહેલાં"
    },
    {
      id: 3,
      title: "ગુજરાત ટાઇટન્સ IPL માં ફાઇનલ માટે ક્વોલિફાય",
      excerpt: "રોમાંચક મેચમાં ગુજરાત ટાઇટન્સે મુંબઈ ઇન્ડિયન્સને હરાવીને ફાઇનલનું ટિકિટ કાપ્યું છે.",
      image: politicsNews,
      category: "સ્પોર્ટ્સ",
      categoryColor: "category-sports",
      author: "અમિત દવે",
      time: "6 કલાક પહેલાં"
    },
    {
      id: 4,
      title: "નવરાત્રી ઉત્સવની તૈયારીઓ પૂર્ણ",
      excerpt: "અમદાવાદ અને સુરતમાં ભવ્ય નવરાત્રી ઉજવણીની તૈયારીઓ પૂર્ણ થઈ છે. લાખો ભક્તોના આગમનની અપેક્ષા છે.",
      image: culturalEvent,
      category: "સંસ્કૃતિ",
      categoryColor: "category-culture",
      author: "કિરણ મહેતા",
      time: "8 કલાક પહેલાં"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroStories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroStories.length) % heroStories.length);
  };

  const currentStory = heroStories[currentSlide];

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${currentStory.image})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Category & Breaking Badge */}
          <div className="flex items-center gap-3 mb-4">
            {currentStory.breaking && (
              <span className="breaking-badge category-badge">
                Breaking News
              </span>
            )}
            <span className={`category-badge bg-${currentStory.categoryColor} text-white`}>
              {currentStory.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {currentStory.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            {currentStory.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{currentStory.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{currentStory.time}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8"
          >
            વધુ વાંચો
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute inset-y-0 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-secondary w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import culturalEvent from '@/assets/cultural-event.jpg';
import politicsNews from '@/assets/politics-news.jpg';
import businessNews from '@/assets/business-news.jpg';
import sportsNews from '@/assets/sports-news.jpg';
interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  categoryColor: string;
  attendees: number;
  isPremium?: boolean;
}
const EventsSection = () => {
  const upcomingEvents: Event[] = [{
    id: 1,
    title: "ગુજરાત વિકાસ સમિટ 2024",
    description: "રાજ્યના ઔદ્યોગિક વિકાસ અને રોજગારી સર્જન અંગે મહત્વપૂર્ણ ચર્ચા",
    image: businessNews,
    date: "15 નવેમ્બર",
    time: "સવારે 10:00",
    venue: "સાઇન્સ સિટી, અમદાવાદ",
    category: "બિઝનેસ",
    categoryColor: "category-business",
    attendees: 2500,
    isPremium: true
  }, {
    id: 2,
    title: "નવરાત્રી મહોત્સવ 2024",
    description: "પરંપરાગત ગુજરાતી સંસ્કૃતિની ભવ્য ઉજવણી અને ગરબા રમતો",
    image: culturalEvent,
    date: "20 ઓક્ટોબર",
    time: "સાંજે 7:00",
    venue: "GMDC ગ્રાઉન્ડ, અમદાવાદ",
    category: "સંસ્કૃતિ",
    categoryColor: "category-culture",
    attendees: 15000
  }, {
    id: 3,
    title: "IPL ફાઇનલ મેચ વ્યૂઇંગ",
    description: "ગુજરાત ટાઇટન્સના ફાઇનલ મેચનું લાઇવ સ્ક્રીનિંગ",
    image: sportsNews,
    date: "28 મે",
    time: "સાંજે 7:30",
    venue: "નરેન્દ્ર મોદી સ્ટેડિયમ",
    category: "સ્પોર્ટ્સ",
    categoryColor: "category-sports",
    attendees: 50000
  }, {
    id: 4,
    title: "યુવા સંસદ ચર્ચા",
    description: "યુવાઓ સાથે રાજકીય વિષયો પર ખુલ્લી ચર્ચા અને વાર્તાલાપ",
    image: politicsNews,
    date: "5 ડિસેમ્બર",
    time: "બપોરે 2:00",
    venue: "IIM અમદાવાદ",
    category: "રાજકારણ",
    categoryColor: "category-politics",
    attendees: 800
  }];
  return <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ગુજરાતમાં થનારી મહત્વપૂર્ણ ઘટનાઓ અને કાર્યક્રમોની માહિતી મેળવો
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-elegant)] hover-lift">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <img src={upcomingEvents[0].image} alt={upcomingEvents[0].title} className="w-full h-full object-cover" />
                {upcomingEvents[0].isPremium && <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Premium Event
                    </span>
                  </div>}
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className={`category-badge bg-${upcomingEvents[0].categoryColor} text-white`}>
                    {upcomingEvents[0].category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{upcomingEvents[0].title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {upcomingEvents[0].description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{upcomingEvents[0].date} • {upcomingEvents[0].time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{upcomingEvents[0].venue}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{upcomingEvents[0].attendees.toLocaleString()} Expected Attendees</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary-hover flex-1">
                    રજિસ્ટર કરો
                  </Button>
                  <Button variant="outline" className="flex-1">
                    શેર કરો
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.slice(1).map(event => <div key={event.id} className="news-card hover-lift group">
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`category-badge bg-${event.categoryColor} text-white`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  વધુ જાણો
                </Button>
              </div>
            </div>)}
        </div>

        {/* View All Events */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            બધી ઇવેન્ટ્સ જુઓ
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>;
};
export default EventsSection;
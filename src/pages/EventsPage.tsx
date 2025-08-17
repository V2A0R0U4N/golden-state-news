import EnhancedHeader from '@/components/EnhancedHeader';
import Footer from '@/components/Footer';
import EventsSection from '@/components/EventsSection';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Events</h1>
          <p className="text-lg text-muted-foreground">Upcoming events, cultural programs, and community gatherings in Gujarat</p>
        </div>

        <EventsSection />
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
import { useParams } from 'react-router-dom';
import EnhancedHeader from '@/components/EnhancedHeader';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { politicsStories, businessStories, sportsStories } from '@/components/CategorySection';

const CategoryPage = () => {
  const { category } = useParams();
  
  const getCategoryData = () => {
    switch (category) {
      case 'politics':
        return {
          title: 'Politics',
          description: 'Latest political news and updates from Gujarat and India',
          stories: politicsStories,
          color: 'blue-600'
        };
      case 'business':
        return {
          title: 'Business',
          description: 'Business news, market updates, and economic developments',
          stories: businessStories,
          color: 'amber-600'
        };
      case 'sports':
        return {
          title: 'Sports',
          description: 'Sports news, match updates, and athletic achievements',
          stories: sportsStories,
          color: 'green-600'
        };
      case 'entertainment':
        return {
          title: 'Entertainment',
          description: 'Entertainment news, celebrity updates, and cultural events',
          stories: [
            {
              id: 1,
              title: "ગુજરાતી ફિલ્મ ઉદ્યોગમાં નવા કલાકારોનું પ્રવેશ",
              excerpt: "યુવા પ્રતિભાઓને પ્લેટફોર્મ આપવાની નવી પહેલ...",
              image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop",
              category: "Entertainment",
              categoryColor: "purple-600",
              author: "Neha Panchal",
              time: "2 hours ago"
            },
            {
              id: 2,
              title: "નવરાત્રી ગરબા પ્રતિયોગિતાની તૈયારીઓ શરૂ",
              excerpt: "પારંપરિક ગરબા અને ડાંડિયા રાસ માટે વિશાળ આયોજન...",
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
              category: "Entertainment",
              categoryColor: "purple-600", 
              author: "Ravi Desai",
              time: "4 hours ago"
            }
          ],
          color: 'purple-600'
        };
      case 'technology':
        return {
          title: 'Technology',
          description: 'Technology news, innovations, and digital developments',
          stories: [
            {
              id: 1,
              title: "ગુજરાતમાં AI ટેકનોલોજીનું વધતું ઉપયોગ",
              excerpt: "કૃત્રિમ બુદ્ધિમત્તાના ક્ષેત્રે ગુજરાતની કંપનીઓની આગવી પહેલ...",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
              category: "Technology",
              categoryColor: "blue-500",
              author: "Vikram Patel",
              time: "3 hours ago"
            },
            {
              id: 2,
              title: "સુરતમાં સ્માર્ટ સિટી પ્રોજેક્ટનો વિકાસ",
              excerpt: "ડિજિટલ ઇન્ફ્રાસ્ટ્રક્ચર દ્વારા શહેરી સેવાઓમાં સુધારો...",
              image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
              category: "Technology",
              categoryColor: "blue-500",
              author: "Shruti Sharma",
              time: "5 hours ago"
            }
          ],
          color: 'blue-500'
        };
      default:
        return {
          title: 'News',
          description: 'Latest news and updates',
          stories: [],
          color: 'gray-600'
        };
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{categoryData.title}</h1>
          <p className="text-lg text-muted-foreground">{categoryData.description}</p>
        </div>

        {categoryData.stories.length > 0 && (
          <>
            {/* Featured Story */}
            <div className="mb-12">
              <NewsCard 
                {...categoryData.stories[0]}
                variant="featured"
                className="mb-8"
              />
            </div>

            {/* Other Stories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.stories.slice(1).map((story) => (
                <NewsCard key={story.id} {...story} />
              ))}
            </div>
          </>
        )}

        {categoryData.stories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No news available in this category yet.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;

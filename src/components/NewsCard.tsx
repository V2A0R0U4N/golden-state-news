import { Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  title: string;
  excerpt?: string;
  image: string;
  category: string;
  categoryColor: string;
  author: string;
  time: string;
  variant?: 'default' | 'horizontal' | 'compact' | 'featured';
  className?: string;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  categoryColor, 
  author, 
  time, 
  variant = 'default',
  className 
}: NewsCardProps) => {
  
  if (variant === 'horizontal') {
    return (
      <article className={cn("news-card hover-lift", className)}>
        <div className="flex gap-4 p-4">
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`category-badge bg-${categoryColor} text-white text-xs mb-2`}>
              {category}
            </span>
            <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
              {title}
            </h3>
            {excerpt && (
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {excerpt}
              </p>
            )}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{time}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className={cn("news-card hover-lift", className)}>
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-40 object-cover"
          />
          <div className="card-overlay" />
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <span className={`category-badge bg-${categoryColor} text-white text-xs mb-2 self-start`}>
              {category}
            </span>
            <h3 className="font-bold text-white text-sm leading-tight line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className={cn("news-card hover-lift", className)}>
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="card-overlay" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <span className={`category-badge bg-${categoryColor} text-white mb-3 self-start`}>
              {category}
            </span>
            <h2 className="font-bold text-white text-2xl md:text-3xl leading-tight mb-3">
              {title}
            </h2>
            {excerpt && (
              <p className="text-white/90 text-base md:text-lg mb-4 line-clamp-2">
                {excerpt}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{time}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className={cn("news-card hover-lift", className)}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className={`category-badge bg-${categoryColor} text-white absolute top-4 left-4`}>
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {excerpt}
          </p>
        )}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
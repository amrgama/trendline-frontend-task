import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

export function StarRating({
  rating,
  max = 5,
  size = 16,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-primary text-primary"
        />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star size={size} className="text-[#BE968E] fill-[#BE968E]" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star size={size} className="text-primary fill-primary" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-[#BE968E] fill-[#BE968E]"
        />
      ))}
    </div>
  );
}

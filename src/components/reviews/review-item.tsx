import { StarRating } from "./star-rating";

export interface Review {
  id: string;
  user: {
    name: string;
    image?: string;
  };
  rating: number;
  date: string;
  title?: string;
  content: string;
  helpfulCount: number;
}

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="flex flex-col gap-3 py-6 border-b-2 border-[#F4F7F9] last:border-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <h4 className="font-semibold text-[#020202] text-sm md:text-[20px]">
            {review.user.name}
          </h4>
          <StarRating rating={review.rating} size={20} className="gap-1" />
        </div>
        <span className="text-sm text-[#545454] font-medium">
          {review.date}
        </span>
      </div>

      <p className="text-xs md:text-base text-[#020202] leading-relaxed">
        {review.content}
      </p>
    </div>
  );
}

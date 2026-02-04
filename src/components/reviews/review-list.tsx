"use client";

import { Button } from "@/components/ui/button";
import { ReviewItem, Review } from "./review-item";

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-2 mt-8">
      <div className="flex flex-col gap-[32px]">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button
          variant="secondary"
          className="bg-[#F5F5F5] hover:bg-[#EAEAEA] text-primary rounded-[12px] p-[16px] y-3 h-auto text-sm font-semibold"
        >
          View More Comments
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { IconChatDots } from "../icons";

interface RatingDistribution {
  rating: number;
  count: number;
}

interface ReviewSummaryProps {
  averageRating: number;
  totalReviews: number;
  distribution: RatingDistribution[];
}

export function ReviewSummary({
  averageRating,
  totalReviews,
  distribution,
}: ReviewSummaryProps) {
  // Sort distribution from 5 to 1
  const sortedDistribution = [...distribution].sort(
    (a, b) => b.rating - a.rating,
  );

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-center xl:justify-between flex-wrap gap-8 lg:gap-16 w-full">
      {/* Left: Average Rating */}
      <div className="flex justify-center gap-2 min-w-[120px]">
        <span className="text-[80px] md:text-[120px] leading-none font-medium text-[#020202]">
          {averageRating.toFixed(1).replace(".", ",")}
        </span>
        <span className="text-[24px] font-medium text-[#B0B0B0]/40 mt-auto">
          /5
        </span>
      </div>

      {/* Middle: Distribution Bars */}
      <div className="lg:flex-1 space-y-2 w-full max-w-md mx-auto">
        {sortedDistribution.map((item) => {
          const percentage = item.count;
          return (
            <div key={item.rating} className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 min-w-[30px]">
                <Star className="h-5 w-5 fill-[#BE968E] text-[#BE968E]" />
                <span className="font-medium text-[20px] text-gray-700">
                  {item.rating}
                </span>
              </div>
              <Progress
                value={percentage}
                className="h-[6px] w-[363px] bg-[#E6E6E6] [&>div]:bg-[#BE968E]"
              />
              <span className="w-8 text-[20px] text-right font-medium text-[#545454]">
                %{Math.round(percentage)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right: Total Reviews & Action */}
      <div className="hidden md:flex justify-center flex-col items-center gap-4 min-w-[160px]">
        <div className="">
          <p className="text-[#545454]">Total Reviews</p>
          <p className="text-[60px] font-semibold text-[#020202]">
            {(totalReviews / 1000).toFixed(1)}K
          </p>
        </div>
        <Button className="h-fit bg-[#BE968E] hover:bg-primary justify-center text-white! text-medium p-[16px]! gap-4 rounded-[12px]">
          Add Comment
          <IconChatDots className="h-6! w-6! shrink-0!" />
        </Button>
      </div>
    </div>
  );
}

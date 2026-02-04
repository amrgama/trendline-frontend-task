"use client";

import { ReviewSummary } from "@/components/reviews/review-summary";
import { ReviewList } from "@/components/reviews/review-list";
import { Review } from "@/components/reviews/review-item";
import Image from "next/image";

const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    user: {
      name: "Alex Daewn",
      image: "https://i.pravatar.cc/150?u=1",
    },
    rating: 5,
    date: "4 months ago",
    title: "Absolutely love it!",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    helpfulCount: 12,
  },
  {
    id: "2",
    user: {
      name: "Alex Daewn",
    },
    rating: 5,
    date: "4 months ago",
    title: "Great quality, slightly large fit",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    helpfulCount: 5,
  },
  {
    id: "3",
    user: {
      name: "Alex Daewn",
    },
    rating: 5,
    date: "4 months ago",
    title: "Perfect for summer",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    helpfulCount: 8,
  },
  {
    id: "4",
    user: {
      name: "Alex Daewn",
    },
    rating: 5,
    date: "4 months ago",
    title: "Perfect for summer",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    helpfulCount: 8,
  },
];

const MOCK_DISTRIBUTION = [
  { rating: 5, count: 67 },
  { rating: 4, count: 15 },
  { rating: 3, count: 6 },
  { rating: 2, count: 3 },
  { rating: 1, count: 9 },
];

export default function ProductReviews({
  productId: _productId,
}: {
  productId: string;
}) {
  void _productId; // Silence unused warning
  const totalReviews = 3000;
  const averageRating = 4.5;

  return (
    <div id="reviews" className="relative scroll-mt-20">
      <div className="relative flex items-center gap-2 mb-8">
        <Image
          className="md:hidden absolute -top-4"
          src={"/images/Layer_1.png"}
          width={59}
          height={37}
          alt="cloud"
        />
        <h2 className="text-[16px] md:text-[24px] font-semibold relative inline-block">
          Rating & Reviews
        </h2>
        <span className="absolute left-0 -bottom-2 w-[40px] h-[4px] bg-primary rounded-full"></span>
      </div>

      <div className="flex flex-col gap-8">
        {/* Summary Section */}
        <ReviewSummary
          averageRating={averageRating}
          totalReviews={totalReviews}
          distribution={MOCK_DISTRIBUTION}
        />

        {/* Reviews List Section */}
        <ReviewList reviews={MOCK_REVIEWS} />
      </div>
      <Image
        className="hidden md:block"
        src={"/images/Layer_1.png"}
        width={98}
        height={57}
        alt="cloud"
      />
    </div>
  );
}

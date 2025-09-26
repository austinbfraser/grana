// import React from 'react';
import type { Review } from "../interfaces/review.interface";
import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  list: Review[]
}

const ReviewList = ({ list }: ReviewListProps) => {
  return (
    <div className="reviewList">
      {list.length > 0
        ? list.map((review: Review) => <ReviewCard key={review.id} review={review}/>)
        : null}
    </div>
  )
}

export default ReviewList
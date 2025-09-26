// import React from 'react'
import type { Review } from '../interfaces/review.interface';

interface ReviewProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewProps) => {
  return (
    <>
      <div>{review.title}</div>
      <div>{review.date}</div>
      <div>{review.rating}</div>
      <div>{review.review}</div>
    </>
  );
};

export default ReviewCard;

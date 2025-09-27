// import React from 'react'
import type { Review } from '../interfaces/review.interface';
import styles from '../review.module.css';

interface ReviewProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewProps) => {
  return (
    <div className={styles.reviewCard}>
      <div>{review.title}</div>
      <div>{review.date}</div>
      <div>{review.rating}</div>
      <div>{review.review}</div>
    </div>
  );
};

export default ReviewCard;

// import React from 'react';
import type { Review } from "../interfaces/review.interface";
import styles from '../review.module.css';
import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  list: Review[]
}

const ReviewList = ({ list }: ReviewListProps) => {
  return (
    <div className={styles.reviewList}>
      {list.length > 0
        ? list.map((review: Review) => <ReviewCard key={review.id} review={review}/>)
        : null}
    </div>
  )
}

export default ReviewList
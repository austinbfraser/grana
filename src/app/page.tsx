// import Image from "next/image";
import styles from './page.module.css';
import { createClient } from '../../utils/supabase/server';
import ReviewList from './components/ReviewList';

async function fetchReviews() {
  const supabase = await createClient();
  const res = await supabase.from('review').select();
  return res;
}

export default async function Home() {
  const res = await fetchReviews();
  const reviews = res.data;


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {reviews && <ReviewList list={reviews}></ReviewList>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

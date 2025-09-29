// import Image from "next/image";
import OpenAI from 'openai';

import styles from './page.module.css';
import { createClient } from '../../utils/supabase/server';
import ReviewList from './components/ReviewList';

async function fetchReviews() {
  const supabase = await createClient();
  const res = await supabase.from('review').select();
  return res;
}

let cachedResponse: string | undefined;

export default async function Home() {
  const res = await fetchReviews();
  const reviews = res.data;

  if (!cachedResponse) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: 'gpt-5-nano',
      input: 'write a haiku about ai',
      store: true,
    });

    const textOutput = response.output?.find((item) => 'content' in item);
    cachedResponse = textOutput?.content?.[0]?.text ?? 'No haiku generated';
    console.log('cachedResponse: ', cachedResponse)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>AI Haiku:</h1>
        <p>{cachedResponse}</p>
        {reviews && <ReviewList list={reviews}></ReviewList>}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

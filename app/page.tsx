"use client";

import Link from 'next/link';
import JuicyTalesTitle from "./components/JuicyTalesTitle/JuicyTalesTitle";
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import styles from './Home.module.scss'
import { useEffect } from 'react';

export default function Home() {

  const audioPlayer = useGlobalAudioPlayer()
  
  useEffect(() => {
		audioPlayer.stop()
	}, [])

  return (
    <main>
      <section className={styles.staticSection}>
        <div className={styles.heroImageWrapper}>
        </div>
        <JuicyTalesTitle />

        <div className={styles.bkgImage2}>
        </div>
      </section>

      <section className={styles.mainContent}>
        {/* Quote */}
        <div className={styles.quoteWrapper}>
          <div className={styles.quoteText}>
            "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain"
          </div>
          <div className={styles.quoteAuthor}>
            -Vivian Greene
          </div>
        </div>

        {/* TEMPORARY DEBUG: Link to tales directly */}
        <div className="text-center">
          <Link href="/tales">Tales</Link>
        </div>

      </section>
    </main>
  );
}

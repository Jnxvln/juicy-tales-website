"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import styles from './Home.module.scss'
import { useEffect } from 'react';

export default function Home() {

  const audioPlayer = useGlobalAudioPlayer()
  
  useEffect(() => {
		audioPlayer.stop()
	}, [])

  return (
    <main className={styles.main}>
      <div className={styles.heroImageWrapper}>
      </div>

      <Image className={styles.juicyTitle} src="/images/JuicyTalesTitle.png" alt="Title" width={200} height={200} />

      <div className={styles.test}>
        <div className={styles.bkgImage2}></div>

        <section className={styles.quoteSection}>
          <blockquote className={styles.quote}>
            Life isn{"'"}t about waiting for the storm to pass, it{"'"}s about learning to dance in the rain
            <div className={styles.quoteAuthor}>~ Vivian Greene</div>
          </blockquote>

          <section className={styles.navSection}>
              <div>
                <Link href="/tales">Browse Tales</Link>
              </div>
          </section>
        </section>
      </div>



    </main>
  );
}

import Heading from "./components/Heading/Heading";
import Image from 'next/image'
import styles from './Home.module.scss'
import JuicyTalesTitle from "./components/JuicyTalesTitle/JuicyTalesTitle";
import Article from "./components/Article/Article";

export default function Home() {
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

        {/* List of Works */}

      </section>
    </main>
  );
}

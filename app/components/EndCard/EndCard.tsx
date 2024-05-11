import Link from 'next/link'
import styles from './EndCard.module.scss'

export default function EndCard () {

	const defaultTitle = "The End"

	return (
		<div className={styles.container}>
			{/* <div className={styles.titleContainer}>
				<h1 className={styles.title}>{defaultTitle}</h1>
			</div> */}
			<div className={styles.moreContainer}>
				<nav className={styles.links}>
					<Link href="/tales">More Tales</Link>
					<Link href="/">Home</Link>
				</nav>
			</div>
		</div>
	)
}
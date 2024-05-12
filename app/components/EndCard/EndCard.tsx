import Link from 'next/link'
import styles from './EndCard.module.scss'
import { MouseEventHandler } from 'react'

type TEndCardParams = {
	onRestart?: MouseEventHandler<HTMLButtonElement>
}

export default function EndCard ({ onRestart }: TEndCardParams) {

	const defaultTitle = "The End"

	return (
		<div className={styles.container}>
			{/* <div className={styles.titleContainer}>
				<h1 className={styles.title}>{defaultTitle}</h1>
			</div> */}
			<div className={styles.moreContainer}>
				<nav className={styles.links}>
					<Link href="/tales">More Tales</Link>
					{ onRestart && <button type="button" onClick={onRestart}>Restart</button> }
					<Link href="/">Home</Link>
				</nav>
			</div>
		</div>
	)
}
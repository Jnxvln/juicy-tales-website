import { Titan_One } from "next/font/google"
import { AnimationScope, motion } from 'framer-motion'
import styles from './LiteratureHeader.module.scss'

// Custom font for literature Title
const TitanOne = Titan_One({
	weight: "400",
	subsets: ['latin'],
	display: 'swap'
})

type TLiteratureHeaderParams = {
	scope: AnimationScope<any>,
	literatureTitle: string
}

export default function LiteratureHeader ({ scope, literatureTitle }: TLiteratureHeaderParams) {
	return (
		<motion.header id="header" ref={scope} className={styles.header}>
			<h1 className={`${styles.title} ${TitanOne.className}`}>{literatureTitle}</h1>
		</motion.header>
	)
}
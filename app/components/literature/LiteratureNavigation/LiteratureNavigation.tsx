import Link from 'next/link'
import styles from './LiteratureNavigation.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHouse } from '@fortawesome/free-solid-svg-icons'
import { AnimationScope, motion } from 'framer-motion'
import { Titan_One } from "next/font/google"

const TitanOne = Titan_One({
	weight: "400",
	subsets: ['latin'],
	display: 'swap'
})

type TLiteratureNavigationParams = {
	scope: AnimationScope<any>,
	literatureTitle: string
}

export default function LiteratureNavigation ({ scope, literatureTitle }: TLiteratureNavigationParams) {

	const onRefresh = () => {
		window.location.reload()
	}

	return (
		<nav className={styles.navigation}>
			<div className={styles.navigationLinksList}>
				<Link href="/tales" className={`${styles.navLink}`}>
					<FontAwesomeIcon icon={faList} />
					Tales
				</Link>
				<Link href="/" className={`${styles.navLink}`}>
					<FontAwesomeIcon icon={faHouse}/>
					Home
				</Link>
			</div>

			{/* Story Title (in Nav) */}
			<motion.div onClick={onRefresh} className={`${styles.navStoryTitle} ${TitanOne.className}`} ref={scope} initial={{ opacity: 0 }}>{literatureTitle}</motion.div>
		</nav>
	)
}
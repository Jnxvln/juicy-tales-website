import { AnimationScope, motion } from 'framer-motion'
import styles from './LiteratureVolumeNotice.module.scss'

type TLiteratureVolumeNoticeParams = {
	scope: AnimationScope<any>
}

export default function LiteratureVolumeNotice ({ scope }: TLiteratureVolumeNoticeParams) {
	return (
		<motion.div ref={scope} className={styles.volumeUpNotice}>
			Turn volume up for best experience
		</motion.div>
	)
}
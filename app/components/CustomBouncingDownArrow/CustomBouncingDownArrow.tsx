import { motion } from 'framer-motion'
import BouncingDownArrow from '../BouncingDownArrow/BouncingDownArrow'
import styles from './CustomBouncingDownArrow.module.scss'

type TCustomBouncingDownArrowParams = {
	initial?: Object,
	whileInView?: Object,
	transition?: Object
}

export default function CustomBouncingDownArrow ({ initial, whileInView, transition }: TCustomBouncingDownArrowParams) {
	return (
		<motion.div
			initial={initial}
			whileInView={whileInView}
			transition={transition}
		>
			<BouncingDownArrow />
		</motion.div>
	)
}
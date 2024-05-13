import { AnimationScope, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import styles from './LiteratureBeginButton.module.scss'
import { MouseEventHandler } from 'react'

type TLiteratureBeginButtonParams = {
	scope: AnimationScope<any>,
	disabled: boolean,
	onBegin: MouseEventHandler<HTMLButtonElement>
}

export default function LiteratureBeginButton ({ scope, disabled, onBegin }: TLiteratureBeginButtonParams) {
	return (
		<motion.div ref={scope} className={styles.beginButtonWrapper} initial={{ opacity: 1 }}>
			<button disabled={disabled} type="button" onClick={onBegin} className="bg-rose-800 hover:bg-rose-900 px-6 py-3 rounded-lg font-bold transition-colors duration-100">
				<FontAwesomeIcon icon={faPlay} style={{ marginRight: '0.4em' }} />
				Begin
			</button>
		</motion.div>
	)
}
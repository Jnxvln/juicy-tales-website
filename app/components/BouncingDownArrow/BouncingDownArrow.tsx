import styles from './BouncingDownArrow.module.scss'

export default function BouncingDownArrow () {
	return (
		<div className={`${styles.arrow} ${styles.bounce}`}></div>
	)
}
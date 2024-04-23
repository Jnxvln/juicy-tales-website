import { ReactElement } from 'react'
import styles from './Article.module.scss'

type TTitleElement = {
	title: ReactElement,
	content: ReactElement
}

export default function Article ({ title, content }: TTitleElement) {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.content}>
            	{content}
          	</div>
		</div>
	)
}
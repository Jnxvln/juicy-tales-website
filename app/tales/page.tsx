"use client";
import { useEffect } from 'react'
import Link from 'next/link'
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import styles from './Tales.module.scss'

export default function Tales () {

	const audioPlayer = useGlobalAudioPlayer()

	useEffect(() => {
		audioPlayer.stop()
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.blah}>
				<Link href="/">
					<div className={`${styles.menuItem} ${styles.homeMenuItem}`}>
						Home
					</div>
				</Link>

				<div className="text-gray-600 mt-24">Temporary</div>
				<div className="font-bold mb-8">Choose your experience:</div>
			</div>

			<div className="mt-4">
				<div className={styles.menuList}>
					<Link href="/tales/the-juice">
						<div className={styles.menuItem}>
							The Juice
						</div>
					</Link>

					<Link href="/tales/chefs-symphony">
						<div className={styles.menuItem}>
							{"Chef's"} Symphony
						</div>
					</Link>

					<Link href="/tales/chefs-symphony">
						<div className={styles.menuItem}>
							{"Chef's"} Symphony
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
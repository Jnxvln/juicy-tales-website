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
			<Link href="/">
				<div className={`${styles.menuItem} ${styles.homeMenuItem}`}>
					Home
				</div>
			</Link>

			<header className={styles.header}>
				<div className={styles.temporaryMenuText}>Temporary Menu</div>
				<div className={styles.chooseExperienceText}>Choose your experience:</div>
			</header>

			<div className={styles.menuList}>
				<Link href="/tales/the-juice">
					<div className={styles.menuItem}>
						The Juice
					</div>
				</Link>

				{/* <Link href="/tales/chefs-symphony"> */}
					<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						Chef&apos;s Symphony
					</div>
				{/* </Link> */}

				{/* <Link href="/tales/the-carnival-mind"> */}
					<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						The Carnival Mind
					</div>
				{/* </Link> */}

				{/* <Link href="/tales/mans-worry"> */}
				<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						Like The Golden Girls
					</div>
				{/* </Link> */}

				{/* <Link href="/tales/life"> */}
				<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						Life
					</div>
				{/* </Link> */}

				{/* <Link href="/tales/humanities-plea"> */}
				<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						Humanity&apos;s Plea
					</div>
				{/* </Link> */}

				{/* <Link href="/tales/farewell"> */}
				<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						Farewell
					</div>
				{/* </Link> */}

				{/* <Link href="/tales/dark-juice"> */}
				<div className={`${styles.menuItem} ${styles.disabledMenuItem}`}>
						Dark Juice
					</div>
				{/* </Link> */}		
			</div>

			<div className="text-slate-500 mt-8 p-2">
				This part of the site is still under development and will soon have better presentation, tale categorization, and a search ability to help down the experience you&apos;re looking for. Hang tight!
			</div>
		</div>
	)
}
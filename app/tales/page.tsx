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
				Which tale are you looking for?
			</div>

			<div className="mt-4">
				<ol className="list-disc ml-8">
					<li className="list-item hover:text-red-400">
						<Link href="/tales/the-juice">The Juice</Link>
					</li>
					<li className="list-item hover:text-red-400">
						<Link href="/tales/chefs-symphony">{"Chef's"} Symphony</Link>
					</li>
					<li className="list-item hover:text-red-400">
						<Link href="/tales/chefs-symphony">{"Chef's"} Symphony</Link>
					</li>
				</ol>
			</div>
		</div>
	)
}
"use client";

import { TLiterature } from '@/app/Types';
import { useState, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import LiteratureNavigation from '@/app/components/literature/LiteratureNavigation/LiteratureNavigation';
import LiteratureHeader from '@/app/components/literature/LiteratureHeader/LiteratureHeader';
import LiteratureBeginButton from '@/app/components/literature/LiteratureBeginButton/LiteratureBeginButton';
import LiteratureVolumeNotice from '@/app/components/literature/LiteratureVolumeNotice/LiteratureVolumeNotice';
import LiteratureStanza from '@/app/components/literature/LiteratureStanza/LiteratureStanza';
import LiteratureHeaderSpacer from '@/app/components/literature/LiteratureHeaderSpacer/LiteratureHeaderSpacer';
import EndCard from '@/app/components/EndCard/EndCard';
import colors from './TheCarnivalMind.module.scss'
import stanzas from './the-carnival-mind-stanzas.json'
import styles from './TheCarnivalMind.module.scss'

export default function TheCarnivalMind () {

	// #region VARIABLES =========================================================================================
	const audioPlayer = useGlobalAudioPlayer();
	const [begin, setBegin] = useState<boolean>(false)

	const literature: TLiterature = {
		title: "The Carnival Mind",
		type: "poem",
		audioSrcUrl: '/music/spirits-of-the-moor-180852.mp3',
		stanzas
	}	
		// #region ANIMATION DEFINITIONS -------------------------------------------------
		const [storyContainerScope, storyContainerAnimate] = useAnimate()
		const [headerScope, headerAnimate] = useAnimate()
		const [headerTitleScope, headerTitleAnimate] = useAnimate()
		const [volumeNoticeScope, volumeNoticeAnimate] = useAnimate()
		const [beginButtonScope, beginButtonAnimate] = useAnimate()
		// #endregion ---------------------------------------------------------------------

	// #endregion ===================================================================================================

	// #region ACTIONS ==============================================================================================
	const onBegin = async() => {
		// Begin music after delay
		setTimeout(() => {
			audioPlayer.play()
		}, 3000)

		// Fade out the Begin button, header, and volume notice
		beginButtonAnimate(beginButtonScope.current, { opacity: 0 }, { duration: 3 })
		headerAnimate(headerScope.current, { opacity: 0 }, { duration: 3 })
		volumeNoticeAnimate(volumeNoticeScope.current, { opacity: 0 }, { duration: 3 })

		// Animate the literature's title in the top right of hte screen
		await headerTitleAnimate(headerTitleScope.current, { opacity: 1, color: colors.storyPageHeaderBgColorHover }, { duration: 3, delay: 2 })

		// Remove header from DOM flow
		const headerElm = document.getElementById('header')
		if (headerElm) {
			headerElm.style.display = 'none';
		}

		// Trigger `begin` in `LiteratureStanza` useEffect via `isEnabled` property
		setBegin(true)
	}

	const onRefresh = () => {
		window.location.reload()
	}
	// #endregion

	// #region USE-EFFECTS
	useEffect(() => {
		// Pre-load the literature's music, if available
		if (literature?.audioSrcUrl) {
			audioPlayer.load(literature.audioSrcUrl, {
				autoplay: false,
			})
		}
	}, [])
	// #endregion

	return (
		<div className={styles.pageContainer}>

			{/* NAVIGATION */}
			<LiteratureNavigation scope={headerTitleScope} literatureTitle={literature.title} />

			{/* HEADER SPACER */}
			<LiteratureHeaderSpacer />

			{/* HEADER */}
			<LiteratureHeader scope={headerScope} literatureTitle={literature.title} />

			{/* STORY SECTION */}
			<motion.section ref={storyContainerScope} className={styles.storyContainer}>
				<div>
					<LiteratureVolumeNotice scope={volumeNoticeScope} />
					<LiteratureBeginButton disabled={begin} scope={beginButtonScope} onBegin={onBegin} />
					
					<br/>
					<br/>

					{/* STANZA #0: "the weight of responsibility..." */}
					<LiteratureStanza
						stanzaNumber={0}
						literature={literature}
						isEnabled={begin}
						initialOptions
						whileInViewOptions
						transitionOptions
						typeWriterInitialPauseInSeconds={14}
						useContinueArrow={true}
						continueArrowTransitionOptions={{ duration: 2, delay: 14 }}
						useEndSpacer={true}
					/>

					{ begin && 
						<div>
							{ stanzas && stanzas.length > 0 && stanzas.map((stanza, index) => {
								if (index === 0) return;

								if (index === stanzas.length) return;

								return (
									<LiteratureStanza
										key={index}
										stanzaNumber={index}
										literature={literature}
										isEnabled={begin}
										initialOptions
										whileInViewOptions
										transitionOptions
										useContinueArrow={true}
										continueArrowTransitionOptions={{ duration: 2, delay: 12 }}
										useEndSpacer={true}
									/>
								)
							}) }

							{/* ENDING CARD */}
							<EndCard onRestart={onRefresh} />
						</div>
					}
				</div>
			</motion.section>
		</div>
	)
}
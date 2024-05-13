"use client";

import { TLiterature } from '@/app/Types';
import { useState, useEffect } from 'react'
import { AnimationScope, motion, useAnimate } from 'framer-motion'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import EndCard from '@/app/components/EndCard/EndCard';
import VerticalSpacer from '@/app/components/VerticalSpacer/VerticalSpacer';
import LiteratureNavigation from '@/app/components/literature/LiteratureNavigation/LiteratureNavigation';
import LiteratureHeader from '@/app/components/literature/LiteratureHeader/LiteratureHeader';
import CustomBouncingDownArrow from '@/app/components/CustomBouncingDownArrow/CustomBouncingDownArrow';
import LiteratureBeginButton from '@/app/components/literature/LiteratureBeginButton/LiteratureBeginButton';
import LiteratureVolumeNotice from '@/app/components/literature/LiteratureVolumeNotice/LiteratureVolumeNotice';
import { 
	initialOptions, 
	whileInViewOptions, 
	transitionOptions, 
	defaultWrapperAnimationProperties, 
	defaultWrapperTransitionProperties, 
	defaultStanzaAnimationProperties, 
	defaultStanzaTransitionProperties 
} from '@/app/data/DefaultProperties'
import colors from './page.module.scss'
import stanzas from './the-juice-stanzas.json'
import styles from './page.module.scss'
import LiteratureStanza from '@/app/components/literature/LiteratureStanza/LiteratureStanza';

// #region DEFAULT OPTIONS =======================================================================================
const typewriterOptions = {
	wrapperClassName: styles.typewriterWrapper,
	cursorClassName: styles.typewriterCursor
}
// #endregion ===================================================================================================

export default function TheJuiceProse () {

	// #region VARIABLES =========================================================================================
	const audioPlayer = useGlobalAudioPlayer();
	const [begin, setBegin] = useState<boolean>(false)

	const literature: TLiterature = {
		title: "The Juice",
		type: "prose",
		stanzas
	}

		// #region STANZAS STATE ---------------------------------------------------------
		const [stanza0TW_P1, setStanza0TW_P1] = useState<TypewriterClass>()
		const [stanza1TW_P1, setStanza1TW_P1] = useState<TypewriterClass>()
		const [stanza2TW_P1, setStanza2TW_P1] = useState<TypewriterClass>()
		const [stanza3TW_P1, setStanza3TW_P1] = useState<TypewriterClass>()
		const [stanza4TW_P1, setStanza4TW_P1] = useState<TypewriterClass>()
		const [stanza5TW_P1, setStanza5TW_P1] = useState<TypewriterClass>()
		const [stanza5TW_P2, setStanza5TW_P2] = useState<TypewriterClass>()
		const [stanza6TW_P1, setStanza6TW_P1] = useState<TypewriterClass>()
		const [stanza7TW_P1, setStanza7TW_P1] = useState<TypewriterClass>()
		const [stanza8TW_P1, setStanza8TW_P1] = useState<TypewriterClass>()
		const [stanza9TW_P1, setStanza9TW_P1] = useState<TypewriterClass>()
		// #endregion --------------------------------------------------------------------
	
		// #region ANIMATION DEFINITIONS -------------------------------------------------
		const [storyContainerScope, storyContainerAnimate] = useAnimate()
		const [headerScope, headerAnimate] = useAnimate()
		const [headerTitleScope, headerTitleAnimate] = useAnimate()
		const [volumeNoticeScope, volumeNoticeAnimate] = useAnimate()
		const [beginButtonScope, beginButtonAnimate] = useAnimate()

		// Stanza 0 Animations
		const [stanza0WrapperScope, stanza0WrapperAnimate] = useAnimate()
		const [stanza0Scope, stanza0Animate] = useAnimate()

		// Stanza 1 Animations
		const [stanza1WrapperScope, stanza1WrapperAnimate] = useAnimate()
		const [stanza1Scope, stanza1Animate] = useAnimate()

		// Stanza 2 Animations
		const [stanza2WrapperScope, stanza2WrapperAnimate] = useAnimate()
		const [stanza2Scope, stanza2Animate] = useAnimate()

		// Stanza 3 Animations
		const [stanza3WrapperScope, stanza3WrapperAnimate] = useAnimate()
		const [stanza3Scope, stanza3Animate] = useAnimate()

		// Stanza 4 Animations
		const [stanza4WrapperScope, stanza4WrapperAnimate] = useAnimate()
		const [stanza4Scope, stanza4Animate] = useAnimate()

		// Stanza 5 Animations
		const [stanza5WrapperScope, stanza5WrapperAnimate] = useAnimate()
		const [stanza5Scope, stanza5Animate] = useAnimate()

		// Stanza 6 Animations
		const [stanza6WrapperScope, stanza6WrapperAnimate] = useAnimate()
		const [stanza6Scope, stanza6Animate] = useAnimate()

		// Stanza 7 Animations
		const [stanza7WrapperScope, stanza7WrapperAnimate] = useAnimate()
		const [stanza7Scope, stanza7Animate] = useAnimate()

		// Stanza 8 Animations
		const [stanza8WrapperScope, stanza8WrapperAnimate] = useAnimate()
		const [stanza8Scope, stanza8Animate] = useAnimate()

		// Stanza 9 Animations
		const [stanza9WrapperScope, stanza9WrapperAnimate] = useAnimate()
		const [stanza9Scope, stanza9Animate] = useAnimate()
		// #endregion ---------------------------------------------------------------------

	// #endregion ===================================================================================================

	// #region ACTIONS ==============================================================================================
	const onBegin = async() => {

		// setBegin(true)

		// Begin music
		setTimeout(() => {
			audioPlayer.play()
		}, 3000)

		// 1. Fade out the Begin button
		beginButtonAnimate(beginButtonScope.current, { opacity: 0 }, { duration: 3 })
		headerAnimate(headerScope.current, { opacity: 0 }, { duration: 3 })
		volumeNoticeAnimate(volumeNoticeScope.current, { opacity: 0 }, { duration: 3 })
		await headerTitleAnimate(headerTitleScope.current, { opacity: 1, color: colors.storyPageHeaderBgColorHover }, { duration: 3, delay: 2 })

		// Remove header from DOM flow
		const headerElm = document.getElementById('header')
		if (headerElm) {
			headerElm.style.display = 'none';
		}

		setBegin(true)

		// await stanza0WrapperAnimate(stanza0WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		// await stanza0Animate(stanza0Scope.current, { opacity: 1 }, { duration: 1 })
		
		// console.log('Starting STANZA 0 animation...')
		// stanza0TW_P1?.start()
	}

	const onRefresh = () => {
		window.location.reload()
	}
	// #endregion

	// #region START ANIMATIONS =====================================================================================
	// const startAnimation = async(wrapperAnimate: any, wrapperScope: AnimationScope<any>, wrapperAnimationProperties: any, wrapperTransitionProperties: any, stanzaAnimate: any, stanzaScope: AnimationScope<any>, stanzaAnimationProperties: any, stanzaTransitionProperties: any, typeWriter: TypewriterClass) => {
	// 	wrapperAnimate(wrapperScope.current, wrapperAnimationProperties, wrapperTransitionProperties)
	// 	await stanzaAnimate(stanzaScope.current, stanzaAnimationProperties, stanzaTransitionProperties)
	// 	typeWriter?.start()
	// }

	// Stanza 5 Start Animation (CUSTOM, couplet)
	// const startStanza5Animation = async() => {
	// 	stanza5WrapperAnimate(stanza5WrapperScope.current, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties)
	// 	await stanza5Animate(stanza5Scope.current, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties)
	// 	stanza5TW_P1?.start()
	// 	setTimeout(() => {
	// 		stanza5TW_P2?.start()
	// 	}, 8000)
	// }
	// #endregion ==============================================================================================

	// #region STOP ANIMATIONS ======================================================================================
	
	// Stanza 1 STOP Animation
	const stopStanza0Animation = () => {
		stanza0TW_P1?.stop()
	}
	
	const stopStanza1Animation = () => {
		stanza1TW_P1?.stop()
	}

	// Stanza 2 STOP Animation
	const stopStanza2Animation = () => {
		stanza2TW_P1?.stop()
	}

	// Stanza 3 STOP Animation
	const stopStanza3Animation = () => {
		stanza3TW_P1?.stop()
	}

	// Stanza 4 STOP Animation
	const stopStanza4Animation = () => {
		stanza4TW_P1?.stop()
	}

	// Stanza 5 STOP Animation (two)
	const stopStanza5Animation = () => {
		stanza5TW_P1?.stop()
		stanza5TW_P2?.stop()
	}

	// Stanza 6 STOP Animation
	const stopStanza6Animation = () => {
		stanza6TW_P1?.stop()
	}

	// Stanza 7 STOP Animation
	const stopStanza7Animation = () => {
		stanza7TW_P1?.stop()
	}

	// Stanza 8 STOP Animation
	const stopStanza8Animation = () => {
		stanza8TW_P1?.stop()
	}

	// Stanza 9 STOP Animation
	const stopStanza9Animation = () => {
		stanza9TW_P1?.stop()
	}
	// #endregion ==============================================================================================
	
	// #region USE-EFFECTS
	useEffect(() => {
		audioPlayer.load('/music/tears-in-my-eyes-music.mp3', {
			autoplay: false,
		})
	}, [])
	// #endregion

	return (
		<div className={styles.pageContainer}>

			{/* NAVIGATION */}
			<LiteratureNavigation scope={headerTitleScope} literatureTitle={literature.title} />

			{/* HEADER */}
			<LiteratureHeader scope={headerScope} literatureTitle={literature.title} />

			{/* STORY SECTION */}
			<motion.section ref={storyContainerScope} className={styles.storyContainer}>
				<div>
					<LiteratureVolumeNotice scope={volumeNoticeScope} />
					<LiteratureBeginButton disabled={begin} scope={beginButtonScope} onBegin={onBegin} />
					<br/>
					<br/>

					{/* STANZA #0 "the weight of responsibility..."==================================================================================================== */}
					{/* <div className={styles.newStanzaWrapper}>
						<article ref={stanza0Scope} className={`${styles.stanza} ${styles.stanza0}`}>
							{ literature?.stanzas[0]?.part1 && <Typewriter
								onInit={(typewriter: TypewriterClass) => {
									if (!literature?.stanzas[0]?.part1) return;

									setStanza0TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.pauseFor(14)
									typewriter.typeString(literature.stanzas[0].part1)
								}}
								options={typewriterOptions}
							/> }
						</article>

						{ begin && 
							<CustomBouncingDownArrow initial={initialOptions} whileInView={whileInViewOptions} transition={{
								duration: 2,
								delay: 18
							}} />
						}

						<div ref={stanza0WrapperScope} className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper0}`}></div>
					</div> */}

					<LiteratureStanza
						stanzaNumber={0}
						literature={literature}
						isEnabled={begin}
						stopAnimation={stopStanza0Animation}
						initialOptions
						whileInViewOptions
						transitionOptions
						typeWriterOptions={typewriterOptions}
						typeWriterInitialPauseInSeconds={14}
						useContinueArrow={true}
						continueArrowTransitionOptions={{ duration: 2, delay: 14 }}
						useEndSpacer={true}
					/>

					{ begin && 
						<div>
							<VerticalSpacer />
							
							{/* STANZA #1 "Day in and day out..." ==================================================================================================== */}
							<LiteratureStanza
								stanzaNumber={1}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza1Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 12 }}
								useEndSpacer={true}
							/>

							{/* STANZA #2 "The individual who is always present..."===================================================================================== */}
							<LiteratureStanza
								stanzaNumber={2}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza2Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 9 }}
								useEndSpacer={true}
							/>

							{/* STANZA #3 "Yet, despite their dedication..."===================================================================================== */}
							<LiteratureStanza
								stanzaNumber={3}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza3Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 9 }}
								useEndSpacer={true}
							/>

							{/* STANZA #4 "It can be a lonely journey..."===================================================================================== */}

							{/* <motion.div 
								className={styles.newStanzaWrapper}
								initial={initialOptions}
								whileInView={whileInViewOptions}
								transition={transitionOptions}
								onViewportEnter={() => startAnimation(stanza4WrapperAnimate, stanza4WrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanza4Animate, stanza4Scope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, stanza4TW_P1 ? stanza4TW_P1 : new TypewriterClass("", {}))}
								onViewportLeave={() => stopStanza4Animation()}
							>
								<article ref={stanza4Scope} className={`${styles.stanza} ${styles.stanza4}`}>
									{ literature?.stanzas[4]?.part1 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[4]?.part1) return;

											setStanza4TW_P1(typewriter)
											typewriter.changeDelay(45)
											typewriter.typeString(literature.stanzas[4].part1)
										}}
										options={typewriterOptions}
									/> }
								</article>

								<CustomBouncingDownArrow initial={initialOptions} whileInView={whileInViewOptions} transition={{
									duration: 2,
									delay: 8
								}} />

								<div 
									ref={stanza4WrapperScope} 
									className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper4}`}>
								</div>
							</motion.div>

							<VerticalSpacer /> */}

							<LiteratureStanza
								stanzaNumber={4}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza4Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 8 }}
								useEndSpacer={true}
							/>

							{/* STANZA #5 "As they pour their heart..."===================================================================================== */}

							{/* <motion.div 
								className={styles.newStanzaWrapper}
								initial={initialOptions}
								whileInView={whileInViewOptions}
								transition={transitionOptions}
								onViewportEnter={() => startStanza5Animation()}
								onViewportLeave={() => stopStanza5Animation()}
							>
								<article ref={stanza5Scope} className={`${styles.stanza} ${styles.stanza5}`}>

									{ literature?.stanzas[5]?.part1 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[5]?.part1) return;

											setStanza5TW_P1(typewriter)
											typewriter.changeDelay(45)
											typewriter.typeString(literature.stanzas[5].part1)
										}}
										options={typewriterOptions}
									/> }

									<div className="my-3"></div>

									{ literature?.stanzas[5]?.part2 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[5]?.part2) return;

											setStanza5TW_P2(typewriter)
											typewriter.changeDelay(90)
											typewriter.typeString(literature.stanzas[5].part2)
										}}
										options={typewriterOptions}
									/> }
								</article>

								<CustomBouncingDownArrow initial={initialOptions} whileInView={whileInViewOptions} transition={{
									duration: 2,
									delay: 18
								}} />

								<div 
									ref={stanza5WrapperScope} 
									className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper5}`}>
								</div>
							</motion.div>

							<VerticalSpacer /> */}

							<LiteratureStanza
								stanzaNumber={5}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza5Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 18 }}
								useEndSpacer={true}
							/>

							{/* STANZA #6 "Longing for a moment of respite..."===================================================================================== */}
							{/* <motion.div 
								className={styles.newStanzaWrapper}
								initial={initialOptions}
								whileInView={whileInViewOptions}
								transition={transitionOptions}
								onViewportEnter={() => startAnimation(stanza6WrapperAnimate, stanza6WrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanza6Animate, stanza6Scope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, stanza6TW_P1 ? stanza6TW_P1 : new TypewriterClass("", {}))}
								onViewportLeave={() => stopStanza6Animation()}
							>
								<article ref={stanza6Scope} className={`${styles.stanza} ${styles.stanza6}`}>
									{ literature?.stanzas[6]?.part1 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[6]?.part1) return;

											setStanza6TW_P1(typewriter)
											typewriter.changeDelay(45)
											typewriter.typeString(literature.stanzas[6].part1)
										}}
										options={typewriterOptions}
									/> }
								</article>

								<CustomBouncingDownArrow initial={initialOptions} whileInView={whileInViewOptions} transition={{
									duration: 2,
									delay: 9
								}} />

								<div 
									ref={stanza6WrapperScope} 
									className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper6}`}>
								</div>
							</motion.div>

							<VerticalSpacer /> */}

							<LiteratureStanza
								stanzaNumber={6}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza6Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 9 }}
								useEndSpacer={true}
							/>

							{/* STANZA #7 "giving their all..."===================================================================================== */}
							{/* <motion.div 
								className={styles.newStanzaWrapper}
								initial={initialOptions}
								whileInView={whileInViewOptions}
								transition={transitionOptions}
								onViewportEnter={() => startAnimation(stanza7WrapperAnimate, stanza7WrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanza7Animate, stanza7Scope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, stanza7TW_P1 ? stanza7TW_P1 : new TypewriterClass("", {}))}
								onViewportLeave={() => stopStanza7Animation()}
							>
								<article ref={stanza7Scope} className={`${styles.stanza} ${styles.stanza7}`}>
									{ literature?.stanzas[7]?.part1 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[7]?.part1) return;

											setStanza7TW_P1(typewriter)
											typewriter.changeDelay(45)
											typewriter.typeString(literature.stanzas[7].part1)
										}}
										options={typewriterOptions}
									/> }
								</article>

								<CustomBouncingDownArrow initial={initialOptions} whileInView={whileInViewOptions} transition={{
									duration: 2,
									delay: 11
								}} />

								<div 
									ref={stanza7WrapperScope} 
									className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper7}`}>
								</div>
							</motion.div>

							<VerticalSpacer /> */}

							<LiteratureStanza
								stanzaNumber={7}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza7Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 11 }}
								useEndSpacer={true}
							/>

							{/* STANZA #8 "But until that day comes..."===================================================================================== */}
							{/* <motion.div 
								className={styles.newStanzaWrapper}
								initial={initialOptions}
								whileInView={whileInViewOptions}
								transition={transitionOptions}
								onViewportEnter={() => startAnimation(stanza8WrapperAnimate, stanza8WrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanza8Animate, stanza8Scope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, stanza8TW_P1 ? stanza8TW_P1 : new TypewriterClass("", {}))}
								onViewportLeave={() => stopStanza8Animation()}
							>
								<article ref={stanza8Scope} className={`${styles.stanza} ${styles.stanza8}`}>
									{ literature?.stanzas[8]?.part1 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[8]?.part1) return;

											setStanza8TW_P1(typewriter)
											typewriter.changeDelay(45)
											typewriter.typeString(literature.stanzas[8].part1)
										}}
										options={typewriterOptions}
									/> }
								</article>

								<CustomBouncingDownArrow initial={initialOptions} whileInView={whileInViewOptions} transition={{
									duration: 2,
									delay: 10
								}} />

								<div 
									ref={stanza8WrapperScope} 
									className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper8}`}>
								</div>
							</motion.div>

							<VerticalSpacer /> */}

							<LiteratureStanza
								stanzaNumber={8}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza8Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={true}
								continueArrowTransitionOptions={{ duration: 2, delay: 10 }}
								useEndSpacer={true}
							/>

							{/* STANZA #9 "knowing that their love..."===================================================================================== */}
							{/* <motion.div 
								className={styles.newStanzaWrapper}
								initial={initialOptions}
								whileInView={whileInViewOptions}
								transition={transitionOptions}
								onViewportEnter={() => startAnimation(stanza9WrapperAnimate, stanza9WrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanza9Animate, stanza9Scope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, stanza9TW_P1 ? stanza9TW_P1 : new TypewriterClass("", {}))}
								onViewportLeave={() => stopStanza9Animation()}
							>
								<article ref={stanza9Scope} className={`${styles.stanza} ${styles.stanza9}`}>
									{ literature?.stanzas[9]?.part1 && <Typewriter
										onInit={(typewriter: TypewriterClass) => {
											if (!literature?.stanzas[9]?.part1) return;

											setStanza9TW_P1(typewriter)
											typewriter.changeDelay(45)
											typewriter.typeString(literature.stanzas[9].part1)
										}}
										options={typewriterOptions}
									/> }
								</article>

								<div 
									ref={stanza9WrapperScope} 
									className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper9}`}>
								</div>
							</motion.div>

							<VerticalSpacer /> */}

							<LiteratureStanza
								stanzaNumber={9}
								literature={literature}
								isEnabled={begin}
								stopAnimation={stopStanza9Animation}
								initialOptions
								whileInViewOptions
								transitionOptions
								typeWriterOptions={typewriterOptions}
								useContinueArrow={false}
								useEndSpacer={true}
							/>

							{/* ENDING CARD ===================================================================================== */}

							<EndCard onRestart={onRefresh} />
						</div>
					}
				</div>
			</motion.section>
		</div>
	)
}
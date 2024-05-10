"use client";

import Link from 'next/link'
// import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimate, useInView } from 'framer-motion'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import styles from './page.module.scss'

export type TStanza = {
	id: number;
	part1: string;
	part2: string | undefined | null;
}

export type TLiterature = {
	title: string;
	type: "poem" | "prose" | "story" | "other";
	stanzas: TStanza[];
}

// #region Typewriter Options
const typewriterOptions = {
	wrapperClassName: styles.typewriterWrapper,
	cursorClassName: styles.typewriterCursor
}

const initialOptions = {
	opacity: 0
}

const whileInViewOptions = {
	opacity: 1
}

const transitionOptions = {
	duration: 3
}
// #endregion

export const SpacerComponent = () => (
	<div className="my-96"></div>
)

export default function TheJuiceProse () {

	const audioPlayer = useGlobalAudioPlayer();

	const literature: TLiterature = {
		title: "The Juice",
		type: "prose",
		stanzas: [
			{
				id: 0,
				part1: "The weight of responsibility that falls on the shoulders of the only child who constantly aids their family members in times of need is a burden carried with a heavy heart.",
				part2: null
			},
			{
				id: 1,
				part1: "Day in and day out, they are there, tirelessly attending to the needs of their loved ones, sacrificing personal time and relationships to ensure their comfort and well-being.",
				part2: null
			},
			{
				id: 2,
				part1: "The individual who is always present, who never shies away from difficult tasks, providing unwavering support through it all.",
				part2: null,
			},
			{
				id: 3,
				part1: "Yet, despite their dedication and selfless commitment, the love they yearn to receive in return, seem to be elusive.",
				part2: null
			},
			{
				id: 4,
				part1: "It can be a lonely journey, paved with exhaustion, frustration, and a lingering sense of isolation.",
				part2:  null
			},
			{
				id: 5,
				part1: "As they pour their heart and soul into caring for their family members, they can't help but wonder if anyone truly sees the sacrifices they make,",
				part2: "if anyone truly understands the toll it takes on them."
			},
			{
				id: 6,
				part1: "Longing for a moment of respite, a chance to tend to their own needs, the demands Of others Always outweigh their own,",
				part2: null
			},
			{
				id: 7,
				part1: "giving their all without expecting much in return, hoping that someday, someone will recognize the depth of their devotion and the magnitude of their sacrifice.",
				part2: null
			},
			{
				id: 8,
				part1: "But until that day comes, they will continue to stand strong, to persevere through weariness and loneliness,",
				part2: null
			},
			{
				id: 9,
				part1: "knowing that their love and dedication are the greatest gifts they can offer to those they hold dear, even if it goes unnoticed and unappreciated.",
				part2: null
			}
		]
	}

	// #region STANZA STATES ===============================================================================
	
	// Stanza 0 State
	const stanza0WrapperRef = useRef(null)
	const stanza0_InView = useInView({ root: stanza0WrapperRef })
	const [stanza0TW_P1, setStanza0TW_P1] = useState<TypewriterClass>()

	// Stanza 1 State
	const stanza1WrapperRef = useRef(null)
	const stanza1_InView = useInView({ root: stanza1WrapperRef })
	const [stanza1TW_P1, setStanza1TW_P1] = useState<TypewriterClass>()

	// Stanza 2 State
	const stanza2WrapperRef = useRef(null)
	const stanza2_InView = useInView({ root: stanza2WrapperRef })
	const [stanza2TW_P1, setStanza2TW_P1] = useState<TypewriterClass>()

	// Stanza 3 State
	const stanza3WrapperRef = useRef(null)
	const stanza3_InView = useInView({ root: stanza3WrapperRef })
	const [stanza3TW_P1, setStanza3TW_P1] = useState<TypewriterClass>()

	// Stanza 4 State
	const stanza4WrapperRef = useRef(null)
	const stanza4_InView = useInView({ root: stanza4WrapperRef })
	const [stanza4TW_P1, setStanza4TW_P1] = useState<TypewriterClass>()

	// Stanza 5 State (two)
	const stanza5WrapperRef = useRef(null)
	const stanza5_InView = useInView({ root: stanza5WrapperRef })
	const [stanza5TW_P1, setStanza5TW_P1] = useState<TypewriterClass>()
	const [stanza5TW_P2, setStanza5TW_P2] = useState<TypewriterClass>()

	// Stanza 6 State
	const stanza6WrapperRef = useRef(null)
	const stanza6_InView = useInView({ root: stanza6WrapperRef })
	const [stanza6TW_P1, setStanza6TW_P1] = useState<TypewriterClass>()

	// Stanza 7 State
	const stanza7WrapperRef = useRef(null)
	const stanza7_InView = useInView({ root: stanza7WrapperRef })
	const [stanza7TW_P1, setStanza7TW_P1] = useState<TypewriterClass>()

	// Stanza 8 State
	const stanza8WrapperRef = useRef(null)
	const stanza8_InView = useInView({ root: stanza8WrapperRef })
	const [stanza8TW_P1, setStanza8TW_P1] = useState<TypewriterClass>()

	// Stanza 9 State
	const stanza9WrapperRef = useRef(null)
	const stanza9_InView = useInView({ root: stanza6WrapperRef })
	const [stanza9TW_P1, setStanza9TW_P1] = useState<TypewriterClass>()

	// #endregion

	// #region ANIMATION DEFINITIONS ============================================================================
	
	const [storyContainerScope, storyContainerAnimate] = useAnimate()
	const [headerScope, headerAnimate] = useAnimate()
	const [headerTitleScope, headerTitleAnimate] = useAnimate()
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

	// Stanza 10 Animations
	const [stanza10WrapperScope, stanza10WrapperAnimate] = useAnimate()
	const [stanza10Scope, stanza10Animate] = useAnimate()
	// #endregion

	// #region ACTIONS =====================================================================================
	const onBegin = async() => {

		// Begin music
		setTimeout(() => {
			audioPlayer.play()
		}, 3000)

		// 1. Fade out the Begin button
		beginButtonAnimate(beginButtonScope.current, { opacity: 0 }, { duration: 3 })
		headerAnimate(headerScope.current, { opacity: 0 }, { duration: 3 })
		await headerTitleAnimate(headerTitleScope.current, { opacity: 1, color: '#B23056' }, { duration: 3, delay: 2 })

		const headerElm = document.getElementById('header')
		if (headerElm) {
			headerElm.style.display = 'none';
		}	

		// await storyContainerAnimate(storyContainerScope.current, { y: -180 }, { duration: 1 })
		await stanza0WrapperAnimate(stanza0WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza0Animate(stanza0Scope.current, { opacity: 1 }, { duration: 1 })
		
		console.log('Starting STANZA 0 animation...')
		stanza0TW_P1?.start()
		
		// setTimeout(() => {
		// 	stanza1TW_P2?.start()
		// }, 12000)
	}

	const onRefresh = () => {
		window.location.reload()
	}
	// #endregion

	// #region START ANIMATIONS ===============================================================================

	// Stanza 0 Start Animation
	const startStanza0Animation = async() => {
		console.log('Starting STANZA 0 animation...')
		await stanza0WrapperAnimate(stanza0WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza0Animate(stanza0Scope.current, { opacity: 1 }, { duration: 1 })
		stanza0TW_P1?.start()
	}

	// Stanza 1 Start Animation
	const startStanza1Animation = async() => {
		console.log('Starting STANZA 1 animation...')
		await stanza1WrapperAnimate(stanza1WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza1Animate(stanza1Scope.current, { opacity: 1 }, { duration: 1 })
		stanza1TW_P1?.start()
	}

	// Stanza 2 Start Animation
	const startStanza2Animation = async() => {
		console.log('Starting STANZA 2 animation...')
		await stanza2WrapperAnimate(stanza2WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza2Animate(stanza2Scope.current, { opacity: 1 }, { duration: 1 })
		stanza2TW_P1?.start()
		// setTimeout(() => {
		// 	stanza2TW_P2?.start()
		// }, 3000)
	}

	// Stanza 3 Start Animation
	const startStanza3Animation = async() => {
		console.log('Starting STANZA 3 animation...')
		await stanza3WrapperAnimate(stanza3WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza3Animate(stanza3Scope.current, { opacity: 1 }, { duration: 1 })
		stanza3TW_P1?.start()
		// setTimeout(() => {
		// 	stanza3TW_P2?.start()
		// }, 3000)
	}

	// Stanza 4 Start Animation
	const startStanza4Animation = async() => {
		console.log('Starting STANZA 4 animation...')
		await stanza4WrapperAnimate(stanza4WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza4Animate(stanza4Scope.current, { opacity: 1 }, { duration: 1 })
		stanza4TW_P1?.start()
		// setTimeout(() => {
		// 	stanza4TW_P2?.start()
		// }, 3000)
	}

	// Stanza 5 Start Animation
	const startStanza5Animation = async() => {
		console.log('Starting STANZA 5 animation...')
		await stanza5WrapperAnimate(stanza5WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza5Animate(stanza5Scope.current, { opacity: 1 }, { duration: 1 })
		stanza5TW_P1?.start()
		setTimeout(() => {
			stanza5TW_P2?.start()
		}, 8000)
	}

	// Stanza 6 Start Animation
	const startStanza6Animation = async() => {
		console.log('Starting STANZA 6 animation...')
		await stanza6WrapperAnimate(stanza6WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza6Animate(stanza6Scope.current, { opacity: 1 }, { duration: 1 })
		stanza6TW_P1?.start()
	}

	// Stanza 7 Start Animation
	const startStanza7Animation = async() => {
		console.log('Starting STANZA 7 animation...')
		await stanza7WrapperAnimate(stanza7WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza7Animate(stanza7Scope.current, { opacity: 1 }, { duration: 1 })
		stanza7TW_P1?.start()
		// setTimeout(() => {
		// 	stanza7TW_P2?.start()
		// }, 3000)
	}

	// Stanza 8 Start Animation
	const startStanza8Animation = async() => {
		console.log('Starting STANZA 8 animation...')
		await stanza8WrapperAnimate(stanza8WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza8Animate(stanza8Scope.current, { opacity: 1 }, { duration: 1 })
		stanza8TW_P1?.start()
		// setTimeout(() => {
		// 	stanza8TW_P2?.start()
		// }, 3000)
	}

	// Stanza 9 Start Animation
	const startStanza9Animation = async() => {
		console.log('Starting STANZA 9 animation...')
		await stanza9WrapperAnimate(stanza9WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza9Animate(stanza9Scope.current, { opacity: 1 }, { duration: 1 })
		stanza9TW_P1?.start()
		// setTimeout(() => {
		// 	stanza9TW_P2?.start()
		// }, 3000)
	}
	// #endregion ==============================================================================================

	// #region STOP ANIMATIONS =================================================================================
	
	// Stanza 1 STOP Animation
	const stopStanza1Animation = () => {
		console.log('Stopping STANZA 1 animation.')
		stanza1TW_P1?.stop()
	}

	// Stanza 2 STOP Animation
	const stopStanza2Animation = () => {
		console.log('Stopping STANZA 2 animation.')
		stanza2TW_P1?.stop()
	}

	// Stanza 3 STOP Animation
	const stopStanza3Animation = () => {
		console.log('Stopping STANZA 3 animation.')
		stanza3TW_P1?.stop()
	}

	// Stanza 4 STOP Animation
	const stopStanza4Animation = () => {
		console.log('Stopping STANZA 4 animation.')
		stanza4TW_P1?.stop()
	}

	// Stanza 5 STOP Animation (two)
	const stopStanza5Animation = () => {
		console.log('Stopping STANZA 5 animation.')
		stanza5TW_P1?.stop()
		stanza5TW_P2?.stop()
	}

	// Stanza 6 STOP Animation
	const stopStanza6Animation = () => {
		console.log('Stopping STANZA 6 animation.')
		stanza6TW_P1?.stop()
	}

	// Stanza 7 STOP Animation
	const stopStanza7Animation = () => {
		console.log('Stopping STANZA 7 animation.')
		stanza7TW_P1?.stop()
	}

	// Stanza 8 STOP Animation
	const stopStanza8Animation = () => {
		console.log('Stopping STANZA 8 animation.')
		stanza8TW_P1?.stop()
	}

	// Stanza 9 STOP Animation
	const stopStanza9Animation = () => {
		console.log('Stopping STANZA 9 animation.')
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
			<div className={`flex items-center justify-between p-3 border-2 border-gray-700 ${styles.navigation}`}>
				<Link href="/tales" className={`${styles.linkToTales} pl-3 hover:text-amber-600 transition-colors duration-200`}>Back to Tales</Link>
				<motion.div onClick={onRefresh} className={styles.navStoryTitle} ref={headerTitleScope} initial={{ opacity: 0 }}>{literature.title}</motion.div>
			</div>

			{/* HEADER */}
			<motion.header id="header" ref={headerScope} className={styles.header}>
				<h1 className={styles.title}>{literature.title}</h1>
			</motion.header>

			{/* STORY SECTION */}
			<motion.section ref={storyContainerScope} className={styles.storyContainer}>
				<div>
					{/* Begin Button */}
					<motion.div ref={beginButtonScope} className="flex items-center justify-center p-8" initial={{ opacity: 1 }}>
						<button type="button" onClick={onBegin} className="bg-rose-800 hover:bg-rose-900 px-6 py-3 rounded-lg font-bold transition-colors duration-100">Begin</button>
					</motion.div>

					{/* STANZA #0 ==================================================================================================== */}
					<div className={styles.newStanzaWrapper}>
						<article ref={stanza0Scope} className={`${styles.stanza} ${styles.stanza0}`}>
							{ literature?.stanzas[0]?.part1 && <Typewriter
								onInit={(typewriter: TypewriterClass) => {
									if (!literature?.stanzas[0]?.part1) return;

									setStanza0TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.pauseFor(19)
									typewriter.typeString(literature.stanzas[0].part1)
								}}
								options={typewriterOptions}
							/> }
						</article>
						<div 
							ref={stanza0WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper0}`}>
						</div>
					</div>

					<SpacerComponent />

					{/* STANZA 1 ==================================================================================================== */}
					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza1Animation()}
						onViewportLeave={() => stopStanza1Animation()}
					>
						<article ref={stanza1Scope} className={`${styles.stanza} ${styles.stanza0}`}>
							{ literature?.stanzas[1]?.part1 && <Typewriter
								onInit={(typewriter: TypewriterClass) => {
									if (!literature?.stanzas[1]?.part1) return;

									setStanza1TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.typeString(literature.stanzas[1].part1)
								}}
								options={typewriterOptions}
							/> }
						</article>
						<div 
							ref={stanza1WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper1}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #2 ===================================================================================== */}
					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza2Animation()}
						onViewportLeave={() => stopStanza2Animation()}
					>
						<article ref={stanza2Scope} className={`${styles.stanza} ${styles.stanza2}`}>
							{ literature?.stanzas[2]?.part1 && <Typewriter
								onInit={(typewriter: TypewriterClass) => {
									if (!literature?.stanzas[2]?.part1) return;

									setStanza2TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.typeString(literature.stanzas[2].part1)
								}}
								options={typewriterOptions}
							/> }
						</article>
						<div 
							ref={stanza2WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper2}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #3 ===================================================================================== */}

					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza3Animation()}
						onViewportLeave={() => stopStanza3Animation()}
					>
						<article ref={stanza3Scope} className={`${styles.stanza} ${styles.stanza3}`}>
							{ literature?.stanzas[3]?.part1 && <Typewriter
								onInit={(typewriter: TypewriterClass) => {
									if (!literature?.stanzas[3]?.part1) return;

									setStanza3TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.typeString(literature.stanzas[3].part1)
								}}
								options={typewriterOptions}
							/> }
						</article>
						<div 
							ref={stanza3WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper3}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #4 ===================================================================================== */}

					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza4Animation()}
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
						<div 
							ref={stanza4WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper4}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #5 ===================================================================================== */}

					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza5Animation()}
						onViewportLeave={() => stopStanza5Animation()}
					>
						<article ref={stanza5Scope} className={`${styles.stanza} ${styles.stanza5}`}>

							{/* STANZA 5 : PART 1 */}
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

							{/* STANZA 5 : PART 2 */}
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
						<div 
							ref={stanza5WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper5}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #6 ===================================================================================== */}
					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza6Animation()}
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
						<div 
							ref={stanza6WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper6}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #7 ===================================================================================== */}
					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza7Animation()}
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
						<div 
							ref={stanza7WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper7}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #8 ===================================================================================== */}
					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza8Animation()}
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
						<div 
							ref={stanza8WrapperScope} 
							className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper8}`}>
						</div>
					</motion.div>

					<SpacerComponent />

					{/* STANZA #9 ===================================================================================== */}
					<motion.div 
						className={styles.newStanzaWrapper}
						initial={initialOptions}
						whileInView={whileInViewOptions}
						transition={transitionOptions}
						onViewportEnter={() => startStanza9Animation()}
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

				</div>
			</motion.section>
		</div>
	)
}
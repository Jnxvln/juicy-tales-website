"use client";

import Link from 'next/link'
// import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { motion, useTime, useAnimate, useInView } from 'framer-motion'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import styles from './page.module.scss'

export default function ChefsSymphony () {

	const title = "Chef's Symphony"
	// const verse1Text = "In the kitchen's fiery forge, where passions blaze,\nA chef's soul ignites in a fervent haze."
	// const verse2Text = "With hands that sculp, with ardor that ignites,\nThey conjure dreams in culinary delights."

	const time = useTime()

	// #region STANZA STATES ===============================================================================
	
	// Stanza 1 State
	const [stanza1TW_P1, setStanza1TW_P1] = useState<TypewriterClass>()
	const [stanza1TW_P2, setStanza1TW_P2] = useState<TypewriterClass>()

	// Stanza 2 State
	
	const stanza2WrapperRef = useRef(null)
	const stanza2_InView = useInView({ root: stanza2WrapperRef })
	const [stanza2TW_P1, setStanza2TW_P1] = useState<TypewriterClass>()
	const [stanza2TW_P2, setStanza2TW_P2] = useState<TypewriterClass>()

	useEffect(() => {
		if (stanza2_InView) {
			console.log('Stanza 2 IN VIEW')
		} else {
			console.log('Stanza 2 OUT OF VIEW')
		}
	}, [stanza2_InView])

	// #endregion

	// #region ANIMATIONS ============================================================================
	
	const [storyContainerScope, storyContainerAnimate] = useAnimate()
	const [headerScope, headerAnimate] = useAnimate()
	const [headerTitleScope, headerTitleAnimate] = useAnimate()
	const [beginButtonScope, beginButtonAnimate] = useAnimate()

	// Stanza 1 Animations
	const [stanza1WrapperScope, stanza1WrapperAnimate] = useAnimate()
	const [stanza1Scope, stanza1Animate] = useAnimate()

	// Stanza 2 Animations
	const stanza2WrapperScopeRef = useRef(null)
	const [stanza2WrapperScope, stanza2WrapperAnimate] = useAnimate()
	const [stanza2Scope, stanza2Animate] = useAnimate()
	// #endregion

	// #region ACTIONS =====================================================================================
	const onBegin = async() => {
		// 1. Fade out the Begin button
		beginButtonAnimate(beginButtonScope.current, { opacity: 0 }, { duration: 3 })
		headerAnimate(headerScope.current, { opacity: 0 }, { duration: 3 })
		await headerTitleAnimate(headerTitleScope.current, { opacity: 1, color: '#B23056' }, { duration: 3, delay: 2 })
		await storyContainerAnimate(storyContainerScope.current, { y: -180 }, { duration: 1 })
		await stanza1WrapperAnimate(stanza1WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza1Animate(stanza1Scope.current, { opacity: 1 }, { duration: 1 })
		stanza1TW_P1?.start()
		setTimeout(() => {
			stanza1TW_P2?.start()
		}, 3000)
	}

	const startStanza2Animation = async() => {
		console.log('Starting STANZA 2 animation...')
		await stanza2WrapperAnimate(stanza2WrapperScope.current, { opacity: 1 }, { duration: 1.5 })
		await stanza2Animate(stanza2Scope.current, { opacity: 1 }, { duration: 1 })
		stanza2TW_P1?.start()
		setTimeout(() => {
			stanza2TW_P2?.start()
		}, 3000)
	}

	const stopStanza2Animation = () => {
		console.log('Stopping STANZA 2 animation.')
		stanza2TW_P1?.stop()
		stanza2TW_P2?.stop()
	}
	// #endregion
	

	return (
		<div className={styles.pageContainer}>

			{/* NAVIGATION */}
			<div className={`${styles.navigation} flex items-center justify-between border-2 border-gray-700`}>
				<Link href="/tales" className={`${styles.linkToTales} pl-3`}>Back to Tales</Link>
				<motion.div className="text-2xl" ref={headerTitleScope} initial={{ opacity: 0 }}>Chef{"'"}s Symphony</motion.div>
			</div>

			{/* HEADER */}
			<motion.header ref={headerScope} className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
			</motion.header>

			{/* STORY SECTION */}
			<motion.section ref={storyContainerScope} className={styles.storyContainer}>
				<div>
					{/* 1. Begin Button */}
					<motion.div ref={beginButtonScope} className="flex items-center justify-center p-8" initial={{ opacity: 1 }}>
						<button onClick={onBegin} className="bg-rose-800 hover:bg-rose-900 px-6 py-3 rounded-lg font-bold transition-colors duration-100" onClick={onBegin}>Begin</button>
					</motion.div>

					{/* 2. Stanza 1 */}
					<article 
						ref={stanza1WrapperScope} 
						className={`${styles.stanzaWrapper} ${styles.stanza1Wrapper}`}>
						<div ref={stanza1Scope} className={`${styles.stanza} ${styles.stanza1}`}>
							<Typewriter
								onInit={(typewriter: TypewriterClass) => {
									setStanza1TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.pauseFor(19)
									typewriter.typeString("In the kitchen's fiery forge, where passions blaze,")
								}}
								options={{
									wrapperClassName: styles.typewriterWrapper,
									cursorClassName: styles.typewriterCursor
								}}
							/>
							<Typewriter
								onInit={(typewriter: TypewriterClass) => {
									setStanza1TW_P2(typewriter)
									typewriter.changeDelay(45)
									typewriter.typeString("A chef's soul ignites in a fervent haze.")
								}}
								options={{
									wrapperClassName: styles.typewriterWrapper,
									cursorClassName: styles.typewriterCursor
								}}
							/>
							<div></div>
						</div>
					</article>

					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>

					{/* 3. Stanza 2 */}
					<motion.article 
						ref={stanza2WrapperScope}
						className={`${styles.stanzaWrapper} ${styles.stanza2Wrapper}`}
						initial={{
							opacity: 0
						}}
						whileInView={{
							opacity: 1
						}}
						onViewportEnter={() => startStanza2Animation()}
						onViewportLeave={() => stopStanza2Animation()}
						transition={{
							duration: 3
						}}
					>
						<div ref={stanza2Scope} className={`${styles.stanza} ${styles.stanza2}`}>
							<Typewriter
								onInit={(typewriter: TypewriterClass) => {
									setStanza2TW_P1(typewriter)
									typewriter.changeDelay(45)
									typewriter.pauseFor(19)
									typewriter.typeString("[I can't find the rest of this poem, its words have escaped me,")
								}}
								options={{
									wrapperClassName: styles.typewriterWrapper,
									cursorClassName: styles.typewriterCursor
								}}
							/>
							<Typewriter
								onInit={(typewriter: TypewriterClass) => {
									setStanza2TW_P2(typewriter)
									typewriter.changeDelay(45)
									typewriter.typeString("Help me out, Juicey ole' pal! I lack the next words of your poetry ^_^]")
								}}
								options={{
									wrapperClassName: styles.typewriterWrapper,
									cursorClassName: styles.typewriterCursor
								}}
							/>
							<div></div>
						</div>
					</motion.article>
				</div>
			</motion.section>
		</div>
	)
}
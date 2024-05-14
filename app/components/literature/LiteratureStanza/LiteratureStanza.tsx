"use client";

import { useState, useEffect } from 'react';
import { AnimationScope, motion, useAnimate } from 'framer-motion';
import VerticalSpacer from '../../VerticalSpacer/VerticalSpacer';
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import styles from './LiteratureStanza.module.scss'
import CustomBouncingDownArrow from '../../CustomBouncingDownArrow/CustomBouncingDownArrow';
import { 
	defaultWrapperAnimationProperties, 
	defaultWrapperTransitionProperties, 
	defaultStanzaAnimationProperties, 
	defaultStanzaTransitionProperties 
} from '@/app/data/DefaultProperties'
import { TLiterature } from '@/app/Types';

type TLiteratureStanzaParams = {
	stanzaNumber: number,
	literature: TLiterature,
	isEnabled: boolean,
	initialOptions: Object,
	whileInViewOptions: Object,
	transitionOptions: Object,
	typeWriterInitialPauseInSeconds?: number,
	continueArrowTransitionOptions?: Object,
	useContinueArrow: boolean,
	useEndSpacer: boolean
}

export default function LiteratureStanza ({
	stanzaNumber,
	literature,
	isEnabled,
	initialOptions,
	whileInViewOptions,
	transitionOptions,
	typeWriterInitialPauseInSeconds,
	continueArrowTransitionOptions,
	useContinueArrow,
	useEndSpacer
}: TLiteratureStanzaParams) {

	// #region VARIABLES
	const [typeWriter, setTypeWriter] = useState<TypewriterClass>()
	const [typeWriter2, setTypeWriter2] = useState<TypewriterClass>()
	const [stanzaImageWrapperScope, stanzaImageWrapperAnimate] = useAnimate()
	const [stanzaScope, stanzaAnimate] = useAnimate()
	const [imageBaseUrl] = useState("/images")
	const typeWriterOptions = {
		wrapperClassName: styles.typewriterWrapper,
		cursorClassName: styles.typewriterCursor
	}
	// #endregion

	// #region ACTIONS
	const determineTitleUrl = () => {
		if (!literature || !literature.title) return;

		let _titleUrl = literature.title
		_titleUrl = _titleUrl.toLowerCase()
		_titleUrl = _titleUrl.replace(/\s+/g, "_")
		_titleUrl = _titleUrl.trim()

		return _titleUrl
	}

	const convertStanzaNumberToString = (stanzaNumber: number) => {
		let _numberString;

		if (stanzaNumber <= 0) {
			_numberString = '0'
		} else if (stanzaNumber > 0 && stanzaNumber <= 9) {
			_numberString = '0' + stanzaNumber.toString()
		} else if (stanzaNumber >= 10) {
			_numberString = `${stanzaNumber}`
		}

		// console.log('[LiteratureStanza convertStanzaNumberToString] Stanza # as String: ' + _numberString)

		return _numberString

	}

	const startAnimation = async(isEnabled: boolean, wrapperAnimate: any, wrapperScope: AnimationScope<any>, wrapperAnimationProperties: any, wrapperTransitionProperties: any, stanzaAnimate: any, stanzaScope: AnimationScope<any>, stanzaAnimationProperties: any, stanzaTransitionProperties: any, typeWriter?: TypewriterClass) => {
		if (isEnabled) {
			wrapperAnimate(wrapperScope.current, wrapperAnimationProperties, wrapperTransitionProperties)
			await stanzaAnimate(stanzaScope.current, stanzaAnimationProperties, stanzaTransitionProperties)
			typeWriter?.start()
	
			if (literature?.stanzas[stanzaNumber]?.part2) {
				setTimeout(() => {
					typeWriter2?.start()
				}, 3000)
			}
		}
	}

	const stopAnimation = () => {
		typeWriter?.stop()
		if (typeWriter2) {
			typeWriter2?.stop()
		}
	}
	// #endregion

	// #region USE-EFFECTS
	useEffect(() => {
		let titleUrl = determineTitleUrl()
		const imageUrl = `url("${imageBaseUrl}/${titleUrl}/imageStanza${convertStanzaNumberToString(stanzaNumber)}.png")`

		if (stanzaImageWrapperScope && stanzaImageWrapperScope.current) {
			stanzaImageWrapperScope.current.style.background = imageUrl;
			stanzaImageWrapperScope.current.style.backgroundSize = 'cover';
			stanzaImageWrapperScope.current.style.backgroundPosition = 'center';
		}
	}, [])

	useEffect(() => {
		if (isEnabled && typeWriter) {
			startAnimation(isEnabled, stanzaImageWrapperAnimate, stanzaImageWrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanzaAnimate, stanzaScope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, typeWriter)
		}
	}, [isEnabled])
	// #endregion

	return (
		<div>
			<motion.div 
				className={styles.newStanzaWrapper}
				initial={initialOptions}
				whileInView={whileInViewOptions}
				transition={transitionOptions}
				onViewportEnter={() => startAnimation(isEnabled, stanzaImageWrapperAnimate, stanzaImageWrapperScope, defaultWrapperAnimationProperties, defaultWrapperTransitionProperties, stanzaAnimate, stanzaScope, defaultStanzaAnimationProperties, defaultStanzaTransitionProperties, typeWriter )}
				onViewportLeave={() => stopAnimation()}
			>
				<article ref={stanzaScope} className={`${styles.stanza}`}>
					{ literature?.stanzas[stanzaNumber]?.part1 && <Typewriter
						onInit={(typewriter: TypewriterClass) => {
							if (!literature?.stanzas[stanzaNumber]?.part1) return;

							setTypeWriter(typewriter)
							typewriter.changeDelay(45)

							if (typeWriterInitialPauseInSeconds) {
								typewriter.pauseFor(typeWriterInitialPauseInSeconds)
							}

							typewriter.typeString(literature.stanzas[stanzaNumber].part1)
						}}
						options={typeWriterOptions}
					/> }

					

					{ literature?.stanzas[stanzaNumber]?.part2 && <>
						
						<div className="my-3"></div>
						
						<Typewriter
							onInit={(typewriter2: TypewriterClass) => {
								if (!literature?.stanzas[stanzaNumber]?.part2) return;

								setTypeWriter2(typewriter2) // promote to own state variable, i.e. "setTypeWriter2" etc.
								typewriter2.changeDelay(45)
								typewriter2.typeString(literature.stanzas[stanzaNumber].part2)
							}}
							options={typeWriterOptions}
						/>
					</> }

				</article>

				{/* Conditionally render continue arrow */}
				{ isEnabled && useContinueArrow && 
					<CustomBouncingDownArrow 
						initial={{ opacity: 0 }} 
						whileInView={{ opacity: 1 }} 
						transition={continueArrowTransitionOptions} 
					/>
				}

				<div 
					ref={stanzaImageWrapperScope} 
					// className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper1}`}>
					className={`${styles.stanzaImageWrapper}`}>
				</div>
			</motion.div>

			{ useEndSpacer && <VerticalSpacer /> }

		</div>
	)
}
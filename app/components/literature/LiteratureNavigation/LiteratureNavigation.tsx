import Link from 'next/link'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { FaHome, FaVolumeMute, FaVolumeUp,  } from 'react-icons/fa'
import { FaList } from "react-icons/fa6";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";
import { AnimationScope, motion } from 'framer-motion'
import { Titan_One } from "next/font/google"
import styles from './LiteratureNavigation.module.scss'

const TitanOne = Titan_One({
	weight: "400",
	subsets: ['latin'],
	display: 'swap'
})

type TLiteratureNavigationParams = {
	scope: AnimationScope<any>,
	literatureTitle: string
}

export default function LiteratureNavigation ({ scope, literatureTitle }: TLiteratureNavigationParams) {

	// #region VARIABLES
	const audioPlayer = useGlobalAudioPlayer();
	// #endregion

	// #region ACTIONS
	const onRefresh = () => {
		window.location.reload()
	}

	const onTogglePlay = () => {
		if (!audioPlayer) return;

		audioPlayer.togglePlayPause()
	}

	const onToggleMute = () => {
		if (!audioPlayer) return;

		audioPlayer.muted ? audioPlayer.mute(false) : audioPlayer.mute(true)
	}
	// #endregion

	// #region ELEMENTS
	const PauseButtonIcon = () => (<TbPlayerPause />)

	const PlayButtonIcon = () => (<TbPlayerPlay />)

	const VolumeOnButtonIcon = () => (<FaVolumeUp />)

	const VolumeOffButtonIcon = () => (<FaVolumeMute />)
	// #endregion

	return (
		<nav className={styles.navigation}>
			<div className={styles.navigationLinksList}>
				<div className={styles.mediaControls}>
					<button type="button" className={`${styles.mediaButton}`} onClick={onTogglePlay} title="Play or Pause Audio">
						{ audioPlayer?.playing ? <PauseButtonIcon /> : <PlayButtonIcon /> }
					</button>
					<button type="button" className={`${styles.mediaButton}`} onClick={onToggleMute} title="Mute or Unmute Audio">
						{ audioPlayer?.muted ? <VolumeOffButtonIcon /> : <VolumeOnButtonIcon /> }
					</button>
				</div>

				<div className={styles.mediaControls}>
					<button type="button" className={`${styles.mediaButton}`} onClick={onRefresh} title="Restart">
						<VscDebugRestart />
					</button>
				</div>

				<div className={styles.linksContainer}>
					<Link href="/tales" className={`${styles.navLink}`} title="Return to literature listing">
						<FaList />
						Tales
					</Link>
					<Link href="/" className={`${styles.navLink}`} title="Return home">
						<FaHome />
						Home
					</Link>
				</div>
			</div>

			{/* Story Title (in Nav) */}
			<motion.div onClick={onRefresh} className={`${styles.navStoryTitle} ${TitanOne.className}`} ref={scope} initial={{ opacity: 0 }}>{literatureTitle}</motion.div>
		</nav>
	)
}
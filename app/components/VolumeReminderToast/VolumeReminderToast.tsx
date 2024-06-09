"use client";
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import styles from './VolumeReminderToast.module.scss'

type TMessageProps = {
	closeToast?: any,
	toastProps?: any
}

export default function  VolumeReminderToast () {
	const LOCALSTORAGE_VOLUME_REMINDER = 'remindUserTurnUpVolumeBool'
	let closeToastFunc: Function | undefined = undefined	// Copy & reuse the `closeToast` function (only avail inside <Message />)

	// #region VARIABLES
	const Message = ({ closeToast }: TMessageProps) => {
		closeToastFunc = closeToast
		return (
			<div>
				<div>Volume up for best experience!</div>
				<div className={styles.buttonContainer}>
					<button className={`${styles.button}`} onClick={onCancelReminder}>Don&apos;t Remind Me</button>
					<button className={`${styles.button}`} onClick={closeToast}>Close</button>
				</div>
			</div>
		)
	}
	// #endregion

	// #region FUNCTIONS
	const displayVolumeReminder = async () => {
		toast(<Message />)
	}

	const init = () => {
		const localStorageReminderValue = localStorage?.getItem(LOCALSTORAGE_VOLUME_REMINDER)

		// Convert string to bool and determine whether to display reminder
		if (localStorageReminderValue) {
			let reminderBool = JSON.parse(localStorageReminderValue)
			if (reminderBool) displayVolumeReminder()
		}
	}

	const onCancelReminder = () => {
		localStorage.setItem(LOCALSTORAGE_VOLUME_REMINDER, 'false')
		if (closeToastFunc) closeToastFunc()
	}
	// #endregion

	// #region USE-EFFECTS
	useEffect(() => {
		init()
	}, [])
	// #endregion

	return (<></>)
}
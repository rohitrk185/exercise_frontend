import React, { useState, useRef, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material';

const Timer = () => {	
	const Ref = useRef(null);
	
	const [timer, setTimer] = useState('00:00:00');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		// const id = setInterval(() => {
		// 	startTimer(e);
		// }, 1000)
		// Ref.current = id;

		let { total, hours, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}

	const start = (e) => {
		const id = setInterval(() => {
			startTimer(getDeadTime());
		}, 1000)
		Ref.current = id;
	}


	const clearTimer = (e) => {
		setTimer('00:00:10');

		if (Ref.current) clearInterval(Ref.current);
		start(e);
		// const id = setInterval(() => {
		// 	startTimer(e);
		// }, 1000)
		// Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 10);
		return deadline;
	}

	
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
		<div className="timer">
			<h6>{timer}</h6>
			<h6>TIMER</h6>
			<button onClick={onClickReset} >Reset</button>
			<button onClick={start} >Start</button>
		</div>
	)
}

export default Timer;
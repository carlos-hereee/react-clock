import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

function App() {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		console.log("seconds", seconds);
		if (isRunning) {
			const id = window.setInterval(
				() => setSeconds((seconds) => seconds + 1),
				1000
			);
			return () => window.clearInterval(id);
		}
	}, [isRunning]);

	return (
		<div className={styles.App}>
			<header className={styles.title}>
				<h1>React Timer</h1>
			</header>
			<div className={styles.clock}>
				<div className={styles.time}>
					<p>{seconds}</p>
				</div>
			</div>
			{isRunning ? (
				<button className={styles.button} onClick={() => setIsRunning(false)}>
					Pause
				</button>
			) : (
				<button className={styles.button} onClick={() => setIsRunning(true)}>
					Play
				</button>
			)}
			<button
				className={styles.button}
				onClick={() => {
					setIsRunning(false);
					setSeconds(0);
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default App;

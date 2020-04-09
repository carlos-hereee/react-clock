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
		<div className="App">
			<header className="App-header">
				<h1>React Timer</h1>
			</header>
			<p>{seconds}</p>
			<button onClick={() => setIsRunning(true)}>Play</button>
			<button onClick={() => setIsRunning(false)}>Pause</button>
		</div>
	);
}

export default App;

import { useEffect } from "react";

function Timer({ dispatch, secondsRamaining }) {
	const mins = Math.floor(secondsRamaining / 60);
	const seconds = secondsRamaining % 60;

	useEffect(
		function () {
			const id = setInterval(function () {
				dispatch({ type: "tick" });
			}, 1000);

			return function () {
				clearInterval(id);
			};
		},
		[dispatch]
	);

	return (
		<div className="timer">
			{mins < 10 && "0"}
			{mins}:{seconds < 10 && "0"}
			{seconds}
		</div>
	);
}

export default Timer;

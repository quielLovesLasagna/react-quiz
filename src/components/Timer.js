import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
	const { dispatch, secondsRamaining } = useQuiz();

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

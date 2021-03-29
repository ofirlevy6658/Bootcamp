import React, { useState } from "react";
import "./style.css";
const Time = () => {
	const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

	const handle = (e) => {
		const input = e.target.placeholder;
		const value = e.target.value;
		if (value < 0) return;
		if (input === "sec")
			setTime({ hour: value / 3600, min: value / 60, sec: value });
		else if (input === "min")
			setTime({ hour: value / 60, min: value, sec: value * 60 });
		else {
			setTime({ hour: value, min: value * 60, sec: value * 3600 });
		}
	};
	return (
		<>
			<input
				type="text"
				placeholder="sec"
				type="number"
				onChange={handle}
				value={time.sec}
				min="0"
			/>
			<input
				type="text"
				placeholder="min"
				type="number"
				onChange={handle}
				value={time.min}
			/>
			<input
				type="text"
				placeholder="hour"
				type="number"
				onChange={handle}
				value={time.hour}
			/>
		</>
	);
};

export default Time;

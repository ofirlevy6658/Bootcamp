import React, { useState } from "react";
import "./style.css";
const Text = () => {
	const [activeIndex, setActiveIndex] = useState([
		{ name: "CSS", completed: true },
		{ name: "JavaScript", completed: true },
		{ name: "Learn React", completed: false },
		{ name: "Learn mongoDB", completed: false },
		{ name: "Learn Node JS", completed: false },
	]);

	const mark = (itemName) => {
		const copy = activeIndex.map((el) => {
			if (el.name === itemName) {
				el.completed = !el.completed;
			}
			return el;
		});
		setActiveIndex(copy);
	};

	const renderedItems = activeIndex.map((item) => {
		const active = !item.completed ? "active" : "";
		return (
			<React.Fragment key={item.name}>
				<div className={active}>
					{item.name}
					<input
						type="checkbox"
						defaultChecked={item.completed}
						onChange={() => mark(item.name)}
					/>
				</div>
			</React.Fragment>
		);
	});
	return <>{renderedItems}</>;
};

export default Text;

import React, { useEffect, useRef, useState } from "react";

const Toggle = () => {
	const [editBtn, setEdit] = useState("edit");
	const [editable, setEditable] = useState(false);
	const [value, setValue] = useState("");
	const inputRef = useRef();

	useEffect(() => {
		if (editable) inputRef.current.focus();
	}, [editable]);

	return (
		<>
			<div>
				{!editable && (
					<button onClick={() => setEditable(true)}>{editBtn}</button>
				)}
			</div>
			<div>
				{editable && (
					<input
						ref={inputRef}
						type="text"
						defaultValue={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				)}
			</div>
			<div>
				{editable && <button onClick={() => setEditable(false)}>save</button>}
			</div>
		</>
	);
};

export default Toggle;

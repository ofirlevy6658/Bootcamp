import React from "react";

const CustomButton = ({ cColor, func }) => {
	return (
		<button onClick={func} value={cColor} style={{ backgroundColor: cColor }}>
			{cColor}
		</button>
	);
};

export default CustomButton;

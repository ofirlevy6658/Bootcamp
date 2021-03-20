import React from "react";

const CustomCheckBox = ({ func, check }) => {
	return <input type="checkbox" onChange={func} checked={check} />;
};

export default CustomCheckBox;

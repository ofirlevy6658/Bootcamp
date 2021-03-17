import React from "react";

const Spinner = () => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">Loading...</div>
		</div>
	);
};
const Spinner2 = () => {
	return (
		<div className="ui segment">
			<div className="ui active dimmer">
				<div className="ui indeterminate text loader">Preparing Files</div>
			</div>
		</div>
	);
};
const Spinner3 = () => {
	return (
		<div className="ui segment">
			<div className="ui active loader"></div>
			<p></p>
		</div>
	);
};

export { Spinner, Spinner2, Spinner3 };

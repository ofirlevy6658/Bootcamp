const Card = (props) => {
	return (
		<div
			className="container"
			style={{
				width: "350px",
				height: "350px",
				border: "black solid 3px",
				display: "inline-block",
				marginLeft: "30px",
			}}
		>
			<img
				src={props.src}
				alt="card-img"
				style={{ width: "340px", height: "200px" }}
			/>
			<h1 style={{ color: "red", marginLeft: "30px" }}>{props.header}</h1>
			<h4 style={{ color: "blue", marginLeft: "30px" }}>{props.des}</h4>
			<a
				style={{ color: "orange", marginLeft: "30px" }}
				href="https://www.google.com"
			>
				SHARE
			</a>{" "}
			<a
				style={{ color: "orange", marginLeft: "30px" }}
				href="https://www.w3schools.com"
			>
				EXPLORE
			</a>
		</div>
	);
};

export default Card;

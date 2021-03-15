const Button = (props) => {
	return (
		<button className="btn" style={{ margin: "10px 50px", color: props.color }}>
			{props.content}
		</button>
	);
};
export default Button;

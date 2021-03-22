import React, { Fragment } from "react";

const Card = ({ product }) => {
	return (
		<div>
			<h1>{product.title}</h1>
			<img src={product.imageUrl} alt="" />
			<h3>price: {product.price}$</h3>
			<h3>size: {product.size}</h3>
		</div>
	);
};

export default Card;

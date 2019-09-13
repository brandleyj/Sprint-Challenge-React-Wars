import React from "react";

const CharacterCard = props => {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>Gender: {props.gender}</p>
			<p>Birth Year: {props.birth}</p>
			<p>Height: {props.height}</p>
			<p>Mass: {props.mass}</p>
		</div>
	);
};

export default CharacterCard;

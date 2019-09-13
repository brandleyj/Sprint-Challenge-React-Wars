import React from "react";
import styled from "styled-components";

const Card = styled.div`
	margin: 50px;
	width: 200px;
	background: rgba(230, 221, 214, 0.6);
	/* opacity: 0.2; */
`;

const Name = styled.h2`
	color: #9d401a;
`;

const CharacterCard = props => {
	return (
		<Card>
			<Name>{props.name}</Name>
			<p>Gender: {props.gender}</p>
			<p>Birth Year: {props.birth}</p>
			<p>
				Height/Mass: {props.height}/{props.mass}
			</p>
			<p>Eye Color: {props.eye}</p>
			<p>Hair Color: {props.hair}</p>
		</Card>
	);
};

export default CharacterCard;

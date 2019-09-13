import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

function CharacterList() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people`)
			.then(response => {
				const characters = response.data.results;
				console.log("Star Wars Characters", characters);
				setCharacters(characters);
			})
			.catch(error => {
				console.log("The data was not returned", error);
			});
	}, []);
	return (
		<Cards>
			{characters.map(character => {
				return (
					<CharacterCard
						name={character.name}
						gender={character.gender}
						birth={character.birth_year}
						height={character.height}
						mass={character.mass}
						eye={character.eye_color}
						hair={character.hair_color}
					/>
				);
			})}
		</Cards>
	);
}

export default CharacterList;

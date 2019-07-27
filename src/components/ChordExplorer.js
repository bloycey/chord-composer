import React, { useContext } from 'react';

import styled from '@emotion/styled';

import ChordTile from "./ChordTile";
import { DataChordExplorer } from "../App";
import { chordTypes } from "../staticData/musicTheory";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const ChordExplorer = () => {
	const { currentKey, accidental } = useContext(DataChordExplorer);
	const getAccidentalSymbol = accidental => {
		switch (accidental) {
			case "natural":
				return "";
			case "flat":
				return "♭";
			case "sharp":
				return "♯"
		}
	}

	return (
		<Container>
			{Object.keys(chordTypes).map(chord => {
				const chordName = `${currentKey}${getAccidentalSymbol(accidental)}${chordTypes[chord].shortName}`
				const chordInfo = { chordName }
				return <ChordTile chordInfo={chordInfo} key={chordName} />
			})}
		</Container>
	)
}

export default ChordExplorer;

import React, { useContext } from 'react';
import Tone from 'tone';

import styled from '@emotion/styled';

import ChordTile from "./ChordTile";
import { DataChordExplorer } from "../App";
import { chordTypes } from "../staticData/musicTheory";
import { getAccidentalSymbol } from "../helpers/helpers";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const ChordExplorer = () => {

	const { currentKey, accidental, octave } = useContext(DataChordExplorer);

	return (
		<Container>
			{Object.keys(chordTypes).map(chord => {
				const chordName = `${currentKey}${getAccidentalSymbol(accidental)}${chordTypes[chord].shortName}`;
				const chordDetails = chordTypes[chord];
				const chordInfo = { chordDetails, chordName }
				return <ChordTile chordInfo={chordInfo} currentKey={currentKey} accidental={accidental} Tone={Tone} key={chordName} octave={octave} />
			})}
		</Container>
	)
}

export default ChordExplorer;

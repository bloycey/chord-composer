import React from 'react';

import styled from '@emotion/styled';

import { chromaticScale, chordTypes, intervalReference } from "../staticData/musicTheory";

const Chord = styled.div`
	height: 250px;
	box-sizing: border-box;
	border: 1px solid #f6f6f6;
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ChordTile = (props) => {
	const { chordDetails, chordName } = props.chordInfo;
	const { currentKey, accidental, Tone } = props;

	const startingNote = accidental === "natural" ? `${currentKey}4` : `${currentKey}${accidental}4`;
	const startingIndex = chromaticScale.indexOf(startingNote);
	const { intervals } = chordDetails;

	//Here is a good place to do some partial application / currying. Create a function with the intervalRefernce baked in, for ease of passing around.
	const chordIntervals = intervals.map(interval => intervalReference[interval]);
	let chordNotes = chordIntervals.map(interval => chromaticScale[startingIndex + interval]);
	chordNotes.unshift(chromaticScale[startingIndex])

	const amountOfNotes = chordNotes.length;
	const polySynth = new Tone.PolySynth(amountOfNotes, Tone.Synth).toMaster();

	const playChord = (chordNotes, duration) => {
		Tone.context.resume();
		polySynth.triggerAttackRelease(chordNotes, duration);
	}

	return (
		<Chord>
			{chordName}
			<button onClick={() => playChord(chordNotes, '2n')}>Play Chord</button>
		</Chord>
	)
}

export default ChordTile;
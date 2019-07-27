import React from 'react';

import styled from '@emotion/styled';

import { chromaticScale, chromaticScaleFull, chordTypes, intervalReference } from "../staticData/musicTheory";

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

	const startingFullNote = chromaticScaleFull.filter(note => note.includes(startingNote));
	const startingIndex = chromaticScaleFull.indexOf(startingFullNote[0]);

	const { intervals } = chordDetails;

	const chordIntervals = intervals.map(interval => intervalReference[interval]);
	let chordNotes = chordIntervals.map(interval => chromaticScale[startingIndex + interval]);
	chordNotes.unshift(chromaticScale[startingIndex])

	const playChord = (Tone, chordNotes, duration) => {
		const amountOfNotes = chordNotes.length;
		const polySynth = new Tone.PolySynth(amountOfNotes, Tone.Synth).toMaster();
		polySynth.triggerAttackRelease(chordNotes, duration);
	}

	return (
		<Chord>
			{chordName}
			<button onClick={() => playChord(Tone, chordNotes, '2n')}>Play Chord</button>
		</Chord>
	)
}

export default ChordTile;
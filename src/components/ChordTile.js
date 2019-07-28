import React from 'react';

import styled from '@emotion/styled';

import { chromaticScale, chromaticScaleFull, chordTypes, intervalsByKey } from "../staticData/musicTheory";

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
	const { intervals, intervalString } = chordDetails;

	const startingNote = accidental === "natural" ? `${currentKey}4` : `${currentKey}${accidental}4`;
	const startingFullNote = chromaticScaleFull.filter(note => note.includes(startingNote));
	const startingIndex = chromaticScaleFull.indexOf(startingFullNote[0]);
	const chordNotes = [chromaticScale[startingIndex], ...intervals.map(interval => chromaticScale[startingIndex + interval])];

	//TODO: Remove failsave check once all keys have been completed.
	const musicallyCorrectNotes = intervalsByKey[currentKey] && [currentKey, ...intervalString.map(interval => intervalsByKey[currentKey][interval])];

	const playChord = (Tone, chordNotes, duration) => {
		const amountOfNotes = chordNotes.length;
		const polySynth = new Tone.PolySynth(amountOfNotes, Tone.Synth).toMaster();
		polySynth.triggerAttackRelease(chordNotes, duration);
	}

	const playNote = (Tone, note) => {
		const synth = new Tone.Synth().toMaster();
		synth.triggerAttackRelease(note, '2n');
	}

	return (
		<Chord>
			{chordName}<br />
			{musicallyCorrectNotes}
			<button onClick={() => playChord(Tone, chordNotes, '2n')}>Play Chord</button>
			{/* {chordNotes.map(note => <button onClick={() => playNote(Tone, note)}>{note}</button>)} */}
		</Chord>
	)
}

export default ChordTile;
import React from 'react';

import styled from '@emotion/styled';

import { chromaticScale, chromaticScaleFull, chordTypes, intervalsByKey } from "../staticData/musicTheory";

const Chord = styled.div`
	height: 150px;
	box-sizing: border-box;
	border: 1px solid #f6f6f6;
	width: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ChordTile = (props) => {
	const { chordDetails, chordName } = props.chordInfo;
	const { currentKey, accidental, Tone, octave } = props;
	const { intervals, intervalString } = chordDetails;

	const startingNote = accidental === "natural" ? `${currentKey}${octave}` : `${currentKey}${accidental}${octave}`;
	const startingFullNote = chromaticScaleFull(octave).filter(note => note.includes(startingNote));
	const startingIndex = chromaticScaleFull(octave).indexOf(startingFullNote[0]);
	const chordNotes = [chromaticScale(octave)[startingIndex], ...intervals.map(interval => chromaticScale(octave)[startingIndex + interval])];

	const fullKey = (`${currentKey}${accidental}`).replace("#", "s").replace("natural", "");
	const keyWithSymbols = (`${currentKey}${accidental}`).replace("natural", "").replace("b", "♭").replace("#", "♯");
	const musicallyCorrectNotes = [keyWithSymbols, ...intervalString.map(interval => intervalsByKey[fullKey][interval])];
	console.log(musicallyCorrectNotes)
	console.log("chordNotes", chordNotes)

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
			{musicallyCorrectNotes && musicallyCorrectNotes.map(note => note + ',')}
			<button onClick={() => playChord(Tone, chordNotes, '2n')}>Play Chord</button>
			{/* {chordNotes.map(note => <button onClick={() => playNote(Tone, note)}>{note}</button>)} */}
		</Chord>
	)
}

export default ChordTile;
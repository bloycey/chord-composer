import Tone from "tone";

import C1 from "../instruments/piano/C1.mp3";
import C2 from "../instruments/piano/C2.mp3";
import C3 from "../instruments/piano/C3.mp3";
import C4 from "../instruments/piano/C4.mp3";
import G1 from "../instruments/piano/G1.mp3";
import G2 from "../instruments/piano/G2.mp3";
import G3 from "../instruments/piano/G3.mp3";
import G4 from "../instruments/piano/G4.mp3";

export const pianoNotes = { C1, G1, C2, G2, C3, G3, C4, G4 };

const buildNote = toneLib => instrument => duration => note => {
	const sound = new Tone[instrument]().toMaster();
	sound.triggerAttackRelease(note, duration);
};

const toneLibrary = buildNote(Tone);
const synth = toneLibrary("Synth");
export const synthQuarterNote = synth('4n');

const buildPlayChord = Tone => (toneBuffer, instrument, chordNotes, duration) => {
	switch (instrument) {
		case "synth":
			const amountOfNotes = chordNotes.length;
			const polySynth = new Tone.PolySynth(amountOfNotes, Tone.Synth).toMaster();
			polySynth.triggerAttackRelease(chordNotes, duration);
			break;
		case "piano":
			const pianoInstrument = new Tone.Sampler({
				"C1": toneBuffer.get("C1"),
				"C2": toneBuffer.get("C2"),
				"C3": toneBuffer.get("C3"),
				"C4": toneBuffer.get("C4"),
				"G1": toneBuffer.get("G1"),
				"G2": toneBuffer.get("G2"),
				"G3": toneBuffer.get("G3"),
				"G4": toneBuffer.get("G4")
			}).toMaster();
			chordNotes.forEach(note => pianoInstrument.triggerAttackRelease(note, duration));
			break;
		default:
			console.log("Please specify a valid instrument");
	}
}

export const playChord = buildPlayChord(Tone);

export const getAccidentalSymbol = accidental => {
	switch (accidental) {
		case "b":
			return "♭"
		case "#":
			return "♯"
		default:
			return ""
	}
}

export const tonifyNote = note => note.replace("♭", "b").replace("♯", "#").replace("natural", "").replace("flat", "b").replace("sharp", "#");

const Helpers = () => {
	return false;
}

export default Helpers;
import Tone from "tone";

//  Piano
import C1 from "../instruments/piano/C1.ogg";
import C2 from "../instruments/piano/C2.ogg";
import C3 from "../instruments/piano/C3.ogg";
import C4 from "../instruments/piano/C4.ogg";
import G1 from "../instruments/piano/G1.ogg";
import G2 from "../instruments/piano/G2.ogg";
import G3 from "../instruments/piano/G3.ogg";
import G4 from "../instruments/piano/G4.ogg";

const pianoNotes = { C1, G1, C2, G2, C3, G3, C4, G4 };

export const allNotes = {
	...pianoNotes
}

export const piano = toneBuffer => new Tone.Sampler({
	"C1": toneBuffer.get("C1"),
	"C2": toneBuffer.get("C2"),
	"C3": toneBuffer.get("C3"),
	"C4": toneBuffer.get("C4"),
	"G1": toneBuffer.get("G1"),
	"G2": toneBuffer.get("G2"),
	"G3": toneBuffer.get("G3"),
	"G4": toneBuffer.get("G4")
}).toMaster();

export const allInstruments = {
	piano
}

// Play Chord Function

const buildPlayChord = (Tone, instruments) => (toneBuffer, instrument, chordNotes, duration) => {
	switch (instrument) {
		case "synth":
			const amountOfNotes = chordNotes.length;
			const polySynth = new Tone.PolySynth(amountOfNotes, Tone.Synth).toMaster();
			polySynth.triggerAttackRelease(chordNotes, duration);
			break;
		case "piano":
			const piano = instruments.piano(toneBuffer);
			chordNotes.forEach(note => piano.triggerAttackRelease(note, duration));
			break;
		default:
	}
}

export const playChord = buildPlayChord(Tone, allInstruments);

// Play Note Function

const buildPlayNote = (Tone, instruments) => (toneBuffer, instrument, note, duration) => {
	switch (instrument) {
		case "synth":
			const synth = new Tone.Synth().toMaster();
			synth.triggerAttackRelease(note, duration);
			break;
		case "piano":
			const piano = instruments.piano(toneBuffer);
			piano.triggerAttackRelease(note, duration);
			break;
		default:
	}
}

export const playNote = buildPlayNote(Tone, allInstruments);

// Misc Functions

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

export const tonifyNote = note => note.replace("♭", "b").replace("♯", "#");
export const prettifyNote = note => note.replace("b", "♭").replace("#", "♯");
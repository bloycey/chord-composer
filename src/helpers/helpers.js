import Tone from "tone";

import A0 from "../instruments/piano/A0.ogg";
import A1 from "../instruments/piano/A1.ogg";
import A2 from "../instruments/piano/A2.ogg";
import A3 from "../instruments/piano/A3.ogg";
import A4 from "../instruments/piano/A4.ogg";
import A5 from "../instruments/piano/A5.ogg";
import A6 from "../instruments/piano/A6.ogg";

export const pianoNotes = { A0, A1, A2, A3, A4, A5, A6 };

const buildNote = toneLib => instrument => duration => note => {
	const sound = new Tone[instrument]().toMaster();
	sound.triggerAttackRelease(note, duration);
};

const toneLibrary = buildNote(Tone);
const synth = toneLibrary("Synth");
export const synthQuarterNote = synth('4n');


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

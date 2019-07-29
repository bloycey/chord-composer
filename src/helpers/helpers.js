import Tone from "tone";

const _buildPlayNote = (note, duration, instrument, Tone) => {
  const synth = new Tone[instrument]().toMaster();
  synth.triggerAttackRelease(note, duration);
};

export const playNote = (note, duration) => _buildPlayNote(note, duration, Tone);
export const playQuarterNoteFn = (note, instrument) => () => _buildPlayNote(note, '4n', instrument, Tone );

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
export const keys = ["C", "D", "E", "F", "G", "A", "B"];
export const notes = ["C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"]

// ChromaticScaleFull is used as a reference to look up notes and find their index. chromaticScaleFull and chromaticScale should always be the same length and have the same indices.
export const chromaticScaleFull = octave => [`C${octave}`, `C#${octave}/Db${octave}`, `D${octave}`, `Eb${octave}`, `E${octave}`, `F${octave}`, `F#${octave}/Gb${octave}`, `G${octave}`, `G#${octave}/Ab${octave}`, `A${octave}`, `A#${octave}/Bb${octave}`, `B${octave}`, `C${octave + 1}`, `C#${octave + 1}/Db${octave + 1}`, `D${octave + 1}`, `D#${octave + 1}/Eb${octave + 1}`, `E${octave + 1}`, `F${octave + 1}`, `F#${octave + 1}/Gb${octave + 1}`, `G${octave + 1}`, `G#${octave + 1}/Ab${octave + 1}`, `A${octave + 1}`, `A#${octave + 1}/Bb${octave + 1}`, `B${octave + 1}`, `C${octave + 2}`]

// ChromaticScale is used to actually build chords. Enharmonically incorrect behind the scenes, but is documented appropriately on the front end.
export const chromaticScaleEnharmonic = octave => [`C${octave}`, `C#${octave}`, `D${octave}`, `D#${octave}`, `E${octave}`, `F${octave}`, `F#${octave}`, `G${octave}`, `G#${octave}`, `A${octave}`, `A#${octave}`, `B${octave}`, `C${octave + 1}`, `C#${octave + 1}`, `D${octave + 1}`, `D#${octave + 1}`, `E${octave + 1}`, `F${octave + 1}`, `F#${octave + 1}`, `G${octave + 1}`, `G#${octave + 1}`, `A${octave + 1}`, `A#${octave + 1}`, `B${octave + 1}`, `C${octave + 2}`]

// intervals as semitones
const maj2 = 2;
const min3 = 3;
const maj3 = 4;
const perf4 = 5;
const dim5 = 6;
const perf5 = 7;
const aug5 = 8;
const maj6 = 9;
const dim7 = 9;
const min7 = 10;
const maj7 = 11;
const octave = 12;
const min9 = 13;
const maj9 = 14;

export const chordTypes = {
	major: {
		intervals: [maj3, perf5],
		intervalArray: ["maj3", "perf5"],
		shortName: "",
		fullName: "Major"
	},
	minor: {
		intervals: [min3, perf5],
		intervalArray: ["min3", "perf5"],
		shortName: "m",
		fullName: "Minor"
	},
	susFour: {
		intervals: [perf4, perf5],
		intervalArray: ["perf4", "perf5"],
		shortName: "sus4",
		fullName: "Suspended Fourth"
	},
	susTwo: {
		intervals: [maj2, perf5],
		intervalArray: ["maj2", "perf5"],
		shortName: "sus2",
		fullName: "Suspended Second"
	},
	augmented: {
		intervals: [maj3, aug5],
		intervalArray: ["maj3", "aug5"],
		shortName: "+",
		fullName: "Augmented"
	},
	diminished: {
		intervals: [min3, dim5],
		intervalArray: ["min3", "dim5"],
		shortName: "°",
		fullName: "Diminished"
	},
	six: {
		intervals: [maj3, perf5, maj6],
		intervalArray: ["maj3", "perf5", "maj6"],
		shortName: "6",
		fullName: "Major Sixth"
	},
	minorSix: {
		intervals: [min3, perf5, maj6],
		intervalArray: ["min3", "perf5", "maj6"],
		shortName: "m6",
		fullName: "Minor Sixth"
	},
	seven: {
		intervals: [maj3, perf5, min7],
		intervalArray: ["maj3", "perf5", "min7"],
		shortName: "7",
		fullName: "Seventh"
	},
	majorSeven: {
		intervals: [maj3, perf5, maj7],
		intervalArray: ["maj3", "perf5", "maj7"],
		shortName: "M7",
		fullName: "Major Seventh"
	},
	minorSeven: {
		intervals: [min3, perf5, min7],
		intervalArray: ["min3", "perf5", "min7"],
		shortName: "m7",
		fullName: "Minor Seventh"
	},
	augmentedSeven: {
		intervals: [maj3, aug5, min7],
		intervalArray: ["maj3", "aug5", "min7"],
		shortName: "+7",
		fullName: "Augmented Seventh"
	},
	augmentedMajorSeven: {
		intervals: [maj3, aug5, maj7],
		intervalArray: ["maj3", "aug5", "maj7"],
		shortName: "+M7",
		fullName: "Augmented Major Seventh"
	},
	diminishedSeven: {
		intervals: [min3, dim5, dim7],
		intervalArray: ["min3", "dim5", "dim7"],
		shortName: "°7",
		fullName: "Diminished Seventh"
	},
	halfDiminishedSeven: {
		intervals: [min3, dim5, min7],
		intervalArray: ["min3", "dim5", "min7"],
		shortName: "ø7",
		fullName: "Half-Diminished Seventh"
	},
	minorMajorSeven: {
		intervals: [min3, perf5, maj7],
		intervalArray: ["min3", "perf5", "maj7"],
		shortName: "m(M7)",
		fullName: "Minor-Major Seventh"
	},
	nine: {
		intervals: [maj3, perf5, min7, maj9],
		intervalArray: ["maj3", "perf5", "min7", "maj9"],
		shortName: "9",
		fullName: "Ninth"
	},
	majorNine: {
		intervals: [maj3, perf5, maj7, maj9],
		intervalArray: ["maj3", "perf5", "maj7", "maj9"],
		shortName: "M9",
		fullName: "Major Ninth"
	},
	minorNine: {
		intervals: [min3, perf5, min7, maj9],
		intervalArray: ["min3", "perf5", "min7", "maj9"],
		shortName: "m9",
		fullName: "Minor Ninth"
	},
	augmentedNine: {
		intervals: [maj3, aug5, min7, maj9],
		intervalArray: ["maj3", "aug5", "min7", "maj9"],
		shortName: "+9",
		fullName: "Augmented Ninth"
	},
	augmentedMajorNine: {
		intervals: [maj3, aug5, maj7, maj9],
		intervalArray: ["maj3", "aug5", "maj7", "maj9"],
		shortName: "+M9",
		fullName: "Augmented Major Ninth"
	},
	halfDiminishedNine: {
		intervals: [min3, dim5, min7, maj9],
		intervalArray: ["min3", "dim5", "min7", "maj9"],
		shortName: "ø9",
		fullName: "Half-Diminished Ninth"
	},
	halfDiminishedMinorNine: {
		intervals: [min3, dim5, min7, min9],
		intervalArray: ["min3", "dim5", "min7", "min9"],
		shortName: "ø♭9",
		fullName: "Half-Diminished Minor Ninth"
	},
	diminishedNine: {
		intervals: [min3, dim5, dim7, maj9],
		intervalArray: ["min3", "dim5", "dim7", "maj9"],
		shortName: "°9",
		fullName: "Diminished 9th"
	},
	diminishedMinorNine: {
		intervals: [min3, dim5, dim7, min9],
		intervalArray: ["min3", "dim5", "dim7", "min9"],
		shortName: "°♭9",
		fullName: "Diminished Minor Ninth"
	}
}

export const intervalLookupObject = {
	C: {
		maj2: "D",
		min3: "E♭",
		maj3: "E",
		perf4: "F",
		dim5: "G♭",
		perf5: "G",
		aug5: "G♯",
		maj6: "A",
		dim7: "B♭♭",
		min7: "B♭",
		maj7: "B",
		octave: "C",
		min9: "D♭",
		maj9: "D",
	},
	Cs: {
		maj2: "D♯",
		min3: "E",
		maj3: "E♯",
		perf4: "F♯",
		dim5: "G",
		perf5: "G♯",
		aug5: "G𝄪",
		maj6: "A♯",
		dim7: "B♭",
		min7: "B",
		maj7: "B♯",
		octave: "C♯",
		min9: "D",
		maj9: "D♯"
	},
	Db: {
		maj2: "E♭",
		min3: "F♭",
		maj3: "F",
		perf4: "G♭",
		dim5: "A♭♭",
		perf5: "A♭",
		aug5: "A",
		maj6: "B♭",
		dim7: "C♭♭",
		min7: "C♭",
		maj7: "C",
		octave: "D♭",
		min9: "E",
		maj9: "E♭"
	},
	D: {
		maj2: "E",
		min3: "F",
		maj3: "F♯",
		perf4: "G",
		dim5: "A♭",
		perf5: "A",
		aug5: "A♯",
		maj6: "B",
		dim7: "C♭",
		min7: "C",
		maj7: "C♯",
		octave: "D",
		min9: "E♭",
		maj9: "E"
	},
	Eb: {
		maj2: "F",
		min3: "G♭",
		maj3: "G",
		perf4: "A♭",
		dim5: "B♭♭",
		perf5: "B♭",
		aug5: "B",
		maj6: "C",
		dim7: "D♭♭",
		min7: "D♭",
		maj7: "D",
		octave: "E♭",
		min9: "F♭",
		maj9: "F"
	},
	E: {
		maj2: "F♯",
		min3: "G",
		maj3: "G♯",
		perf4: "A",
		dim5: "B♭",
		perf5: "B",
		aug5: "B♯",
		maj6: "C♯",
		dim7: "D♭",
		min7: "D",
		maj7: "D♯",
		octave: "E",
		min9: "F",
		maj9: "F♯"
	},
	F: {
		maj2: "G",
		min3: "A♭",
		maj3: "A",
		perf4: "B♭",
		dim5: "C♭",
		perf5: "C",
		aug5: "C♯",
		maj6: "D",
		dim7: "E♭♭",
		min7: "E♭",
		maj7: "E",
		octave: "F",
		min9: "G♭",
		maj9: "G"
	},
	Fs: {
		maj2: "G♯",
		min3: "A",
		maj3: "A♯",
		perf4: "B",
		dim5: "C",
		perf5: "C♯",
		aug5: "C𝄪",
		maj6: "D♯",
		dim7: "E♭",
		min7: "E",
		maj7: "E♯",
		octave: "F♯",
		min9: "G",
		maj9: "G♯"
	},
	Gb: {
		maj2: "A♭",
		min3: "B♭♭",
		maj3: "B♭",
		perf4: "C♭",
		dim5: "D♭♭",
		perf5: "D♭",
		aug5: "D",
		maj6: "E♭",
		dim7: "F♭♭",
		min7: "F♭",
		maj7: "F",
		octave: "G♭",
		min9: "A",
		maj9: "A♭"
	},
	G: {
		maj2: "A",
		min3: "B♭",
		maj3: "B",
		perf4: "C",
		dim5: "D♭",
		perf5: "D",
		aug5: "D♯",
		maj6: "E",
		dim7: "F♭",
		min7: "F",
		maj7: "F♯",
		octave: "G",
		min9: "A♭",
		maj9: "A"
	},
	Ab: {
		maj2: "B♭",
		min3: "C♭",
		maj3: "C",
		perf4: "D♭",
		dim5: "E♭♭",
		perf5: "E♭",
		aug5: "E",
		maj6: "F",
		dim7: "G♭♭",
		min7: "G♭",
		maj7: "G",
		octave: "A♭",
		min9: "B",
		maj9: "B♭"
	},
	A: {
		maj2: "B",
		min3: "C",
		maj3: "C♯",
		perf4: "D",
		dim5: "E♭",
		perf5: "E",
		aug5: "E♯",
		maj6: "F♯",
		dim7: "G♭",
		min7: "G",
		maj7: "G♯",
		octave: "A",
		min9: "B♭",
		maj9: "B"
	},
	Bb: {
		maj2: "C",
		min3: "D♭",
		maj3: "D",
		perf4: "E♭",
		dim5: "F♭",
		perf5: "F",
		aug5: "F♯",
		maj6: "G",
		dim7: "A♭♭",
		min7: "G♭",
		maj7: "A",
		octave: "B♭",
		min9: "C♭",
		maj9: "C"
	},
	B: {
		maj2: "C♯",
		min3: "D",
		maj3: "D♯",
		perf4: "E",
		dim5: "F",
		perf5: "F♯",
		aug5: "F𝄪",
		maj6: "G♯",
		dim7: "A♭",
		min7: "A",
		maj7: "A♯",
		octave: "B",
		min9: "C",
		maj9: "C♯"
	}
}

export const keys = ["C", "D", "E", "F", "G", "A", "B"];
export const notes = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]

// ChromaticScaleFull is used as a reference to look up notes and find their index. chromaticScaleFull and chromaticScale should always be the same length and have the same indices.
export const chromaticScaleFull = ["C4", "C#4/Db4", "D4", "D#4/Eb4", "E4", "F4", "F#4/Gb4", "G4", "G#4/Ab4", "A4", "A#4/Bb4", "B4", "C5", "C#5/Db5", "D5", "D#5/Eb5", "E5", "F5", "F#5/Gb5", "G5", "G#5/Ab5", "A5", "A#5/Bb5", "B5", "C6"]

// ChromaticScale is used to actually build chords. Enharmonically incorrect behind the scenes, but is documented appropriately on the front end.
export const chromaticScale = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"]

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
		intervalString: ["maj3", "perf5"],
		shortName: "",
		fullName: "Major"
	},
	minor: {
		intervals: [min3, perf5],
		intervalString: ["min3", "perf5"],
		shortName: "m",
		fullName: "Minor"
	},
	susFour: {
		intervals: [perf4, perf5],
		intervalString: ["perf4", "perf5"],
		shortName: "sus4",
		fullName: "Suspended Fourth"
	},
	susTwo: {
		intervals: [maj2, perf5],
		intervalString: ["maj2", "perf5"],
		shortName: "sus2",
		fullName: "Suspended Second"
	},
	augmented: {
		intervals: [maj3, aug5],
		intervalString: ["maj3", "aug5"],
		shortName: "+",
		fullName: "Augmented"
	},
	diminished: {
		intervals: [min3, dim5],
		intervalString: ["min3", "dim5"],
		shortName: "°",
		fullName: "Diminished"
	},
	six: {
		intervals: [maj3, perf5, maj6],
		intervalString: ["maj3", "perf5", "maj6"],
		shortName: "6",
		fullName: "Major Sixth"
	},
	minorSix: {
		intervals: [min3, perf5, maj6],
		intervalString: ["min3", "perf5", "maj6"],
		shortName: "m6",
		fullName: "Minor Sixth"
	},
	seven: {
		intervals: [maj3, perf5, min7],
		intervalString: ["maj3", "perf5", "min7"],
		shortName: "7",
		fullName: "Seventh"
	},
	majorSeven: {
		intervals: [maj3, perf5, maj7],
		intervalString: ["maj3", "perf5", "maj7"],
		shortName: "M7",
		fullName: "Major Seventh"
	},
	minorSeven: {
		intervals: [min3, perf5, min7],
		intervalString: ["min3", "perf5", "min7"],
		shortName: "m7",
		fullName: "Minor Seventh"
	},
	augmentedSeven: {
		intervals: [maj3, aug5, min7],
		intervalString: ["maj3", "aug5", "min7"],
		shortName: "+7",
		fullName: "Augmented Seventh"
	},
	augmentedMajorSeven: {
		intervals: [maj3, aug5, maj7],
		intervalString: ["maj3", "aug5", "maj7"],
		shortName: "+M7",
		fullName: "Augmented Major Seventh"
	},
	diminishedSeven: {
		intervals: [min3, dim5, dim7],
		intervalString: ["min3", "dim5", "dim7"],
		shortName: "°7",
		fullName: "Diminished Seventh"
	},
	halfDiminishedSeven: {
		intervals: [min3, dim5, min7],
		intervalString: ["min3", "dim5", "min7"],
		shortName: "ø7",
		fullName: "Half-Diminished Seventh"
	},
	minorMajorSeven: {
		intervals: [min3, perf5, maj7],
		intervalString: ["min3", "perf5", "maj7"],
		shortName: "m(M7)",
		fullName: "Minor-Major Seventh"
	},
	nine: {
		intervals: [maj3, perf5, min7, maj9],
		intervalString: ["maj3", "perf5", "min7", "maj9"],
		shortName: "9",
		fullName: "Ninth"
	},
	majorNine: {
		intervals: [maj3, perf5, maj7, maj9],
		intervalString: ["maj3", "perf5", "maj7", "maj9"],
		shortName: "M9",
		fullName: "Major Ninth"
	},
	minorNine: {
		intervals: [min3, perf5, min7, maj9],
		intervalString: ["min3", "perf5", "min7", "maj9"],
		shortName: "m9",
		fullName: "Minor Ninth"
	},
	augmentedNine: {
		intervals: [maj3, aug5, min7, maj9],
		intervalString: ["maj3", "aug5", "min7", "maj9"],
		shortName: "+9",
		fullName: "Augmented Ninth"
	},
	augmentedMajorNine: {
		intervals: [maj3, aug5, maj7, maj9],
		intervalString: ["maj3", "aug5", "maj7", "maj9"],
		shortName: "+M9",
		fullName: "Augmented Major Ninth"
	},
	halfDiminishedNine: {
		intervals: [min3, dim5, min7, maj9],
		intervalString: ["min3", "dim5", "min7", "maj9"],
		shortName: "ø9",
		fullName: "Half-Diminished Ninth"
	},
	halfDiminishedMinorNine: {
		intervals: [min3, dim5, min7, min9],
		intervalString: ["min3", "dim5", "min7", "min9"],
		shortName: "ø♭9",
		fullName: "Half-Diminished Minor Ninth"
	},
	diminishedNine: {
		intervals: [min3, dim5, dim7, maj9],
		intervalString: ["min3", "dim5", "dim7", "maj9"],
		shortName: "°9",
		fullName: "Diminished 9th"
	},
	diminishedMinorNine: {
		intervals: [min3, dim5, dim7, min9],
		intervalString: ["min3", "dim5", "dim7", "min9"],
		shortName: "°♭9",
		fullName: "Diminished Minor Ninth"
	}
}

export const intervalsByKey = {
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
		maj9: "D♯",
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
		maj9: "E♭",
	}
}

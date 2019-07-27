export const keys = ["C", "D", "E", "F", "G", "A", "B"];
export const notes = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]

// ChromaticScaleFull is used as a reference to look up notes and find their index. chromaticScaleFull and chromaticScale should always be the same length and have the same indices.
export const chromaticScaleFull = ["C4", "C#4/Db4", "D4", "D#4/Eb4", "E4", "F4", "F#4/Gb4", "G4", "G#4/Ab4", "A4", "A#4/Bb4", "B4", "C5", "C#5/Db5", "D5", "D#5/Eb5", "E5", "F5", "F#5/Gb5", "G5", "G#5/Ab5", "A5", "A#5/Bb5", "B5", "C6"]

// ChromaticScale is used to actually build chords. Enharmonically incorrect behind the scenes, but is documented appropriately on the front end.
export const chromaticScale = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"]
export const chordTypes = {
	major: {
		intervals: ["maj3", "perf5"],
		shortName: "",
		fullName: "Major"
	},
	minor: {
		intervals: ["min3", "perf5"],
		shortName: "m",
		fullName: "Minor"
	},
	augmented: {
		intervals: ["maj3", "aug5"],
		shortName: "+",
		fullName: "Augmented"
	},
	diminished: {
		intervals: ["min3", "dim5"],
		shortName: "°",
		fullName: "Diminished"
	},
	six: {
		intervals: ["maj3", "perf5", "maj6"],
		shortName: "6",
		fullName: "Major Sixth"
	},
	minorSix: {
		intervals: ["min3", "perf5", "maj6"],
		shortName: "m6",
		fullName: "Minor Sixth"
	},
	seven: {
		intervals: ["maj3", "perf5", "min7"],
		shortName: "7",
		fullName: "Seventh"
	},
	majorSeven: {
		intervals: ["maj3", "perf5", "maj7"],
		shortName: "M7",
		fullName: "Major Seventh"
	},
	minorSeven: {
		intervals: ["min3", "perf5", "min7"],
		shortName: "m7",
		fullName: "Minor Seventh"
	},
	augmentedSeven: {
		intervals: ["maj3", "aug5", "min7"],
		shortName: "+7",
		fullName: "Augmented Seventh"
	},
	diminishedSeven: {
		intervals: ["min3", "dim5", "dim7"],
		shortName: "°7",
		fullName: "Diminished Seventh"
	},
	halfDiminishedSeven: {
		intervals: ["min3", "dim5", "min7"],
		shortName: "ø7",
		fullName: "Half-Diminished Seventh"
	},
	minorMajorSeven: {
		intervals: ["min3", "perf5", "maj7"],
		shortName: "m(M7)",
		fullName: "Minor-Major Seventh"
	}
}

// intervals as semitones
export const intervalReference = {
	min3: 3,
	maj3: 4,
	perf4: 5,
	dim5: 6,
	perf5: 7,
	aug5: 8,
	maj6: 9,
	dim7: 9,
	min7: 10,
	maj7: 11
}
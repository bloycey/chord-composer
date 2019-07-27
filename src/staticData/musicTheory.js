export const keys = ["C", "D", "E", "F", "G", "A", "B"];
export const notes = ["C_natural", "C_sharp", "D_flat", "D_natural", "D_sharp", "E_flat", "E_natural", "F_natural", "F_sharp", "G_flat", "G_natural", "G_sharp", "A_flat", "A_natural", "A_sharp", "B_flat", "B_natural"]
export const chordTypes = {
	major: {
		intervals: ["maj3", "perf5"],
		shortName: "M",
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
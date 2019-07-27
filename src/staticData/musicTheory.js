export const keys = ["C", "D", "E", "F", "G", "A", "B"];
export const notes = ["C_natural", "C_sharp", "D_flat", "D_natural", "D_sharp", "E_flat", "E_natural", "F_natural", "F_sharp", "G_flat", "G_natural", "G_sharp", "A_flat", "A_natural", "A_sharp", "B_flat", "B_natural"]
export const chordTypes = {
	major: {
		intervals: ["maj3", "perf5"]
	},
	minor: {
		intervals: ["min3", "perf5"]
	},
	augmented: {
		intervals: ["maj3", "aug5"]
	},
	diminished: {
		intervals: ["min3", "dim5"]
	},
	six: {
		intervals: ["maj3", "perf5", "maj6"]
	},
	minorSix: {
		intervals: ["min3", "perf5", "maj6"]
	},
	seven: {
		intervals: ["maj3", "perf5", "min7"]
	},
	majorSeven: {
		intervals: ["maj3", "perf5", "maj7"]
	},
	minorSeven: {
		intervals: ["min3", "perf5", "min7"]
	},
	augmentedSeven: {
		intervals: ["maj3", "aug5", "min7"]
	},
	diminishedSeven: {
		intervals: ["min3", "dim5", "dim7"]
	},
	halfDiminishedSeven: {
		intervals: ["min3", "dim5", "min7"]
	},
	minorMajorSeven: {
		intervals: ["min3", "perf5", "maj7"]
	}
}
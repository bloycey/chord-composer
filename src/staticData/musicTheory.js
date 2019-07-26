export const keys = ["C", "D", "E", "F", "G", "A", "B"]
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
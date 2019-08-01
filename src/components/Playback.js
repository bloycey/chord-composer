import React from 'react';
import Tone from "tone";

const Playback = ({ toneBuffer }) => {
	const playNote = () => {
		const pianoInstrument = new Tone.Sampler({
			"C3": toneBuffer.get("C3")
		}).toMaster();
		pianoInstrument.triggerAttackRelease('C4', '1n');
	}
	return (
		<div>
			<button onClick={() => playNote()}>Play Piano</button>
		</div>
	)
}

export default Playback;

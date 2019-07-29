import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { DataHeader } from "../App.js";
import { playQuarterNoteFn, tonifyNote } from "../helpers/helpers";

const Root = styled.div`
	display: flex;
	align-items: center;
	color: #ffffff;
`

const PitchToggle = styled.div`
	display: flex;
	flex-direction: column;
`

const OctaveDisplay = styled.div`
	text-align: center;
`

const OctaveSelector = () => {
	const { octave, setOctave, currentKey, accidental, init, setInit } = useContext(DataHeader);

	const upOctave = (currentOctave, setOctave) => {
		if(!init) {
			setInit(true);
		}
		if(currentOctave < 6) {
			setOctave(currentOctave + 1);
		}
	}

	const downOctave = (currentOctave, setOctave) => {
		if(!init) {
			setInit(true);
		}
		if(currentOctave > 1) {
			setOctave(currentOctave - 1);
		}
	}
	return (
		<Root>
		<h4>Pitch</h4>
		<PitchToggle>
			<button onClick={() => upOctave(octave, setOctave)}>up</button>
				<OctaveDisplay>{octave}</OctaveDisplay>
			<button onClick={() => downOctave(octave, setOctave)}>down</button>
		</PitchToggle>
		</Root>
	)
}

export default OctaveSelector;
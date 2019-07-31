import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { DataHeader } from "../App.js";

const InstrumentSelector = () => {
  const { instrument, setInstrument } = useContext(DataHeader); 

	const setter = set => e => {
		const value = e.target.value;
		set(value);
	}
	return (
	<div>
		<select id="instrumentSelect" name="instrumentSelect" onChange={setter(setInstrument)} >
		<option value="synth">Synth</option>
		<option value="piano">Piano</option>
		</select>
	</div>
	)
}

export default InstrumentSelector;

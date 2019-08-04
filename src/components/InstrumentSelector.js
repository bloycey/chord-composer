import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { Select } from 'antd';

import { DataHeader } from "../App.js";

const { Option } = Select;

const InstrumentSelector = () => {
	const { instrument, setInstrument } = useContext(DataHeader);

	const setter = value => {
		setInstrument(value);
	}
	return (
		<div>
			<Select id="instrumentSelect" defaultValue="synth" name="instrumentSelect" onChange={setter} >
				<Option value="synth">Synth</Option>
				<Option value="piano">Piano</Option>
			</Select>
		</div>
	)
}

export default InstrumentSelector;

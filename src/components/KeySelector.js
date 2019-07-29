import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { keys } from "../staticData/musicTheory";
import { DataHeader } from "../App.js";
import { playQuarterNoteFn } from "../helpers/helpers";

const KeySelector = () => {
	const { currentKey, setCurrentKey, setAccidental } = useContext(DataHeader);
	const setter = set => e => {
		const value = e.target.value;
		set(value);
		setAccidental("natural");
		playQuarterNoteFn(`${currentKey}`)
	}
	return (
		<select value={currentKey} onChange={setter(setCurrentKey)}>
			{keys.map(key => (
				<option value={key} key={key}>{key}</option>
			))
			}
		</select>
	)
}

export default KeySelector;
import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { DataHeader } from "../App.js";

const KeySelector = () => {
	const { keys, currentKey, setCurrentKey, setAccidental } = useContext(DataHeader);
	const setter = set => e => {
		const value = e.target.value;
		set(value);
		setAccidental("natural");
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
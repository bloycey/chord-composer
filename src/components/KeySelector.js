import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import { DataHeader } from "../App.js";

const KeySelector = () => {
	const { keys, currentKey, setCurrentKey } = useContext(DataHeader);
	const setter = set => e => {
		const value = e.target.value;
		set(value);
	}
	return (
		<select value={currentKey} onChange={setter(setCurrentKey)}>
			{keys.map(key => (
					<option value={key} selected={key === currentKey}>{key}</option>
			))
		}
		</select>
	)
}

export default KeySelector;
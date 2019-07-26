import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import { DataHeader } from "../App.js";

const KeySelector = () => {
	const {keys, currentKey, setCurrentKey, sharpsOrFlats, currentKeyOptions, setCurrentKeyOptions,} = useContext(DataHeader);
	console.log("Sharp or flat?", sharpsOrFlats);
	const setter = (set, setOptions) => e => {
		const value = e.target.value;
		set(value);
		// setOptions(options)
	}
	return (
		<select value={currentKey} onChange={setter(setCurrentKey, setCurrentKeyOptions)}>
			{Object.keys(keys).map(key => (
				sharpsOrFlats === "flats"
					? <option value={keys[key].flatKey} options={keys[key]} key={keys[key].name} selected={keys[key].flatKey === currentKey}>{keys[key].name}</option>
					: <option value={keys[key].sharpKey} options={keys[key]} key={keys[key].name} selected={keys[key].sharpKey === currentKey}>{keys[key].name}</option>
			))
		}
		</select>
	)
}

export default KeySelector;
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Select } from 'antd';

import { keys } from "../staticData/musicTheory";
import { DataHeader } from "../App.js";

const { Option } = Select;

const KeySelector = () => {
	const { currentKey, setCurrentKey, setAccidental } = useContext(DataHeader);
	const setter = value => {
		setCurrentKey(value);
		setAccidental("");
	}
	return (
		<Select value={currentKey} onChange={setter}>
			{keys.map(key => (
				<Option value={key} key={key}>{key}</Option>
			))
			}
		</Select>
	)
}

export default KeySelector;
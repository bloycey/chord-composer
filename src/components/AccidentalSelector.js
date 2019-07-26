import React, { useContext } from 'react';

import styled from '@emotion/styled';

import { DataHeader } from "../App.js";

const AccidentalWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 25px;
	color: #ffffff;
`
const AccidentalText = styled.span`
	font-size: 15px;
	margin-right: 15px;
`

const AccidentalSelector = () => {
	const { accidental, setAccidental, setCurrentKey } = useContext(DataHeader);
	const setter = setAccidental => e => {
		const value = e.target.value;
		setAccidental(value);
	}
	return (
		<AccidentalWrapper>
			<div>
			<div>
					<input type="radio" name="flatsOrSharps" value="natural" checked={accidental === "natural"} onChange={setter(setAccidental, setCurrentKey)}/><AccidentalText>Natural</AccidentalText>
				</div>
				<div>
					<input type="radio" name="flatsOrSharps" value="sharp" checked={accidental === "sharp"} onChange={setter(setAccidental, setCurrentKey)}/><AccidentalText>Sharp</AccidentalText>
				</div>
				<div>
				<input type="radio" name="flatsOrSharps" value="flat" checked={accidental === "flat"} onChange={setter(setAccidental, setCurrentKey)}/><AccidentalText>Flat</AccidentalText>
				</div>
			</div>
		</AccidentalWrapper>
	)
}

export default AccidentalSelector;
import React, { useContext } from 'react';

import styled from '@emotion/styled';

import { DataHeader } from "../App.js";

const SharpFlatWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 25px;
	color: #ffffff;
`

const SharpFlatTitle = styled.h5`
	font-size: 15px;
	margin-right: 15px;
`
const SharpFlatText = styled.span`
	font-size: 15px;
	margin-right: 15px;
`

const FlatSharpSelector = () => {
	const { accidental, setAccidental, setCurrentKey, keys } = useContext(DataHeader);
	const setter = setAccidental => e => {
		const value = e.target.value;
		setAccidental(value);
	}
	return (
		<SharpFlatWrapper>
			<div>
			<div>
					<input type="radio" name="flatsOrSharps" value="natural" onChange={setter(setAccidental, setCurrentKey)}/><SharpFlatText>Natural</SharpFlatText>
				</div>
				<div>
					<input type="radio" name="flatsOrSharps" value="sharp" onChange={setter(setAccidental, setCurrentKey)}/><SharpFlatText>Sharp</SharpFlatText>
				</div>
				<div>
				<input type="radio" name="flatsOrSharps" value="flat" onChange={setter(setAccidental, setCurrentKey)}/><SharpFlatText>Flat</SharpFlatText>
				</div>
			</div>
		</SharpFlatWrapper>
	)
}

export default FlatSharpSelector;
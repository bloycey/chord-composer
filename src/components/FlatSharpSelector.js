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
	const { sharpsOrFlats, setSharpsOrFlats, setCurrentKey, keys } = useContext(DataHeader);
	const setter = (setSharpsFlats, setKey) => e => {
		const value = e.target.value;
		setSharpsFlats(value);
	}
	return (
		<SharpFlatWrapper>
			<div>
				<SharpFlatTitle>Display Sharp or Flat Keys?</SharpFlatTitle>
			</div>
			<div>
				<div>
					<input type="radio" name="flatsOrSharps" value="flats" checked={sharpsOrFlats === "flats"} onChange={setter(setSharpsOrFlats, setCurrentKey)}/><SharpFlatText>Flats</SharpFlatText>
				</div>
				<div>
					<input type="radio" name="flatsOrSharps" value="sharps" checked={sharpsOrFlats === "sharps"} onChange={setter(setSharpsOrFlats, setCurrentKey)}/><SharpFlatText>Sharps</SharpFlatText>
				</div>
			</div>
		</SharpFlatWrapper>
	)
}

export default FlatSharpSelector;
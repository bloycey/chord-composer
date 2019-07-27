import React from 'react';

import styled from '@emotion/styled';

const Chord = styled.div`
	height: 250px;
	box-sizing: border-box;
	border: 1px solid #f6f6f6;
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ChordTile = ({ chordInfo }) => {
	const { chordName } = chordInfo;
	return (
		<Chord>
			{chordName}
		</Chord>
	)
}

export default ChordTile;
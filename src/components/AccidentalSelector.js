import React, { useContext } from 'react';

import styled from '@emotion/styled';

import { notes } from "../staticData/musicTheory";
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
	const { accidental, setAccidental, currentKey, setCurrentKey } = useContext(DataHeader);
	const fullKey = `${currentKey}_${accidental}`

	const setter = setAccidental => e => {
		const value = e.target.value;
		setAccidental(value);
	}

	const createSharpNote = note => `${note}_sharp`;
	const createFlatNote = note => `${note}_flat`;
	const noteExists = (note, allowedNotes) => allowedNotes.includes(note);

	return (
		<AccidentalWrapper>
			<div>
				<div>
					<input type="radio" name="flatsOrSharps" value="natural" checked={accidental === "natural"} onChange={setter(setAccidental, setCurrentKey)} /><AccidentalText>Natural</AccidentalText>
				</div>
				{noteExists(createSharpNote(currentKey), notes) &&
					<div>
						<input type="radio" name="flatsOrSharps" value="sharp" checked={accidental === "sharp"} onChange={setter(setAccidental, setCurrentKey)} /><AccidentalText>Sharp</AccidentalText>
					</div>
				}
				{noteExists(createFlatNote(currentKey), notes) &&
					<div>
						<input type="radio" name="flatsOrSharps" value="flat" checked={accidental === "flat"} onChange={setter(setAccidental, setCurrentKey)} /><AccidentalText>Flat</AccidentalText>
					</div>
				}
			</div>
		</AccidentalWrapper>
	)
}

export default AccidentalSelector;
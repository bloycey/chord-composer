import React, { useContext } from 'react';
import styled from '@emotion/styled';

import AccidentalSelector from "./AccidentalSelector";
import InstrumentSelector from "./InstrumentSelector";
import KeySelector from "./KeySelector";
import OctaveSelector from "./OctaveSelector";
import { DataHeader } from "../App.js";

const TitleContainer = styled.div`
	margin-left: 15px;
	padding: 12px 0;
`

const AppHeader = styled.div`
	background-color: #2c2c2c;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Title = styled.input`
	color: #ffffff;
	font-size: 22px;
	background-color: transparent;
	border: 0;
	outline: none;
	&::placeholder {
		color: #ffffff;
	}

`
const Subtitle = styled.input`
	color: #ffffff;
	opacity: 0.5;
	font-size: 15px;
	background-color: transparent;
	border: 0;
	outline: none;
	&::placeholder {
		color: #ffffff;
	}
`

const OptionsContainer = styled.div`
	display: flex;
  align-items: center;
`

const Header = props => {
	const { title, subtitle, setTitle, setSubtitle } = useContext(DataHeader);
	return (
		<AppHeader>
			<TitleContainer>
				<Title value={title} onChange={e => setTitle(e.target.value)} /><br />
				<Subtitle value={subtitle} onChange={e => setSubtitle(e.target.value)} />
			</TitleContainer>
			<OptionsContainer>
				<InstrumentSelector />
				<OctaveSelector />
				<KeySelector />
				<AccidentalSelector />
			</OptionsContainer>
		</AppHeader>
	)
}

export default Header;

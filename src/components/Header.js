import React, { useContext } from 'react';
import styled from '@emotion/styled';

import FlatSharpSelector from "./FlatSharpSelector";
import KeySelector from "./KeySelector";
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

const FlatSharpContainer = styled.div`
	display: flex;
`

const Header = props => {
	const { title, subtitle, setTitle, setSubtitle } = useContext(DataHeader);
	console.log(title);
	return (
		<AppHeader>
			<TitleContainer>
				<Title value={title} onChange={e => setTitle(e.target.value)}/><br/>
				<Subtitle value={subtitle} onChange={e => setSubtitle(e.target.value)}/>
			</TitleContainer>
			<FlatSharpContainer>
				<KeySelector />
				<FlatSharpSelector/>
			</FlatSharpContainer>
		</AppHeader>
	)
}

export default Header;

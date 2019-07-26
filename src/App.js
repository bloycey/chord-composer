import React, { useState } from 'react';

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";

export const DataHeader = React.createContext();

function App() {

	const keys = ["C", "D", "E", "F", "G", "A", "B"]

// Header State
const [title, setTitle] = useState("Add a title here");
const [subtitle, setSubtitle] = useState("Set a subtitle here");
const [currentKey, setCurrentKey] = useState("C");
const [accidental, setAccidental] = useState("natural");


const headerData = { title, setTitle, subtitle, setSubtitle, currentKey, setCurrentKey, accidental, setAccidental, keys };

	return (
		<div className="App">
			<DataHeader.Provider value={headerData} >
				<Header />
			</DataHeader.Provider>
			<p>Current Title: {title}</p>
			<p>Current Subtitle: {subtitle}</p>
			<p>Current Key: {currentKey} {accidental !== "natural" && accidental}</p>
			<ChordExplorer />
			<Playback />
		</div>
	);
}

export default App;

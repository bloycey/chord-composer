import React, { useState } from 'react';

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";

export const DataHeader = React.createContext();
export const DataChordExplorer = React.createContext();

function App() {

	// All Date
	const [title, setTitle] = useState("Add a title here");
	const [subtitle, setSubtitle] = useState("Set a subtitle here");
	const [currentKey, setCurrentKey] = useState("C");
	const [accidental, setAccidental] = useState("natural");
	const [octave, setOctave] = useState(3);

	const headerData = { title, setTitle, subtitle, setSubtitle, currentKey, setCurrentKey, accidental, setAccidental, octave, setOctave };
	const chordExplorerData = { currentKey, accidental, octave };


	return (
		<div className="App">
			<DataHeader.Provider value={headerData}>
				<Header />
			</DataHeader.Provider>
			<DataChordExplorer.Provider value={chordExplorerData}>
				<ChordExplorer />
			</DataChordExplorer.Provider>
			<p>Current Title: {title}</p>
			<p>Current Subtitle: {subtitle}</p>
			<p>Current Key: {currentKey} {accidental !== "natural" && accidental}</p>
			<Playback />
		</div>
	);
}

export default App;

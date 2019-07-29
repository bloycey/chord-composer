import React, { useState, useEffect } from 'react';
import Tone from "tone";

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";
import { playQuarterNoteFn, tonifyNote } from "./helpers/helpers";

export const DataHeader = React.createContext();
export const DataChordExplorer = React.createContext();

function App() {

	// All Data
	const [title, setTitle] = useState("Add a title here");
	const [subtitle, setSubtitle] = useState("Set a subtitle here");
	const [currentKey, setCurrentKey] = useState("C");
	const [accidental, setAccidental] = useState("natural");
	const [octave, setOctave] = useState(3);
	const [instrument, setInstrument] = useState("Synth");

	const headerData = { title, setTitle, subtitle, setSubtitle, currentKey, setCurrentKey, accidental, setAccidental, octave, setOctave };
	const chordExplorerData = { currentKey, accidental, octave };
	const currentRootNote = tonifyNote(`${currentKey}${accidental}${octave}`);

	// Play current note when octave or accidental changes
	useEffect(() => {
			const playCurrentNote = playQuarterNoteFn(currentRootNote, instrument);
			playCurrentNote();
	}, [octave, accidental, currentKey, currentRootNote, instrument]);

	return (
		<div className="App">
			<DataHeader.Provider value={headerData}>
				<Header />
			</DataHeader.Provider>
			<DataChordExplorer.Provider value={chordExplorerData}>
				<ChordExplorer />
			</DataChordExplorer.Provider>
			<Playback />
		</div>
	);
}

export default App;

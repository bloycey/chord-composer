import React, { useState, useEffect } from 'react';
import Tone from "tone";

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";
import { playNote, tonifyNote, allInstruments, allNotes } from "./helpers/helpers";

import 'antd/dist/antd.css'

export const DataHeader = React.createContext();
export const DataChordExplorer = React.createContext();

function App() {

	// All Data
	const [toneBuffer, setToneBuffer] = useState(null);
	const [title, setTitle] = useState("Add a title here");
	const [subtitle, setSubtitle] = useState("Set a subtitle here");
	const [currentKey, setCurrentKey] = useState("C");
	const [accidental, setAccidental] = useState("");
	const [octave, setOctave] = useState(3);
	const [instrument, setInstrument] = useState("synth");

	const headerData = { title, setTitle, subtitle, setSubtitle, currentKey, setCurrentKey, accidental, setAccidental, octave, setOctave, toneBuffer, instrument, setInstrument };
	const chordExplorerData = { currentKey, accidental, octave, toneBuffer, instrument };
	const currentRootNote = tonifyNote(`${currentKey}${accidental}${octave}`);


	useEffect(() => {
		const handleSoundsLoaded = toneBuffers => {
			if (toneBuffer === null) {
				setToneBuffer(toneBuffers);
			}
		};

		const toneBuffers = new Tone.Buffers(allNotes, toneBuffers => handleSoundsLoaded(toneBuffers));
	}, [toneBuffer]);


	// Play current note when octave or accidental changes
	useEffect(() => {
		if (toneBuffer !== null) {
			playNote(toneBuffer, instrument, currentRootNote, '4n');
		}
	}, [octave, accidental, currentKey, currentRootNote, instrument]);

	return (
		<div className="App">
			<DataHeader.Provider value={headerData}>
				<Header />
			</DataHeader.Provider>
			<DataChordExplorer.Provider value={chordExplorerData}>
				<ChordExplorer />
			</DataChordExplorer.Provider>
			<Playback toneBuffer={toneBuffer} />
		</div>
	);
}

export default App;

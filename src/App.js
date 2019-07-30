import React, { useState, useEffect } from 'react';
import Tone from "tone";

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";
import { synthQuarterNote, tonifyNote, pianoNotes } from "./helpers/helpers";

export const DataHeader = React.createContext();
export const DataChordExplorer = React.createContext();

function App() {

	// All Data
	const { A0, A1, A2, A3, A4, A5, A6 } = pianoNotes;
	const [toneBuffer, setToneBuffer] = useState(null);
	const [title, setTitle] = useState("Add a title here");
	const [subtitle, setSubtitle] = useState("Set a subtitle here");
	const [currentKey, setCurrentKey] = useState("C");
	const [accidental, setAccidental] = useState("natural");
	const [octave, setOctave] = useState(3);
	const [instrument, setInstrument] = useState("Synth");

	const headerData = { title, setTitle, subtitle, setSubtitle, currentKey, setCurrentKey, accidental, setAccidental, octave, setOctave, toneBuffer };
	const chordExplorerData = { currentKey, accidental, octave };
	const currentRootNote = tonifyNote(`${currentKey}${accidental}${octave}`);

	const handleSoundsLoaded = (toneBuffers) => {
		if (toneBuffer === null) {
			setToneBuffer(toneBuffers);
		}
	};

	useEffect(() => {
		const toneBuffers = new Tone.Buffers({ A0, A1, A2, A3, A4, A5, A6 }, toneBuffers => handleSoundsLoaded(toneBuffers));
	}, [toneBuffer]);


	// Play current note when octave or accidental changes
	useEffect(() => {
		synthQuarterNote(currentRootNote);
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

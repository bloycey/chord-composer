import React, { useState } from 'react';

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";

export const DataHeader = React.createContext();

function App() {

	const keys = {
		C: {
			name: "C",
			sharpKey: "C",
			flatKey: "C"
		},
		D: {
			name: "C# / Db",
			sharpKey: "C#",
			flatKey: "Db"
		},
		E: {
			name: "E",
			sharpKey: "E",
			flatKey: "E"
		},
		F: {
			name: "F",
			sharpKey: "F",
			flatKey: "F"
		}
	};

// Header State
const [title, setTitle] = useState("Add a title here");
const [subtitle, setSubtitle] = useState("Set a subtitle here");
const [currentKey, setCurrentKey] = useState("C");
const [currentKeyOptions, setCurrentKeyOptions] = useState(keys[0])
const [sharpsOrFlats, setSharpsOrFlats] = useState("flats");


const headerData = { title, setTitle, subtitle, setSubtitle, currentKey, setCurrentKey, sharpsOrFlats, setSharpsOrFlats, currentKeyOptions, setCurrentKeyOptions, keys };

	return (
		<div className="App">
			<DataHeader.Provider value={headerData} >
				<Header />
			</DataHeader.Provider>
			<p>Current Title: {title}</p>
			<p>Current Subtitle: {subtitle}</p>
			<p>Current Key: {currentKey}</p>
			<p>Prefer sharps or flats? {sharpsOrFlats}</p>
			<ChordExplorer />
			<Playback />
		</div>
	);
}

export default App;

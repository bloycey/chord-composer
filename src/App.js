import React, { useState, UseContext } from 'react';

import ChordExplorer from "./components/ChordExplorer";
import Header from "./components/Header";
import Playback from "./components/Playback";

export const DataHeader = React.createContext();

function App() {

// Header State
const [title, setTitle] = useState("Add a title here");
const [subtitle, setSubtitle] = useState("Set a subtitle here");

const headerData = { title, setTitle, subtitle, setSubtitle };

	return (
		<div className="App">
			<DataHeader.Provider value={headerData} >
				<Header />
			</DataHeader.Provider>
			<ChordExplorer />
			<Playback />
		</div>
	);
}

export default App;

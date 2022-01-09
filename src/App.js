import React from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

//Components and Pages
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<h1>Ignite</h1>
			<Home />
		</div>
	);
}

export default App;

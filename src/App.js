import React from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

//Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

//Styles
import GlobalStyles from "./components/GlobalStyles";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games/:id" element={<Home />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;

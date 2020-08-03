import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Views/Homepage.js";

const App = () => {
	return (
		<BrowserRouter>
			<Route component={Homepage} />
		</BrowserRouter>
	);
};

export default App;

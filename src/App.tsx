import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faClock,
	faExpandAlt,
	faTimes,
	faMinus,
	faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faClock,
	faExpandAlt,
	faTimes,
	faMinus,
	faGithub,
	faExternalLinkAlt
);

function App() {
	return (
		<div className="App" style={{ fontFamily: "Roboto" }}>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

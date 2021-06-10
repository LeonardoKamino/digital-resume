import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);

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

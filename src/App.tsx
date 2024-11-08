import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	faGithub,
	faLinkedin,
	faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faClock,
	faExpandAlt,
	faTimes,
	faMinus,
	faExternalLinkAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./Pages/Home";
import ProjectPage from "./Pages/ProjectPage";
import ProjectsPage from "./Pages/ProjectsPage";
import "./App.scss";

library.add(
	faClock,
	faExpandAlt,
	faTimes,
	faMinus,
	faGithub,
	faExternalLinkAlt,
	faLinkedin,
	faGithubSquare,
	faEnvelope
);


function App() {
	return (
		<div className="App" style={{ fontFamily: "Roboto" }}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="projects/:id" element={<ProjectPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

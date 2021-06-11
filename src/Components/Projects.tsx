import React from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import ProjectsList from "./ProjectsList";

import "../Style/Projects.scss";

const Projects: React.FunctionComponent = () => {
	return (
		<div className="projects" id="projects">
			<Fade top>
				<p className="title">Projects</p>
			</Fade>
			<div className="row justify-content-center ">
				{ProjectsList.map((project) => (
					<ProjectCard project={project} key={project.title} />
				))}
			</div>
		</div>
	);
};

export default Projects;

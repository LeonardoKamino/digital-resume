import React from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import ProjectsList from "./ProjectsList";
import { useNavigate } from "react-router-dom";


import "../Style/Projects.scss";



const ProjectsSpotlights: React.FunctionComponent = () => {
	const navigate = useNavigate();


	const projects = ProjectsList.filter((project) => project.spotlight) ;

	return (
		<div className="projects" id="projects">
			<Fade top>
				<p className="title">Projects</p>
			</Fade>
			<div className="row justify-content-center ">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.title} />
				))}
			</div>

			<div className="view-all-button">
				<button onClick={() => navigate("/projects")}>
					View All Projects
				</button>
			</div>		
		</div>
	);
};

export default ProjectsSpotlights;

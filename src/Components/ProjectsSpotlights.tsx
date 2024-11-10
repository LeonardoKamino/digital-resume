import React from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import ProjectsList from "../Data/ProjectsList";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

import "../Style/ProjectsSpotlights.scss";



const ProjectsSpotlights: React.FunctionComponent = () => {
	const navigate = useNavigate();


	const projects = ProjectsList.filter((project) => project.spotlight) ;

	return (
		<div className="projects" id="projects">
			<h2 className="title">Projects</h2>
			<div className="row justify-content-center ">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.title} />
				))}
			</div>

			<div className="view-all-button">
			<Button 
				variant="contained" 
				className="link-button" 
				onClick={() => navigate("/projects")}
			>
				See All Projects
			</Button>
			</div>		
		</div>
	);
};

export default ProjectsSpotlights;

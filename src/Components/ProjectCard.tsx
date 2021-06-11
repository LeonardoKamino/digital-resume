import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "react-reveal/Slide";

import "../Style/ProjectCard.scss";

function ProjectCard(props: any) {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	const project = props.project;

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
	});

	function RenderSkillsMobile() {
		if (windowWidth < 900) {
			return (
				<div className="skills-mobile">
					{project.skills.map((skill: string, index: number) => (
						<p className="skill" key={index}>
							{skill}
						</p>
					))}
				</div>
			);
		}
	}

	function RenderSkillsDesktop() {
		if (windowWidth > 900) {
			return (
				<div className="middle">
					{project.skills.map((skill: string, index: number) => (
						<p className="skill" key={index}>
							{skill}
						</p>
					))}
				</div>
			);
		}
	}

	return (
		<div className="col-md-4 my-4">
			<Slide bottom>
				<div className="card project-card">
					<div className="card-header">
						<div className="columns">
							<div className="row">
								<div className="col">
									<div className="circle-icon bg-red">
										<FontAwesomeIcon icon="minus" className="web-icon" />
									</div>
									<div className="circle-icon bg-yellow">
										<FontAwesomeIcon icon="expand-alt" className="web-icon" />
									</div>
									<div className="circle-icon bg-green">
										<FontAwesomeIcon icon="times" className="web-icon" />
									</div>
								</div>
								<div className="col project-name">{project.title}</div>
								<div className="col"></div>
							</div>
						</div>
					</div>
					<div className="image-container">
						<img src={project.image} className="card-img-top image" alt="..." />
						{RenderSkillsDesktop()}
					</div>
					<div className="card-body">
						<p className="card-text">{project.description}</p>
						{RenderSkillsMobile()}
					</div>
					<div className="card-links">
						{project.githubLink ? (
							<a href={project.githubLink} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={["fab", "github"]} className="link" />
							</a>
						) : null}
						{project.deploymentLink ? (
							<a href={project.deploymentLink} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon="external-link-alt" className="link" />
							</a>
						) : null}
					</div>
				</div>
			</Slide>
		</div>
	);
}

export default ProjectCard;

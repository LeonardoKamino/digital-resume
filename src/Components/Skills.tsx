import React from "react";
import SkillsList from "../Data/SkillsList";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "../Style/Skills.scss";

class Skills extends React.Component {
	render() {
		return (
			<div className="skills" id="skills">
				<h1 className="title">Skills</h1>
				<div className="container" >
					<div className="columns">
						<div className="row justify-content-center">
							{SkillsList.map((skillSection: any, index: number) => (
								<div className=" col-md-6 col-lg-4 section-box px-4" key={index}>
									<p className="section-title">{skillSection.sectionTitle}</p>
									<div className="columns">
										<div className="row justify-content-around">
											{skillSection.list.map((skill: any, index: number) => (
												<div className="col-4" key={index}>
													<Zoom>
														<img
															src={skill.logo}
															className="skill-logo"
															alt={skill.name}
														/>

														<p>{skill.name}</p>
													</Zoom>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

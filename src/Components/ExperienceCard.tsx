import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Style/ExperienceCard.scss";

interface IExperienceCardProps {
	company: string;
	role: string;
	duration: string;
	description: string;
	skills: string[];
	logo: string;
}

class ExperienceCard extends React.Component<IExperienceCardProps> {
	render(): React.ReactNode {
		return (
			<div>
				<Fade right>
					<div className="experience-card">
						<div className="row align-items-center">
							<div className="col-12 col-md-4 left">
								<p className="role">{this.props.role}</p>
								<img
									className="company-img"
									src={this.props.logo}
									alt="Launchpad"
								/>
								<p className="company-name">@{this.props.company}</p>
							</div>
							<div className="col right">
								<p className="duration">
									<FontAwesomeIcon icon="clock" className="icon" />
									{this.props.duration}
								</p>
								<p className="description">{this.props.description}</p>

								<div className="skill-section">
									{this.props.skills.map((skill) => (
										<Fade right big cascade>
											<p className="skill">{skill}</p>
										</Fade>
									))}
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}

export default ExperienceCard;

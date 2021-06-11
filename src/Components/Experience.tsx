import React from "react";
import Fade from "react-reveal/Fade";
import ExperienceCard from "./ExperienceCard";
import ExperienceList from "./ExperienceList";

import "../Style/Experience.scss";

const Experience: React.FunctionComponent = () => {
	return (
		<div className="experience" id="experience">
			<Fade left>
				<h1 className="title">Experience</h1>
			</Fade>
			<section className="timeline-area">
				{ExperienceList.map((experience, index) => (
					<ExperienceCard
						company={experience.company}
						role={experience.role}
						duration={experience.duration}
						description={experience.description}
						skills={experience.skills}
						logo={experience.logo}
						key={index}
					/>
				))}
			</section>
		</div>
	);
};

export default Experience;

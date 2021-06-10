import React from "react";
import Introduction from "./Introduction";
import Experience from "./Experience";
import "../Style/AboutMe.scss";

const AboutMe: React.FunctionComponent = () => {
	return (
		<div className="about-me" id="about-me">
			<Introduction />
			<Experience />
		</div>
	);
};

export default AboutMe;

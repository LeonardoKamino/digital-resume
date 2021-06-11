import React from "react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import "../Style/AboutMe.scss";

const AboutMe: React.FunctionComponent = () => {
	return (
		<div className="about-me" id="about-me">
			<Introduction />
			<Skills />
		</div>
	);
};

export default AboutMe;

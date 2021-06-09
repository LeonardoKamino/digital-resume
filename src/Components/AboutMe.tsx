import React from "react";
import Introduction from "./Introduction";
import "../Style/AboutMe.scss";

const AboutMe: React.FunctionComponent = () => {
	return (
		<div className="about-me">
			<Introduction />
			<div className="experience">oi</div>
		</div>
	);
};

export default AboutMe;

import React from "react";
import Fade from "react-reveal/Fade";
import CPUProfile from "../Media/CPUProfile.svg";
import Zoom from "react-reveal/Zoom";

import "../Style/Introduction.scss";

const Introduction: React.FunctionComponent = () => {
	return (
		<div className="introduction">
			<Fade top>
				<h1 className="title">Hi, what's up?</h1>
			</Fade>
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-6 img-section">
						<Zoom>
							<img src={CPUProfile} alt="me" />
						</Zoom>
					</div>
					<div className="col-md-6">
						<Fade>
							<p className="description">
								Hello! I am Leonardo Kamino Barros, a student completing a
								BASc in Computer Engineering at The University of British
								Columbia. I aspire to be an engineer, helping to create
								cutting edge technology in the benefit of others. Always looking
								for new challenges and to learn new things. <br /> <br />
								When I am not coding or going to classes, I enjoy running, going
								to the gym and hanging out with friends.
							</p>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;

import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";

import "../Style/Header.scss";
import BackgroundVideo from "../Media/Background.mp4";

const Header: React.FunctionComponent = () => {
	return (
		<div className="header">
			<video className="background-video" autoPlay loop muted>
				<source src={BackgroundVideo} type="video/mp4" />
			</video>
			<header className="viewport-header d-flex justify-content-center  align-items-center">
				<div className="title">
					<Fade left cascade>
						<h1 className="greeting"> Hey, I'm Leo ;)</h1>
					</Fade>
					<Slide bottom>
						<h2 className="description">
							Computer Engineering student @ UBC, Vancouver. <br />
							Looking for new grad opportunities for May 2025.
						</h2>
					</Slide>
				</div>
			</header>
		</div>
	);
};

export default Header;

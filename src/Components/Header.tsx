import React from "react";
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
					<h1 className="greeting"> Hi! I am Leo Kamino,</h1>
					<h2 className="description">
						A 2nd year Computer Engineering student @ UBC, Vancouver. <br />
						Passionate about programming and technology.
					</h2>
				</div>
			</header>
		</div>
	);
};

export default Header;

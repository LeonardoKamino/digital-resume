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
								Mauris at posuere risus. Curabitur orci eros, pretium eu cursus
								sed, aliquam sed leo. Integer scelerisque ullamcorper accumsan.
								Ut id lectus ligula. Maecenas dignissim elit quis pharetra
								feugiat. Mauris scelerisque felis eget arcu maximus scelerisque.
								Vestibulum in ornare nibh. Ut tortor nisl, placerat sit amet
								justo eu, malesuada Donec volutpat aliquet nunc id faucibus. Sed
								tincidunt cursus sem, vitae pellentesque ex mattis in. <br />
								Etiam dictum facilisis diam, ac feugiat nisl. Donec non luctus
								ipsum. Quisque pretium sollicitudin nulla ullamcorper tincidunt.
								Suspendisse tempor aliquam dui, id tempor justo convallis a.
								Aenean congue pretium ullamcorper. Sed ut sagittis ex.{" "}
							</p>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;

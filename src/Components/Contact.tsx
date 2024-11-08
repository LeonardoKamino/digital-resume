import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../Media/resume.pdf";

import "../Style/Contact.scss";

class Contact extends React.Component {
	render(): React.ReactNode {
		return (
			<div className="contact" id="contact">
				<p className="title">Contact Me</p>

				<div className="columns">
					<div className="row align-items-center justify-content-evenly">
						<div className="col-md-4">
							<p className="situation">
							I am actively looking for full-time positions in software engineering upon my graduation in May 2025. If you are hiring software engineers or have exciting projects, please reach out.
							</p>
						</div>
						<div className="col-md-4">
							<div className="links-section">
								<a
									href="https://github.com/LeonardoKamino"
									className="link"
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={["fab", "github-square"]} />
								</a>
								<a
									href="https://www.linkedin.com/in/leonardokamino/"
									className="link"
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={["fab", "linkedin"]} />
								</a>
								<a href="mailto:leo.kamino@gmail.com" className="link">
									<FontAwesomeIcon icon="envelope" />
								</a>
							</div>
							<p className="email">leo.kamino@gmail.com</p>
							<p className="location">Vancouver, British Columbia - Canada</p>
						</div>
					</div>
					<div className="download-resume-section">
						<a
							href={Resume}
							download="LeoKamino.pdf"
							className="download-resume-link"
						>
							Check my Resume
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;

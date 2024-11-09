import React from "react";
import "../Style/Home.scss";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Experience from "../Components/Experience";
import Contact from "../Components/Contact";
import ProjectsSpotlights from "../Components/ProjectsSpotlights";

const Home: React.FunctionComponent = () => {
	return (
		<div className="home page">
			<NavigationBar />
			<Header />
			<div className="content-container">
				{/* <Skills /> */}
				<Experience />
				<div className="transition"></div>
				<ProjectsSpotlights />
				<div className="transition rotate-180"></div>
				<Contact />
			</div>
			<Footer />
		</div>
	);
};
export default Home;

import React from "react";
import "./Home.scss";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Contact from "../Components/Contact";

const Home: React.FunctionComponent = () => {
	return (
		<div className="home">
			<NavigationBar />
			<Header />
			<AboutMe />
			<Experience />
			<div className="transition"></div>
			<Projects />
			<div className="transition rotate-180"></div>
			<Contact />
		</div>
	);
};

export default Home;

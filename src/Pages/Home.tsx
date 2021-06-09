import React from "react";
import "./Home.scss";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import AboutMe from "../Components/AboutMe";

const Home: React.FunctionComponent = () => {
	return (
		<div className="home">
			<NavigationBar />
			<Header />
			<AboutMe />
		</div>
	);
};

export default Home;

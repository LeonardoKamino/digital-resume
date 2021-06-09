import React from "react";
import "./Home.scss";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";

const Home: React.FunctionComponent = () => {
	return (
		<div className="home">
			<NavigationBar />
			<Header />
			<div className="test">
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
				<h1>Ola estou aq em baixo</h1>
			</div>
		</div>
	);
};

export default Home;

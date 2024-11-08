import AppBar from "@material-ui/core/AppBar";
import { useLocation } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import React  from "react";
import "../Style/NavigationBar.scss";

interface Props {
	children?: React.ReactElement;
}

const headersData = [
	{ label: "Home", href: "/" },
	{ label: "Projects", href: "/projects" },
];

export default function NavigationBar(props: Props) {
	const location = useLocation();

	// Function to handle navigation between Home and Projects
	function handleNavigationClick(href: string) {
		if (location.pathname !== href) {
			// Navigate to the target page
			window.location.href = href;
		}
	}

	// Generate navbar choices
	const getNavBarChoices = () => {
		return headersData.map(({ label, href }, index) => (
			<li key={index}>
				<a
					href={href}
					onClick={(e) => {
						e.preventDefault();
						handleNavigationClick(href);
					}}
				>
					{label}
				</a>
			</li>
		));
	};

	function displayNavbar() {
		return (
			<Toolbar className="toolbar">
				<div className="desktop-list">
					<ul>{getNavBarChoices()}</ul>
				</div>
			</Toolbar>
		);
	}

	return (
		<>
			<CssBaseline />
			<AppBar position="static">
				{ displayNavbar()}
			</AppBar>
		</>
	);
}

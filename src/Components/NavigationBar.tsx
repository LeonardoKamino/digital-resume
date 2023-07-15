import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

import "../Style/NavigationBar.scss";

interface Props {
	children?: React.ReactElement;
}

const headersData = [
	{
		label: "About Me",
		href: "#about-me",
	},
	{
		label: "Experience",
		href: "#experience",
	},
	{
		label: "Projects",
		href: "#projects",
	},

	{
		label: "Contact Me",
		href: "#contact",
	},
];

function HideOnScroll({ children }: Props) {
	const trigger = useScrollTrigger();
	return (
		<Slide appear={true} direction="down" in={trigger}>
			{children}
		</Slide>
	);
}

export default function NavigationBar(props: Props) {
	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);

	function displayDesktop() {
		return (
			<Toolbar className="toolbar">
				<div className="desktop-list">
					<ul>{getNavBarChoices()}</ul>
				</div>
			</Toolbar>
		);
	}

	const getNavBarChoices = () => {
		return headersData.map(({ label, href }, index) => {
			return (
				<li>
					<a href={href} key={index}>
						{label}
					</a>
				</li>
			);
		});
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll>
				<AppBar>{mobileView ? "" : displayDesktop()}</AppBar>
			</HideOnScroll>
		</React.Fragment>
	);
}

import PersonalSite from "../Media/PersonalSite.png";
import Hireflow from "../Media/Hireflow.png";
import SortingVisualizer from "../Media/SortingVisualizer.png";
import BatBot from "../Media/BatBot.gif";
import RISC from "../Media/RISC.png";
import AutomaticVaccination from "../Media/AutomaticVaccination.png";


const ProjectsList = [
	{
		id: 1,
		spotlight: true,
		title: "Vaccination Status Checker",
		image: AutomaticVaccination,
		description:
			"This project was developed during the CPEN 291 course. It consists of an autonomous system to allow or deny access into establishment based on COVID-19 vaccination status, self-assessment, and temperature, including an admin portal to visualize data and notify clients in case of exposure to the virus. I was responsible to lead the team and plan the project architecture: technologies used, integration between components, and user flow. In addition to this, I created APIs to connect views with the Arduino components via Node.js and Johnny-Five platform, developed front-end views in React, and the mass emails system via SendGrid mail.",
		skills: ["Project Management", "Node.js", "React", "Johnny-Five", "Arduino", "Git"],
		deploymentLink: "http://jakerubin.ca/projects/covidapp.html",
		githubLink: "",
	},
	{
		id: 2,
		spotlight: false,
		title: "hireflow.com",
		image: Hireflow,
		description:
			"Hireflow is an internal tool developed by my sub-team at UBC Launch Pad design team. Its objective is to make the process of recruitment faster and centralized. Instead of having the data spread in multiple excels, forms, and emailing tools that require manual processing, our app allows to manage all the data and the whole application process in a single dashboard. My role in the teams was as Front-End developer creating views and React components",
		skills: ["Typescript", "React", "Git", "CSS/Sass", "Bulma"],
		deploymentLink: "https://hireflow-client.herokuapp.com",
		githubLink: "https://github.com/ubclaunchpad/club-manager-client",
	},
	{
		id: 3,
		spotlight: false,
		title: "leokamino.com",
		image: PersonalSite,
		description:
			"This is my personal website. Its objective is to work as my digital resume / portifolio, to show my experiences and projects I already worked on.",
		skills: ["Typescript", "React", "HTML", "CSS/Sass", "Bootstrap 5"],
		deploymentLink: "",
		githubLink: "https://github.com/LeonardoKamino/digital-resume",
	},
	{
		id: 4,
		spotlight: true,
		title: "sortingvisualizer.com",
		image: SortingVisualizer,
		description:
			"I decided to do this project to help me improve my front end skills, while learning more about sorting algorithms. My expectations is to keep it as an on going project, updating it as I learn more algorithms. This project was inspired by Clément Mihailescu.",
		skills: [ "Sorting Algorithms", "HTML", "CSS", "JavaScript"],
		deploymentLink: "https://leo-sortingvisualizer.netlify.app",
		githubLink: "https://github.com/LeonardoKamino/sorting_visualizer",
	},

	{
		id: 5,
		spotlight: true,
		title: "RISC CPU",
		image: RISC,
		description:
			"Created a Reduced Instruction Set Computer (RISC) capable of running a Touring-complete set of instructions, meaning this computer could in principle run any program given enough time and enough memory. Developed using Verilog and DE1-SoC FPGA. This project was part of CPEN 211 Labs, so no code can be shared publically.",
		skills: ["Verilog", "Hardware", "Digital Systems", "DE1-SoC", "FPGA"],
		deploymentLink: "",
		githubLink: "",
	},

	{
		id: 6,
		spotlight: true,
		title: "BatBot",
		image: BatBot,
		description:
			"This is another project for our CPEN 291 course. During this project we created a dancing robot with sensors, server motors, display, Led and a 3D-printed body. The robot brain was an Itsy Bitsy M4 Express programmed with Circuit Python. The decision for the Batman theme was a weight distribution solution, but it added a nice aesthetics to the final design. ",
		skills: ["Cirrcuit Python", "Robotics", "Itsy Bitsy M4 express", "Adafruit", "Soldering"],
		deploymentLink: "https://www.youtube.com/watch?v=K7ILOBpgLYQ&t=1s&ab_channel=JakeRubin",
		githubLink: "",
	},
];

export default ProjectsList;

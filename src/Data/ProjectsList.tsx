import PersonalSite from "../Media/PersonalSite.png";
import Hireflow from "../Media/Hireflow.png";
import SortingVisualizer from "../Media/SortingVisualizer.png";
import BatBot from "../Media/BatBot.gif";
import RISC from "../Media/RISC.png";
import AutomaticVaccination from "../Media/AutomaticVaccination.png";

const ProjectsList = [
	{
		id: "vaccination-status-checker",
		spotlight: true,
		title: "Vaccination Status Checker",
		image: AutomaticVaccination,
		summary: "Autonomous system to verify COVID-19 vaccination status for access control",
		description:
			"This project was developed during the CPEN 291 course. It consists of an autonomous system to allow or deny access into establishments based on COVID-19 vaccination status, self-assessment, and temperature, including an admin portal for data visualization and notifications in case of virus exposure. I led the project architecture and integration between components and developed APIs to connect views with Arduino components via Node.js and Johnny-Five, alongside front-end views in React.",
		skills: ["Project Management", "Node.js", "React", "Johnny-Five", "Arduino", "Git"],
		bulletPoints: ["API Development", "Front-End Views", "Mass Email System"],
		deploymentLink: "http://jakerubin.ca/projects/covidapp.html",
		githubLink: "",
		reportLink: "",
		date: "Jan 2022 - Apr 2022",
		status: "Completed",
		videoDemoLink: "",
	},

	{
		id: "hireflow",
		spotlight: false,
		title: "hireflow.com",
		image: Hireflow,
		summary: "Streamlining the recruitment process for student clubs",
		description:
			"Hireflow is an internal tool developed by my sub-team at UBC Launch Pad. Its objective is to make the process of recruitment faster and centralized. My role was as a Front-End developer, creating views and React components.",
		skills: ["Typescript", "React", "Git", "CSS/Sass", "Bulma"],
		bulletPoints: ["User Authentication", "Centralized Dashboard", "Automated Emails"],
		deploymentLink: "https://hireflow-client.herokuapp.com",
		githubLink: "https://github.com/ubclaunchpad/club-manager-client",
		reportLink: "",
		date: "Sep 2020 - Apr 2021",
		status: "Completed",
		videoDemoLink: "",
	},

	{
		id: "personal-site",
		spotlight: false,
		title: "leokamino.com",
		image: PersonalSite,
		summary: "Personal website serving as a digital resume and portfolio",
		description:
			"This is my personal website, intended to work as a digital resume/portfolio to showcase my experiences and projects.",
		skills: ["Typescript", "React", "HTML", "CSS/Sass", "Bootstrap 5"],
		bulletPoints: ["Portfolio Showcase", "Responsive Design"],
		deploymentLink: "",
		githubLink: "https://github.com/LeonardoKamino/digital-resume",
		reportLink: "",
		date: "Ongoing",
		status: "In Progress",
		videoDemoLink: "",
	},

	{
		id: "sorting-visualizer",
		spotlight: true,
		title: "sortingvisualizer.com",
		image: SortingVisualizer,
		summary: "Visualization tool for sorting algorithms",
		description:
			"This project was developed to improve my front-end skills while learning more about sorting algorithms. I plan to keep it as an ongoing project, updating it as I learn more algorithms. The project was inspired by Clément Mihailescu.",
		skills: ["Sorting Algorithms", "HTML", "CSS", "JavaScript"],
		bulletPoints: ["Algorithm Visualization", "Educational Tool"],
		deploymentLink: "https://leo-sortingvisualizer.netlify.app",
		githubLink: "https://github.com/LeonardoKamino/sorting_visualizer",
		reportLink: "",
		date: "Jul 2020 - Jun 2020",
		status: "Completed",
		videoDemoLink: "",
	},

	{
		id: "risc-cpu",
		spotlight: true,
		title: "RISC CPU",
		image: RISC,
		summary: "Developed a Reduced Instruction Set Computer",
		description:
			"Created a RISC CPU capable of running a Turing-complete set of instructions, meaning it could theoretically run any program given enough resources. Developed using Verilog on the DE1-SoC FPGA. This was part of CPEN 211 Labs, so code is not publicly shared.",
		skills: ["Verilog", "Hardware", "Digital Systems", "DE1-SoC", "FPGA"],
		bulletPoints: ["FPGA Implementation", "Digital Design"],
		deploymentLink: "",
		githubLink: "",
		reportLink: "",
		date: "Sep 2021 - Dec 2021",
		status: "Completed",
		videoDemoLink: "",
	},

	{
		id: "bat-bot",
		spotlight: false,
		title: "BatBot",
		image: BatBot,
		summary: "Dancing robot with sensors and servos",
		description:
			"This was a project for the CPEN 291 course, where we created a dancing robot with sensors, servo motors, display, LEDs, and a 3D-printed body. The robot's brain was an Itsy Bitsy M4 Express programmed with CircuitPython. The Batman theme was chosen as a weight distribution solution, adding a nice aesthetic to the final design.",
		skills: ["CircuitPython", "Robotics", "Itsy Bitsy M4", "Adafruit", "Soldering"],
		bulletPoints: ["3D Printing", "Servo Control", "Sensor Integration"],
		deploymentLink: "",
		githubLink: "",
		reportLink: "",
		date: "Jan 2020 - Feb 2020",
		status: "Completed",
		videoDemoLink: "https://www.youtube.com/embed/K7ILOBpgLYQ?si=8Mb625jJVFnAVff5" 
	},
];

export default ProjectsList;

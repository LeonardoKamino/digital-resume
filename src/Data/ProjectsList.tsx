import PersonalSite from "../Media/PersonalSite.png";
import Hireflow from "../Media/Hireflow.png";
import SortingVisualizer from "../Media/SortingVisualizer.png";
import BatBot from "../Media/BatBot.gif";
import RISC from "../Media/RISC.png";
import AutomaticVaccination from "../Media/AutomaticVaccination.png";
import LangSync from "../Media/LangSync.png";
import ECommerceTesting from "../Media/ECommerceTesting.png";
import ChatAIModeration from "../Media/ChatAIModeration.png";

const ProjectsList = [
	{
		id: "langsync",
		spotlight: true,
		title: "LangSync",
		image: LangSync,
		summary: "Best Project Award in CPEN321-Software Engineering",
		description: 
		  "LangSync is a match-making platform for language learners, developed as part of a senior software engineering course at UBC. I led a team of 4, taking on a full-stack role and ensuring project delivery. The app helps users find language partners and schedule learning sessions with ease.",
		skills: ["Java", "Android", "Node.js", "MongoDB", "Mongoose", "Azure", "GitHub Actions"],
		bulletPoints: [
		  "Developed a recommendation algorithm for match-making",
		  "Implemented Google OAuth2 authentication and video calling",
		  "Integrated Google Calendar API for automated session scheduling",
		  "Automated CI/CD pipeline using GitHub Actions for continuous integration",
		  "Optimized backend services for efficient data retrieval and messaging"
		],
		deploymentLink: "https://drive.google.com/file/d/18r4xUn-5aL5CiX-CFFK-AW0r76iHnt2M/view?usp=sharing",
		githubLink: "https://github.com/LeonardoKamino/langsync",
		reportLink: "https://drive.google.com/file/d/1jJ2oRLGhjtI8OPPorM3qZA5FoI5ATR6r/view?usp=sharing",
		date: "Jan 2023 - Apr 2023",
		status: "Completed",
		videoDemoLink: ""
	},	  
	{
		id: "ecommerce-ui-testing",
		spotlight: false,
		title: "UI Testing for E-Commerce Platform",
		image: ECommerceTesting,
		summary: "Comprehensive automated UI testing for an e-commerce platform",
		description: 
		  "Automated UI testing for an e-commerce website using Selenium WebDriver, ensuring seamless user experience for key functionalities like checkout, adding items to cart, and user registration. Implemented a robust CI/CD pipeline with GitHub Actions to automate test execution and generate Allure reports for in-depth analysis and tracking.",
		skills: ["Python", "PyTest", "Selenium", "GitHub Actions", "Allure", "Page Object Model"],
		bulletPoints: [
		  "Covered critical functionalities including checkout, cart management, and user registration",
		  "Integrated GitHub Actions for automated test execution and report generation",
		  "Implemented Page Object Model (POM) for maintainable and scalable test scripts"
		],
		deploymentLink: "https://sunny-brigadeiros-4077a2.netlify.app/#",
		githubLink: "",
		reportLink: "",
		date: "Oct 2024 - Nov 2024",
		status: "Completed",
		videoDemoLink: ""
	},
	{
		id: "chat-ai-moderation",
		spotlight: true,
		title: "Chat Application with AI Moderation",
		image: ChatAIModeration,
		summary: "Real-time chat application with AI-powered content moderation using GPT4All",
		description: 
		  "Developed a chat application with AI moderation capabilities using the GPT4All Mistral OpenOrca model to filter inappropriate content in real-time. Built a scalable Node.js backend to handle server operations and user sessions, ensuring stable performance. Leveraged MongoDB for efficient data storage and retrieval of user data and chat history, while designing a responsive and intuitive frontend using HTML, CSS, and JavaScript.",
		skills: ["JavaScript", "AJAX", "Node.js", "MongoDB", "GPT4All", "HTML", "CSS"],
		bulletPoints: [
		  "Developed a Node.js backend for managing server operations and user sessions",
		  "Optimized MongoDB for efficient data storage and chat history retrieval",
		  "Integrated GPT4All model for real-time AI moderation, eliminating external API dependencies",
		  "Designed a smooth and responsive user interface using HTML, CSS, and JavaScript"
		],
		deploymentLink: "",
		githubLink: "https://gitfront.io/r/leokamino/eoAoqin9tmwy/chat-application-322/",
		reportLink: "",
		date: "Jan 2024 - Apr 2024",
		status: "Completed",
		videoDemoLink: ""
	},	  
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
		deploymentLink: "",
		githubLink: "",
		reportLink: "http://jakerubin.ca/projects/covidapp.html",
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
		spotlight: false,
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
		spotlight: false,
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

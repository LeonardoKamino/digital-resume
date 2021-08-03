import PersonalSite from "../Media/PersonalSite.png";
import Hireflow from "../Media/Hireflow.png";
import SortingVisualizer from "../Media/SortingVisualizer.png";
import MoreComing from "../Media/Loading.png";

const ProjectsList = [
	{
		title: "hireflow.com",
		image: Hireflow,
		description:
			"Hireflow is an internal tool developed by my sub-team at UBC Launch Pad design team. Its objective is to make the process of recruitment faster and centralized. Instead of having the data spread in multiple excels, forms, and emailing tools that require manual processing, our app allows to manage all the data and the whole application process in a single dashboard. My role in the teams was as Front-End developer creating views and React components",
		skills: ["Typescript", "React", "Git", "CSS/Sass", "Bulma"],
		deploymentLink: "https://hireflow-client.herokuapp.com",
		githubLink: "https://github.com/ubclaunchpad/club-manager-client",
	},
	{
		title: "leokamino.com",
		image: PersonalSite,
		description:
			"This is my personal website. Its objective is to work as my digital resume / portifolio, to show my experiences and projects I already worked on.",
		skills: ["Typescript", "React", "HTML", "CSS/Sass", "Bootstrap 5"],
		deploymentLink: "",
		githubLink: "https://github.com/LeonardoKamino/digital-resume",
	},
	{
		title: "sortingvisualizer.com",
		image: SortingVisualizer,
		description:
			"The objective of this project is to help me improve my front end skills, while learning more about sorting algorithms. My expectations is to keep it as a on going project, updating it as I learn more algorithms.",
		skills: [ "Sorting Algorithms", "HTML", "CSS", "JavaScript"],
		deploymentLink: "https://leo-sortingvisualizer.netlify.app",
		githubLink: "https://github.com/LeonardoKamino/sorting_visualizer",
	},

	{
		title: "More Coming...",
		image: MoreComing,
		description:
			"Actively trying to create new amazing, useful and stylish projects. Check out later to see the projects that I will be working on. ",
		skills: ["Stylish", "Useful", "Performance", "Elegant", "Creative"],
		deploymentLink: "",
		githubLink: "",
	},
];

export default ProjectsList;

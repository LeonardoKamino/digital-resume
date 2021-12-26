import LaunchPadLogo from "../Media/LaunchpadLogo.png";
import LoadingGear from "../Media/LoadingGear.gif";
import UBCEngineeringLogo from "../Media/UBCEngineeringLogo.png";


const ExperienceList = [
	{
		company: "UBC Faculty of Applied Science",
		role: "Front-End Web Developer",
		duration: "September 2021 - April 2022",
		description:
			"Responsible for creating and updating websites under UBC Faculty of Applied Science using Wordpress and Drupal. Make sure websites follow best SEO practices.",
		skills: ["HTML", "CSS", "Wordpress", "Drupal", "SEO"],	
		logo: UBCEngineeringLogo,
	},
	{
		company: "UBC Launch Pad",
		role: "Front-End Developer",
		duration: "September 2020 - September 2021",
		description:
			"Launch Pad is UBC's one and only student-run software development team, with the goal of creating interesting apps in a professional environment. In a team of 7 with developers and designers, we developed an internal tool to help centralize the team's recruitment process. I mainly worked in the front-end of the application creating Views and React Components.",
		skills: ["TypeScript", "React", "Bulma"],
		logo: LaunchPadLogo,
	},
	{
		company: "Loading...",
		role: "Looking for Co-op Positions",
		duration: "Summer 2022",
		description:
			"I am currently looking for co-op positions for the 2022 Summer. If you are hiring software / computer engineers, has an interest project/idea that I could help or just want to say hi, fell free to contact me",
		skills: ["Communication", "Proactive", "Hard Worker"],
		logo: LoadingGear,
	},
];

export default ExperienceList;

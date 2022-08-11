import LaunchPadLogo from "../Media/LaunchpadLogo.png";
import LoadingGear from "../Media/LoadingGear.gif";
import UBCEngineeringLogo from "../Media/UBCEngineeringLogo.png";
import ChangeHealthcareLogo from "../Media/ChangeHealthcareLogo.jpg";


const ExperienceList = [
	{
		company: "Change Healthcare",
		role: "Software Development Engineer Co-op",
		duration: "May 2022 - Present",
		description: 
		<><ul>
			<li>Responsible for documenting, creating, and sanity testing packages of patches for existing medical devices.</li>
			<li>Created and tested proof of concept unified patch package, to mitigate confusion between support and client. Reduced from 5 to only 2 types of packages.</li>
			<li>Independently working on improving web-based internal tool to create more confidence in the process of PTF Packaging. Communicating with stakeholders, designing low-level wireframes, and implementing code changes.</li>
		</ul></>,
		skills: [],	
		logo: ChangeHealthcareLogo,
	},
	{
		company: "UBC Faculty of Applied Science",
		role: "Front-End Web Developer",
		duration: "September 2021 - April 2022",
		description:
		<><ul>
			<li>Led modernization of UBC research groups’ WordPress websites. Communicated with stakeholders to transform high-level ideas into implemented websites.</li>
			<li>Responsible for maintaining and updating UBC APSC and ENG websites with 6k+ weekly visitors.</li>
			<li>Improved UBC Applied Science website SEO health from 25% to 95%, after analyzing SEO reports and executing changes.</li>
		</ul></>,
		skills: ["HTML", "CSS", "Wordpress", "Drupal", "SEO"],	
		logo: UBCEngineeringLogo,
	},
	{
		company: "UBC Launch Pad (Student Design Team)",
		role: "Front-End Developer",
		duration: "September 2020 - September 2021",
		description:
			<><ul>
				<li>Developed an application to streamline the recruitment process for student clubs.</li>
				<li>Responsible for implementing the views of the application using React.</li>
				<li>Conducted peer code reviews to guarantee best practices and functionality.</li>
			</ul></>,
		skills: ["TypeScript", "React", "Bulma"],
		logo: LaunchPadLogo,
	},
	{
		company: "Loading...",
		role: "Looking for Co-op Positions",
		duration: "Winter 2023",
		description:
			"I am currently looking for co-op positions for the 2023 Summer. If you are hiring software / computer engineers, has an interest project/idea that I could help or just want to say hi, fell free to contact me",
		skills: ["Communication", "Proactive", "Hard Worker"],
		logo: LoadingGear,
	},
];

export default ExperienceList;

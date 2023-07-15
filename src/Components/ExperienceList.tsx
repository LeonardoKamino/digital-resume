import LaunchPadLogo from "../Media/LaunchpadLogo.png";
import LoadingGear from "../Media/LoadingGear.gif";
import UBCEngineeringLogo from "../Media/UBCEngineeringLogo.png";
import ChangeHealthcareLogo from "../Media/ChangeHealthcareLogo.jpg";
import MotorolaLogo from "../Media/Motorola.jpg";


const ExperienceList = [
	{
		company: "Motorola Solutions - Avigilon",
		role: "Software Developer",
		duration: "Jan - Aug 2023",
		description: 
		<><ul>
			<li>Developed new features for the ACM portal following MCV design architecture. Responsible for creating new Views and APIs for the new functionalities.</li>
			<li>Created and integrated React components into Ruby on Rails codebase using Direflow library.</li>
			<li>Improved reliability and efficiency of unit tests using the Rspec tool.</li>
			<li>Responsible for end-to-end and functional testing features of the ACM portal new release candidates.</li>
		</ul></>,
		skills: ["Ruby on Rails", "Sass", "React", "Rspec"],	
		logo: MotorolaLogo,
	},
	{
		company: "Change Healthcare",
		role: "Software Development Engineer",
		duration: "May - December 2022",
		description: 
		<><ul>
			<li>Enhanced web-based internal tool using Angula. Responsible for end-to-end delivery of the project, collaborating with stakeholders, designing wireframes, and implementing code changes.</li>
			<li>Mentored new co-op students, providing onboarding support, and conducting weekly check-in meetings to track progress, address challenges, and answer questions.</li>
			<li>Documented, created, and performed sanity testing on software patch packages for medical devices.</li>
			<li>Streamlined patch package management by creating and testing a unified proof of concept solution, reducing package types from 5 to 2 and minimizing confusion between support and clients.</li>
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
		duration: "Summer 2024",
		description:
			"I am currently looking for co-op positions for the 2024 Summer. If you are hiring software / computer engineers, has an interest project/idea that I could help or just want to say hi, fell free to contact me",
		skills: ["Communication", "Proactive", "Hard Worker"],
		logo: LoadingGear,
	},
];

export default ExperienceList;

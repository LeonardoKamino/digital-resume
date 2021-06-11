import ReactImg from "../Media/Skills/React.png";
import BootstrapImg from "../Media/Skills/Bootstrap.png";
import Bulma from "../Media/Skills/Bulma.png";
import Python from "../Media/Skills/Python.png";
import Html from "../Media/Skills/Html.png";
import Css from "../Media/Skills/CSS3.png";
import C from "../Media/Skills/C.png";
import Javascript from "../Media/Skills/Javascript.png";
import Typescript from "../Media/Skills/Typescript.png";
import Git from "../Media/Skills/Git.png";
import Linux from "../Media/Skills/Linux.png";

const SkillsList: any = [
	{
		sectionTitle: "Frameworks",
		list: [
			{ name: "React", logo: ReactImg },
			{ name: "Bootstrap", logo: BootstrapImg },
			{ name: "Bulma", logo: Bulma },
		],
	},
	{
		sectionTitle: "Languages",
		list: [
			{ name: "Python", logo: Python },
			{ name: "C", logo: C },
			{ name: "Javascript", logo: Javascript },
			{ name: "Typescript", logo: Typescript },
			{ name: "HTML5", logo: Html },
			{ name: "CSS3", logo: Css },
		],
	},
	{
		sectionTitle: "Tools",
		list: [
			{ name: "Git", logo: Git },
			{ name: "Linux", logo: Linux },
		],
	},
];

export default SkillsList;

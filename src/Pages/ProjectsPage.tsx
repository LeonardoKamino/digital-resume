import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import ProjectsList from '../Components/ProjectsList'; 
import ProjectCard from '../Components/ProjectCard';
import '../Style/ProjectsPage.scss';

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-page page">
            <NavigationBar />
            <div className='content-container'>
                <h1 className='title'>Projects</h1>
                <div className="row justify-content-center ">
                    {ProjectsList.map((project) => (
                        <ProjectCard project={project} key={project.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
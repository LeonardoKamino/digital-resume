import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsList from '../Components/ProjectsList';
import NavigationBar from '../Components/NavigationBar';
import '../Style/ProjectPage.scss';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectsList.find((p) => p.id === parseInt(id || ''));

  if (!project) {
    return <div className="project-page">Project not found.</div>;
  }

  return (
    <div className="project-page page">
        <NavigationBar />
        <div className='content-container'>
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} className="project-image" />
          <p>{project.description}</p>
        </div>
    </div>
  );
};

export default ProjectPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsList from '../Data/ProjectsList';
import NavigationBar from '../Components/NavigationBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from '@material-ui/core';
import '../Style/ProjectPage.scss';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectsList.find((p) => p.id === id);

  if (!project) {
    return <div className="project-page">Project not found.</div>;
  }

  return (
    <div className="project-page page">
        <NavigationBar />
        <div className='content-container'>
          <img src={project.image} alt={project.title} />
          <h1>{project.title}</h1>
          <p className='project-subheading'>
            <span className='project-date'>{project.date}</span>
            <span className='project-status'>Status: {project.status}</span>
          </p>
          <p className='project-description'>{project.description}</p>
          <ul className='bullet-points-list'>
            {project.bulletPoints?.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h3>Skills Used</h3>
          {project.skills.map((skill: string, index: number) => (
						<p 
              className={`skill-item ${index === 0 ? 'no-left-margin' : ''}`} 
              key={index}
            >
              {skill}
            </p>
					))}
          {project.videoDemoLink && (
            <div>
              <h3>Video Demo</h3>
              <iframe 
                src={project.videoDemoLink} 
                title="Video Demo" 
                width="560" 
                height="315" 
                />
            </div>
          )}
          <div className="links">
            {project.deploymentLink && (
              <Button 
                className='link-button' 
                startIcon={<FontAwesomeIcon icon="external-link-alt" />} 
                href={project.deploymentLink} 
                target="_blank" 
                rel="noreferrer"
              >
                Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button 
                className='link-button' 
                startIcon={<FontAwesomeIcon icon={["fab", "github"]} />} 
                href={project.githubLink} 
                target="_blank" 
                rel="noreferrer"
              >
                GitHub
              </Button>
            )}
            {project.reportLink && (
              <Button 
                className='link-button' 
                href={project.reportLink} 
                target="_blank" 
                rel="noreferrer"
              >
                Project Report
              </Button>
            )}
          </div>
      </div>
    </div>
  );
};

export default ProjectPage;

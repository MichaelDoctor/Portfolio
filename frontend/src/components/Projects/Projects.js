import { useState } from 'react';
import useFetch from '../../hooks/useFetch.hook'
import Project from "./Project";

const Projects = () => {
    const [ projects, setProjects ] = useState([]);
    // Do something with loading and error later
    useFetch(`https://michael-doctor.me/api/projects/`,setProjects);
    return (
        <div className="projects-container" id="projects">
          <div data-w-id="555ee04a-b52e-f8fb-a4a6-d21ac831f8d7" className="section-heading projects slide-left">
            <div className="section-title">
              <h1 className="heading">My Projects</h1>
            </div>
            <div className="hr"></div>
            <div className="section-desc">
              <div className="text-block">Check out my <a href="https://github.com/MichaelDoctor" className="link">Github <i className="fab fa-github"/></a>
              </div>
            </div>
          </div>
          <div data-w-id="555ee04a-b52e-f8fb-a4a6-d21ac831f8d7" className="projects slide-left">
            <div className="project-holder">
            {projects.map(project=>(<Project 
                    key={project.id}
										img={project.img}
										title={project.title}
										author={project.author}
										datetime={project.date_time}
										date={project.date}
										content={project.content}
										link={project.link} />))}
            </div>
          </div>
        </div>
    )
}
export default Projects;
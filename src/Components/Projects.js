import React, { Component, Fragment } from 'react';
import Project from './projects/Project';

const PROJECTS = [
  {
    projectName: 'Financês',
    projectDescription:
      'Financial web app to handle my finances that were previoulsy managed through a google sheet.',
    projectList: [
      'Used firestore to be my database',
      'Authentication throught firebase with HOC to handle the auth user',
      'Full table cell editable connected to Firebase and with Redux'
    ],
    githubLink: 'https://github.com/SamuelPinho/finances',
    utilized: ['React', 'Redux', 'Firebase Firestore', 'Firebase Authentication']
  },
  {
    projectName: 'React Todo',
    projectDescription:
      'Webapp that I created to serve as an example to a series of 3 articles that was posted on a <a target="_blank" rel="noopener noreferrer" href="https://medium.com/trainingcenter/construindo-uma-aplica%C3%A7%C3%A3o-full-stack-com-react-c1a64db6fc94?source=friends_link&sk=ae6f3bc0ab13a58dbf5b2834843e5712">brazilian Medium page.</a>',
    projectList: [
      'Used MongoLab to be my database',
      'Created an Rest API to serve data to my frontend',
      'Frontend developed with React and Redux fetching data throught Axios'
    ],
    githubLink: 'https://github.com/SamuelPinho/react-todo-bulma',
    utilized: ['React', 'Redux', 'NodeJs', 'Express', 'MongoLab', 'Mongoose', 'Axios']
  },
  {
    projectName: 'E-Commerce of Books',
    projectDescription: 'Website created to be my final work for my graduation.',
    projectList: [
      'Developed with ASP .Net Core following MVC pattern',
      'Created frontend with csHtml',
      'Used Command, Facade, Strategy, DAO and Factory GoF design patterns',
      'Fully working E-Commerce with authentication and role based page'
    ],
    githubLink: 'https://github.com/SamuelPinho/react-todo-bulma',
    utilized: ['ASP .Net Core 2.0', 'PostgreSQL', 'MVC', 'Chart.Js', 'GoF Dessing Patterns']
  }
];

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <div className="column is-three-quarters has-text-centered">
                <h1 className="title is-2 has-text-center">projects</h1>
                {PROJECTS.map(project => (
                  <div className="columns is-mobile">
                    <Project {...project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Projects;

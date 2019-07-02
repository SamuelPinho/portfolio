import React, { Component, Fragment } from 'react';
import Project from './projects/Project';
import { projects } from '../projects';

const PROJECTS = projects;

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

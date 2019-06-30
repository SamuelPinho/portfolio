import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiSourceBranch, mdiEarth } from '@mdi/js';

class Project extends Component {
  render() {
    const {
      projectName,
      projectDescription,
      projectList,
      githubLink,
      liveLink,
      utilized
    } = this.props;

    return (
      <Fragment>
        <div className="column">
          <div className="box is-project">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p style={{ marginBottom: '.5rem' }}>
                    <strong className="title is-3">{projectName}</strong>
                  </p>
                  <div className="field is-grouped">
                    <p className="control">
                      <a
                        className="button is-blue is-small"
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <Icon path={mdiEarth} size={2} />
                        </span>
                        <span>Demo</span>
                      </a>
                    </p>
                    <p className="control">
                      {githubLink != null ? (
                        <a
                          className="button is-social-github is-small"
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <Icon path={mdiSourceBranch} size={2} />
                          </span>
                          <span>View Source</span>
                        </a>
                      ) : (
                        <Fragment>
                          <span className="icon">
                            <Icon path={mdiSourceBranch} size={2} />
                          </span>
                          <span>Private Project</span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: projectDescription }} />
                    <ul>
                      {projectList.map(listItem => (
                        <li>{listItem}</li>
                      ))}
                    </ul>
                  </p>
                </div>
                <p style={{ paddingBottom: '.5rem' }} className="has-text-weight-bold">
                  Utilized Skills
                </p>
                <div class="tags">
                  {utilized.map(tech => (
                    <span className="tag is-link" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </Fragment>
    );
  }
}

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  utilized: PropTypes.array.isRequired
};

export default Project;

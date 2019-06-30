import React, { Component, Fragment } from 'react';
import Icon from '@mdi/react';
import { mdiGithubCircle, mdiMedium, mdiLinkedin } from '@mdi/js';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <section className="section has-background-dark">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <div className="column is-three-quarters has-text-centered has-text-white">
                <p>
                  <span>Developed by Samuel Monteiro.</span>
                  <br />
                  <span>
                    <a
                      className="is-dark-link"
                      href="https://github.com/SamuelPinho/portfolio"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Source Code
                    </a>
                  </span>
                  <br />
                  <div className="is-footer-icons">
                    <a
                      href="https://github.com/SamuelPinho"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="icon is-medium">
                        <Icon path={mdiGithubCircle} size={2} />
                      </span>
                    </a>
                    <a
                      href="https://medium.com/@samuelmonteiro"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="icon is-medium">
                        <Icon path={mdiMedium} size={2} />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samuelmpinho/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="icon is-medium">
                        <Icon path={mdiLinkedin} size={2} />
                      </span>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Footer;

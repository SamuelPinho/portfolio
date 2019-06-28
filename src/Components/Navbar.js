import React, { Component, Fragment } from "react";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <a
                class="navbar-item has-text-weight-bold"
                href="https://github.com/SamuelPinho"
                target="_blank"
                rel="noopener noreferrer"
              >
                Samuel Monteiro
              </a>

              <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start" />

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a
                      class="button is-black is-outlined is-small"
                      href="https://github.com/SamuelPinho"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <strong>GitHub</strong>
                    </a>
                    <a
                      class="button is-dark is-outlined is-small"
                      href="https://medium.com/@samuelmonteiro"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <strong>Medium</strong>
                    </a>
                    <a
                      class="button is-link is-outlined is-small"
                      href="https://www.linkedin.com/in/samuelmpinho/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <strong>Linkedin</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;

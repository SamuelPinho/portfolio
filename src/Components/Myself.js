import React, { Component, Fragment } from 'react';
import Icons from './myself/SkillsIcons';

import SocialButtons from './myself/SocialButtons';

class Myself extends Component {
  render() {
    return (
      <Fragment>
        <section className="section has-background-warning">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <div className="column is-half has-text-centered">
                <h1 className="title is-1 has-text-center">Samuel Monteiro</h1>
                <h2
                  className="subtitle is-4 is-different-font"
                  style={{ marginBottom: '1rem' }}
                >
                  Self-Taught web developer and little bit of designer too
                </h2>
                {/* <p className="is-size-5">
                  I'm a self-taught developer and a little bit of designer too.
                </p> */}
                <p
                  className="is-size-5"
                  style={{ paddingBottom: '1rem', paddingTop: '1.5rem' }}
                >
                  {'{ main skills }'}
                </p>
                <Icons />
                <SocialButtons />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Myself;

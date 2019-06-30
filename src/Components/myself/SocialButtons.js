import React, { Component, Fragment } from 'react';
import Icon from '@mdi/react';

import {
  mdiGithubCircle,
  mdiMedium,
  mdiLinkedin,
  mdiFileDocumentBoxOutline
} from '@mdi/js';

class SocialButtons extends Component {
  render() {
    return (
      <Fragment>
        {' '}
        <div
          className="buttons"
          style={{
            paddingTop: '2rem'
          }}
        >
          {' '}
          <a
            className="button is-social-github"
            href="https://github.com/SamuelPinho"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            <span className="icon">
              {' '}
              <Icon path={mdiGithubCircle} size={2} />{' '}
            </span>{' '}
            <span>github</span>{' '}
          </a>{' '}
          <a
            className="button is-social-medium"
            href="https://medium.com/@samuelmonteiro"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            <span className="icon">
              {' '}
              <Icon path={mdiMedium} size={2} />{' '}
            </span>{' '}
            <span>medium</span>{' '}
          </a>{' '}
          <a
            className="button is-social-linkedin"
            href="https://www.linkedin.com/in/samuelmpinho/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            <span className="icon">
              {' '}
              <Icon path={mdiLinkedin} size={2} />{' '}
            </span>{' '}
            <span>linkedin</span>{' '}
          </a>{' '}
          <a
            className="button is-social-resume"
            href="https://drive.google.com/file/d/1YelKfHrVbmRWmheKeqja5-04vlRLSoo4/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            <span className="icon">
              {' '}
              <Icon path={mdiFileDocumentBoxOutline} size={2} />{' '}
            </span>{' '}
            <span>my resume</span>{' '}
          </a>{' '}
        </div>{' '}
      </Fragment>
    );
  }
}

export default SocialButtons;

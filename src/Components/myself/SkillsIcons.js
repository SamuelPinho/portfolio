import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiLanguageJavascript,
  mdiReact,
  mdiNodejs,
  mdiFirebase,
  mdiDotNet,
  mdiLanguageCsharp
} from '@mdi/js';

class Icons extends Component {
  render() {
    return (
      <div class="columns is-multiline is-mobile is-skill-icons">
        <div class="column has-text-centered is-one-third-mobile">
          <div>
            <Icon path={mdiLanguageJavascript} size={2} />
          </div>
        </div>
        <div class="column has-text-centered is-one-third-mobile">
          <div>
            <Icon path={mdiReact} size={2} />
          </div>
        </div>
        <div class="column has-text-centered is-one-third-mobile">
          <div>
            <Icon path={mdiNodejs} size={2} />
          </div>
        </div>
        <div class="column has-text-centered is-one-third-mobile">
          <div>
            <Icon path={mdiFirebase} size={2} />
          </div>
        </div>
        <div class="column has-text-centered is-one-third-mobile">
          <div>
            <Icon path={mdiDotNet} size={2} />
          </div>
        </div>
        <div class="column has-text-centered is-one-third-mobile">
          <div>
            <Icon path={mdiLanguageCsharp} size={2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;

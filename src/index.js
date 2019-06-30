import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Style/theme.scss';
import Myself from './Components/Myself';
import Projects from './Components/Projects';
import EmailForm from './Components/EmailForm';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment>
      <Myself />

      <Projects />

      <EmailForm />

      <Footer />
    </Fragment>
  );
}

document.title = 'Samuel Monteiro / Portfolio';
ReactDOM.render(<App />, document.getElementById('root'));

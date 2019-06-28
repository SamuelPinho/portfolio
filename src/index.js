import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import Navbar from "./Components/Navbar";
import Icons from "./Components/Icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

library.add(faJsSquare, faReact);

function App() {
  return (
    <Fragment>
      <Navbar />
      <section className="section has-background-light">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <h1 className="title is-3 has-text-center">Samuel Monteiro</h1>
              <h2 className="subtitle is-5">Full-Stack Web Developer</h2>
              <Icons />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" />
      </section>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

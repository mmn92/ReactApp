import React, { Fragment, Component } from "react";
import axios from "axios";

import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import { Display } from "./components/Display";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <header>
          <h1>Title here</h1>
          <h2>more text here</h2>
        </header>
        <main>
          <h1>Accordion Demo</h1>
          <Accordion>
            <div label="Alligator Mississippiensis">
              <p>
                <strong>Common Name:</strong> American Alligator
              </p>
              <p>
                <strong>Distribution:</strong> Texas to North Carolina, US
              </p>
              <p>
                <strong>Endangered Status:</strong> Currently not endangered
              </p>
            </div>
            <div label="Alligator Sinensis">
              <p>
                <strong>Common Name:</strong> Chinese Alligator
              </p>
              <p>
                <strong>Distribution:</strong> Eastern China
              </p>
              <p>
                <strong>Endangered Status:</strong> Critically Endangered
              </p>
            </div>
          </Accordion>
        </main>
        <nav>
          <Display name="Matheus" />
          <Button text="Default" />
        </nav>
        <footer>
          <h1>Tabs Demo</h1>
          <Tabs>
            <div label="Gator">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Croc">
              After 'while, <em>Crocodile</em>!
            </div>
            <div label="Sarcosuchus">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
          </Tabs>
        </footer>
      </Fragment>
    );
  }
}

export default App;

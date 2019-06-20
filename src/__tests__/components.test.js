import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../App";

describe("First render test", () => {
  it("renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

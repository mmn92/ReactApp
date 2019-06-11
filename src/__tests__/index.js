import React from "react";
import { create } from "react-test-renderer";
import axios from "axios";

import { Display } from "../components/Display";
import Button from "../components/Button";
import Users from "../components/Users";

describe("Display component", () => {
  test("it matches snapshot", () => {
    const component = create(<Display name="Matheus" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Button component", () => {
  test("it changes the text when clicked", () => {
    const component = create(<Button text="default" />);
    const rootInstance = component.root;

    const button = rootInstance.findByType("button");
    button.props.onClick();

    expect(button.props.children).toBe("Clicked");
  });
});

jest.mock("axios");

describe("Users component", () => {
  it("shows a list of users", async () => {
    const response = {
      data: [{ name: "Mr Man" }, { name: "Lord Dude" }]
    };
    axios.get.mockResolvedValue(response);

    const component = create(<Users />);
    const instance = component.getInstance();
    await instance.componentDidMount();

    const root = component.root;
    const listOfLi = root.findAll(element => element.type === "li");

    expect(listOfLi[0].props.children).toBe("Mr Man");
    expect(listOfLi[1].props.children).toBe("Lord Dude");
  });
});

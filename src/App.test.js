import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Container from "./components/Container";

test("renders without crashing", () => {
  shallow(<App />);
});

test("includes Container", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Container />)).toEqual(true);
});

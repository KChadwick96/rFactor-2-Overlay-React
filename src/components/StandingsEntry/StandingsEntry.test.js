import React from "react";
import { shallow } from "enzyme";
import StandingsEntry from "./StandingsEntry";

let wrapper = shallow(<StandingsEntry />);

describe("<StandingsEntry />", () => {
  it("Renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });
});

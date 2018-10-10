import React from "react";
import { shallow } from "enzyme";
import CountdownTimer from "./CountdownTimer";

let wrapper = shallow(<CountdownTimer session="Q1" secondsLeft={500} />);

describe("<CountdownTimer />", () => {
  it("Renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Shows correct timer value", () => {});

  it("Shows current session prefix", () => {});
});

import React from "react";
import { shallow } from "enzyme";
import LapCounter from "./LapCounter";

const CURRENT_LAP = 1;
const TOTAL_LAPS = 10;

let wrapper = shallow(
  <LapCounter currentLap={CURRENT_LAP} totalLaps={TOTAL_LAPS} />
);

describe("<CountdownTimer />", () => {
  it("Renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Shows correct timer value", () => {});

  it("Shows current session prefix", () => {});
});

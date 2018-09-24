import React from "react";
import { shallow } from "enzyme";
import LapCounter from "./LapCounter";

const CURRENT_LAP = 1;
const TOTAL_LAPS = 10;

let wrapper = shallow(
  <LapCounter currentLap={CURRENT_LAP} totalLaps={TOTAL_LAPS} />
);

describe("<LapCounter />", () => {
  it("Renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Shows correct lap values", () => {
    expect(wrapper.text()).toBe(`LAP ${CURRENT_LAP}/${TOTAL_LAPS}`);
  });
});

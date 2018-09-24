import React from "react";
import { shallow } from "enzyme";
import SessionOverview from "./SessionOverview";
import { PracticeSessionData, RaceSessionData } from "../../data/sample";

let wrapper = shallow(
  <SessionOverview colorPreset="red" sessionData={PracticeSessionData} />
);

let wrapperRace = shallow(
  <SessionOverview colorPreset="orange" sessionData={RaceSessionData} />
);

const wrapperNoColours = shallow(
  <SessionOverview sessionData={PracticeSessionData} />
);

describe("<SessionOverview />", () => {
  it("Renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should not render when not passed session data", () => {
    let wrapper = shallow(<SessionOverview />);
    expect(wrapper.equals(null)).toBe(true);
  });

  it("Should render when not passed colorPreset prop", () => {
    expect(wrapperNoColours.length).toBe(1);
  });

  it("Should render <CountdownTimer /> when in practice/warmup/quali session", () => {
    expect(wrapper.find("CountdownTimer").length).toBe(1);
  });

  it("Should render <LapCounter /> when in race mode", () => {
    expect(wrapperRace.find("LapCounter").length).toBe(1);
  });
});

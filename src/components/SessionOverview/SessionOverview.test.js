import React from "react";
import { shallow } from "enzyme";
import SessionOverview from "./";

let wrapper = shallow(
  <SessionOverview
    bgColor="#000"
    textColor="#FFF"
    borderColor="yellow"
    sessionData={{
      enter: 0,
      props: 0,
      here: 0
    }}
  />
);

describe("<SessionOverview />", () => {
  it("Renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should not render when not passed session data", () => {
    let wrapper = shallow(<SessionOverview />);
    expect(wrapper.equals(null)).toBe(true);
  });

  it("Should render when not passed colours", () => {});

  it("Should render timer when in practice/warmup/quali session", () => {});

  it("Should render lap counter when in race mode", () => {});
});

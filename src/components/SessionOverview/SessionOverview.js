import React from "react";
import PropTypes from "prop-types";
import CountdownTimer from "../CountdownTimer";
import LapCounter from "../LapCounter";

const COMPONENT_TYPE_TIMER = "COMPONENT_TYPE_TIMER";
const COMPONENT_TYPE_LAP = "COMPONENT_TYPE_LAP";

const SESSION_COUNTDOWN = ["practice", "qualify", "warmup"];
const SESSION_LAP = ["race"];

const getComponentType = session => {
  session = session.toLowerCase();

  let componentType;
  SESSION_COUNTDOWN.forEach(type => {
    if (session.includes(type)) {
      componentType = COMPONENT_TYPE_TIMER;
    }
  });

  if (componentType) return componentType;

  SESSION_LAP.forEach(type => {
    if (session.includes(type)) {
      componentType = COMPONENT_TYPE_LAP;
    }
  });

  return componentType;
};

const SessionOverview = ({ sessionData, colorPreset }) => {
  if (!sessionData) {
    return null;
  }

  const componentType = getComponentType(sessionData.session);

  return (
    <div>
      {componentType === COMPONENT_TYPE_TIMER && <CountdownTimer />}
      {componentType === COMPONENT_TYPE_LAP && <LapCounter />}
    </div>
  );
};

SessionOverview.propTypes = {
  sessionData: PropTypes.object,
  colorPreset: PropTypes.string
};

SessionOverview.defaultProps = {
  colorPreset: "red"
};

export default SessionOverview;

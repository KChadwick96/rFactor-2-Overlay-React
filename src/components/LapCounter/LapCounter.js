import React from "react";
import PropTypes from "prop-types";

const LapCounter = ({ currentLap, totalLaps }) => (
  <div>
    LAP {currentLap}/{totalLaps}
  </div>
);

LapCounter.propTypes = {
  currentLap: PropTypes.number,
  totalLaps: PropTypes.number
};

export default LapCounter;

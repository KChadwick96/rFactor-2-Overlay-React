import React from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ session, secondsLeft }) => {
  const calculateMinutes = () => {
    // TODO: do something with seconds left
    return "15:00";
  };

  return (
    <p>
      {session} {calculateMinutes()}
    </p>
  );
};

CountdownTimer.propTypes = {
  session: PropTypes.string.isRequired,
  secondsLeft: PropTypes.number.isRequired
};

export default CountdownTimer;

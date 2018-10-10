import React, { Component } from "react";
import SessionOverview from "./components/SessionOverview";
import StandingsEntry from "./components/StandingsEntry";

class App extends Component {
  render() {
    return (
      <div>
        <SessionOverview
          sessionData={{
            session: "practice"
          }}
        />

        <StandingsEntry />
      </div>
    );
  }
}

export default App;

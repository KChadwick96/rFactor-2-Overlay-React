import React, { Component } from "react";
import SessionOverview from "./components/SessionOverview";

class App extends Component {
  render() {
    return (
      <div>
        <SessionOverview
          sessionData={{
            session: "race"
          }}
        />
      </div>
    );
  }
}

export default App;

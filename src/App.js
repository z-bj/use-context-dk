import React from "react";
import Profile from "./components/Profile";
import { UserContext, ColorContext } from "./components/MyContext";
import "./App.css";

class App extends React.Component {
  state = {
    user: {
      name: "Lisa",
      Age: 8,
    },
  };

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state.user}>
          <ColorContext.Provider value={"red"}>
            <Profile />;
          </ColorContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;

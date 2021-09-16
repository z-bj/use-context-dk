import React from "react";
import { UserContext, ColorContext } from "./MyContext";
const ContentData = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <ColorContext.Consumer>
            {(color) => {
              return (
                <div style={{ color: color }}>
                  <ul>
                    <li>Nom:{user.name}</li>
                    <li>Age:{user.Age}</li>
                  </ul>
                </div>
              );
            }}
          </ColorContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ContentData;

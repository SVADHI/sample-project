import React, { useContext } from "react";
import { Suricontext } from "./ComponentOne";

const ChildTwoFunComponent = () => {
  const context = useContext(Suricontext);
  console.log("helo", context.name);
  return (
    <div>
      {context.name}={context.age}
      <Suricontext.Consumer>
        {(context) => {
          return (
            <p>
              hello this is functional component context {context.name}-
              {context.age}
            </p>
          );
        }}
      </Suricontext.Consumer>
    </div>
  );
};

export default ChildTwoFunComponent;

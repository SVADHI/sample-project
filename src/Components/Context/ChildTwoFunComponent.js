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
            <div>
              <p>
                hello this is functional component context {context.name}-
                {context.age}
              </p>
            </div>
          );
        }}
      </Suricontext.Consumer>
    </div>
  );
};

export default ChildTwoFunComponent;

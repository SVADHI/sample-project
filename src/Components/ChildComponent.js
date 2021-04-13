import React from "react";

const ChildComponent = ({ callParent }) => {
  return (
    <div>
      <button onClick={callParent}>click</button>
    </div>
  );
};

export default ChildComponent;

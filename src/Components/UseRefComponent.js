import React, { forwardRef, useRef, useImperativeHandle } from "react";

const UseRefComponent = () => {
  const refInput = useRef();
  const childRef = useRef();
  const onClickButton = () => {
    refInput.current.focus();
  };

  const onCallChild = () => {
    let value = childRef.current.value;
    childRef.current.displayAlert(value);
  };
  return (
    <div>
      <input ref={refInput} type="text" />
      <button onClick={onClickButton}>focus input</button>
      <button onClick={onCallChild}>call childfunc</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

export default UseRefComponent;

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    displayAlert: () => {
      alert("Child display fucntion");
    },
  }));

  return (
    <div>
      <button>cbutton</button>
    </div>
  );
});

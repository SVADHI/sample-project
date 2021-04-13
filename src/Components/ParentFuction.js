import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import ChildComponent from "./ChildComponent";
export default function ParentFunction() {
  const childRef = useRef();
  const [name, setName] = useState("Ramu");

  const callParent = () => {
    console.log("called from child component");
    setName("updated");
  };
  return (
    <div className="container">
      <div>Parent Component</div>
      <button
        onClick={() => {
          childRef.current.showAlert();
        }}
      >
        Call
      </button>
      <Child ref={childRef} />
      name::{name}
      <ChildComponent callParent={callParent} />
    </div>
  );
}
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showAlert: () => {
      alert("Child Function Called");
    },
  }));
  return (
    <div>
      Child Component <br />
      <button>cbutton</button>
      <br />
      <input type="text"></input>
    </div>
  );
});

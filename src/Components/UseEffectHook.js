import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [width, setwidth] = useState(window.screen.width);

  const changeWidthListner = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeWidthListner);

    return () => {
      window.removeEventListener("resize", changeWidthListner);
    };
  }, [width]);
  return (
    <div>
      <p>The window width is {width}</p>
    </div>
  );
};

export default UseEffectHook;

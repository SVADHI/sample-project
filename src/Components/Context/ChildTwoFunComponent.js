import React, { useContext, useState } from "react";
import { Suricontext } from "./ComponentOne";

const ChildTwoFunComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(Suricontext);
  console.log("helo", context.name);
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("username is:" + username + ":::password is:" + password);
  };

  console.log(+"dude");
  console.log(2 + 3 + 4 + "1");
  console.log(2 + true);

  const obj = { a: 1, b: 2, c: 3 };
  delete obj.a;

  console.log(obj);

  var name = "My Name Suri";

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString(name));

  //console.log(Object.keys(obj));
  //console.log(Object.values(obj));

  const suriobj = { name: "suri", age: 32 };

  /* const newobj = Object.assign({}, suriobj, { location: "nellore" });
  console.log(newobj); */

  console.log(suriobj.name1 || "ramu");

  return (
    <div>
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
      <form className="login-form">
        <label>userName:</label>
        <input
          type="text"
          onChange={onUserNameChange}
          placeholder="input name"
          value={username}
        />
        <br />
        <label>Password:</label>
        <input
          type="text"
          placeholder="input password"
          value={password}
          onChange={onPasswordChange}
        />
        <button onClick={onSubmit}>submit</button>
      </form>
    </div>
  );
};

export default ChildTwoFunComponent;

import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
  //Hooks
  //useState => preseves the state of a variable
  // without letting it be overriden easily
  //
  // This state tells us if the site is dark or light
  // by default isDark is set to false
  //
  // const [variable, setterFunction] = useState(0)
  //
  // variable = 3
  // setterFunction(9)
  //
  // print(varaiable)
  // => ?
  //
  //

  const [isDark, setIsDark] = useState(false);

  function handleToggleDark() {
    if (isDark) setIsDark(false);
    else setIsDark(true);
  }

  const divStyle = {
    height: "100vh",
    backgroundColor: isDark && "black",
    transition: "0.3s",
    margin: 0,
    overflow: "scroll",
  };

  return (
    <div style={divStyle}>
      <NavBar handleToggleDark={handleToggleDark} isDark={isDark} />
      <div
        className="banner"
        style={{
          height: "55vh",
          width: "100vw",
        }}
      ></div>
      <AboutMe isDark={isDark} />
    </div>
  );
}

export default App;

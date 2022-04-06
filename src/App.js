import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed :(");
  //   //cleanup function!
  //   //return a function that is going to be runned when the componenet is destroyed
  // }, []);
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

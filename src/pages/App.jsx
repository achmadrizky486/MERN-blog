import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { Router } from "../config";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router />
    </>
  );
}

export default App;

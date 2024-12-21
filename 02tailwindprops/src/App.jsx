import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Kaul",
    age: 21
  }
  let newArray = [12,3,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl rotated-90">Tailwind Test</h1>
      <Card channel="chaiorCode " btn />
      <Card/>
    </>
  );
}

export default App;

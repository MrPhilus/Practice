import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputField from "./components/Inputs";
import InputButton from "./components/Buttons";

const buttonsGrid = [
  { text: "AC" },
  { text: "del" },
  { text: "𝑥²" },
  { text: "sqrt" },
  { text: "/" },
  { text: "7", value: 7 },
  { text: "8", value: 8 },
  { text: "9", value: 9 },
  { text: "*" },
  { text: "4", value: 4 },
  { text: "5", value: 5 },
  { text: "6", value: 6 },
  { text: "+" },
  { text: "1", value: 1 },
  { text: "2", value: 2 },
  { text: "3", value: 3 },
  { text: "-" },
  { text: "." },
  { text: "0", value: 0 },
  { text: "00", value: 0o0 },
  { text: "﹪" },
  { text: "±" },
  { text: "=" },
];

function App() {
  return (
    <div className="calculator">
      <div className="displayArea">
        <InputField />
        <InputField />
      </div>
      <div className="inputArea">
        {buttonsGrid.map((item, index) => {
          return <InputButton key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;

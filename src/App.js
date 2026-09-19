
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState("light")
  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3348";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <Navbar title="Jasmine" Mode={Mode} ToggleMode={ToggleMode} />
      <TextForm heading="Hyyy" Mode={Mode} />
      {/* <About /> */}
    </div>

  );

}

export default App;

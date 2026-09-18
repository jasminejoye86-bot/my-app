
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
    }
    else {
      setMode("light");
    }
  }

  return (
    <div>
      <Navbar title="Jasmine" Mode={Mode} ToggleMode={ToggleMode} />
      <TextForm heading="Hyyy" />
      {/* <About /> */}
    </div>

  );

}

export default App;

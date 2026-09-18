
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState("light")
  const ToggleMode = () => {
    if (Mode === "light")
      setMode("dark");
  }

  return (
    <div>
      <Navbar title="Jasmine" />
      <TextForm heading="Hyyy" />
      {/* <About /> */}
    </div>

  );
}


export default App;

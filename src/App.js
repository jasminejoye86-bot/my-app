
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useActionState, useState } from 'react';

function App() {
  const [Mode, setMode] = useState("light")
  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3348";
      ShowAlert("dark mode enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("light mode enabled", "success");
    }
  }
  const [AlertMsg, setAlertMsg] = useState(null)
  const ShowAlert = (message, type) => {
    setAlertMsg({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertMsg(null);
    }, 2000);
  }

  return (
    <div>
      <Navbar title="Jasmine" Mode={Mode} ToggleMode={ToggleMode} />
      <Alert AlertMsg={AlertMsg} />
      <TextForm ShowAlert={ShowAlert} heading="Hyyy" Mode={Mode} AlertMsg={AlertMsg} />
      {/* <About /> */}
    </div>

  );

}

export default App;

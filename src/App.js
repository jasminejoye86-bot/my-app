import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/textForm';
function App() {
  return (
    <>
      <Navbar title={2} />
      <div className="container my-3">
        <TextForm heading="enter your text here" />
      </div>
    </>
  );
}

export default App;

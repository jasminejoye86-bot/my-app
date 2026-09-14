import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="jasmine joye" />
      <div className="container my-3">
        <TextForm heading="enter your text here" />
      </div>
    </>

  );
}

export default App;

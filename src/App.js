import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import TextForm from './components/textForm';

function App() {
  return (
    <div>
      <Navbar title="Jasmine" />
      {/* <TextForm heading="Hyyy" /> */}
      <About />
    </div>

  );
}


export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/menu" element={<Menu/>} /> 
        <Route path="/about" element={<About/>} /> 
      </Routes>

    </div>
  );
}

export default App;

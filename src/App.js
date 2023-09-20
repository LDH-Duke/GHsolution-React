import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Side from './components/Side';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(0)

  const setView = (idx) => {
    setShow(idx)
  }

  return (
    <div className="App">
      <Nav show={show} setView={setView} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service/*' element={<Service show={show} setView={setView} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

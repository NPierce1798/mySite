
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume';
import Footer from './components/footer';
import Dropdown from './components/dropdown';
import DropD from './components/dropD'

import { ChakraProvider } from '@chakra-ui/react'

function App() {

  var screen = window.innerWidth
  let nav = null

  if (screen <= 600) {
    nav = <DropD />;
  } else {
    nav = <NavBar />;
  }

  return (
    <ChakraProvider>
      <div className="App">
        {nav}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Home from './pages/home';
import Projects from './pages/Projects';
import Contact from './pages/contact';

const App = () =>(
  <>
    <Header/>
    <hr/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  </>
)

export default App;

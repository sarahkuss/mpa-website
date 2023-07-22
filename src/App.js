
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/benefits' element={<Benefits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

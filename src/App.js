
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact'
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/benefits' element={<Benefits />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

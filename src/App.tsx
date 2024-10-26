import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reserve from './pages/Reserve';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservations" element={<Reserve />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homelink from './Pages/Home/Homelink';
import Aboutlink from "./Pages/About/Aboutlink"
import Bloglink from "./Pages/Blog/Bloglink"
import Navbar from './Components/Header/Navbar';
import Carerslink from './Pages/Carers/Carerslink'
import Serveses from './Pages/SERvesis/Serveses';

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homelink />} />
          <Route path="/about" element={<Aboutlink />} />
          <Route path="/Carerslink" element={<Carerslink/>} />
          <Route path="/Serveses" element={<Serveses/>} />
          <Route path="/Bloglink" element={<Bloglink/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

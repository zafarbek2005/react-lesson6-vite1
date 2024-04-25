import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homelink from './Pages/Home/Homelink';
import Aboutlink from "./Pages/About/Aboutlink"
import Bloglink from "./Pages/Blog/Bloglink"
import Navbar from './Components/Header/Navbar';
import Carerslink from './Pages/Carers/Carerslink'
import Serveses from './Pages/SERvesis/Serveses';
import Productlink from './Pages/Productslink/Productslink'
import SingleRoute from './Pages/SingleRoute/SingleRoute';


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
          <Route path="/Productslink" element={<Productlink/>}/>
          <Route path="/Product/:id" element={<SingleRoute/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

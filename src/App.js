import { useState } from "react";
import "./App.css";
import { ecommerce } from "./data";
import Productlistt from "./components/Productlistt";
import NaveBar from "./components/NaveBar";
import { Contact } from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from "./components/Info";



function App() {
  const [product, setProduct] = useState(ecommerce);
  return (
    <div className="App">
    <Router>
    <NaveBar />
        <Routes>
          <Route path="/" element={<Productlistt list={product} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info/:id" element={<Info list={product}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

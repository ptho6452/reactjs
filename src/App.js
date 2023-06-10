import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './component/header';
import './App.css';
// import DataTable from 'react-data-table-component';

import Contact from './component/contact';
import Drink from './component/drink';
import About from './component/about';
import Special from './component/special';
import HomePage from './component/homepage';
import Footer from './component/footer';
import ShowProduct from '../src/admin/admin';
import ProductList from './admin/list';
import AddProduct from './admin/add';
function App() {
  return (
    <Router>
      <div className="tm-container">
        <div className="tm-row">
        <Header />

          <div class="tm-right">
          <main class="tm-main">
          <Routes>
      

            <Route path="/drink" element={<Drink />} />
            <Route path="/About" element={<About />} />
            <Route path="/Special" element={<Special />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Admin" element={<ShowProduct />} />




         


          </Routes>
          </main>
      </div>    

        </div>
      </div>
      <Footer />
      <Routes>
      </Routes>


      <HomePage/>
    </Router>

  );
}

export default App;

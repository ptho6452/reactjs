import React, { useState, useEffect } from 'react';

import "../css/tooplate-wave-cafe.css";
import "../fontawesome/css/all.min.css";

const Drink = () => {
    const [menuItems, setMenuItems] = useState([]);
    // const [cart, setCart] = useState([]);
  
    // Gọi API để lấy danh sách món từ server
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/get-product')
        .then((response) => response.json())
        .then((data) => setMenuItems(data))
        
        .catch((error) => console.log(error));
    }, []);
    
  return (
    <div id="drink" class="tm-page-content">
    <nav class="tm-black-bg tm-drinks-nav">
      <ul>
        {/* <li>
          <a href="#" class="tm-tab-link active" data-id="cold">Iced Coffee</a>
        </li> */}
        {/* <li>
          <a href="#" class="tm-tab-link" data-id="hot">Hot Coffee</a>
        </li> */}
        <li>
          <a href="#" class="tm-tab-link" data-id="juice"><span>Book Shop</span></a>
        </li>
      </ul>
    </nav>

    <div id="cold" class="tm-tab-content">
      <div class="tm-list">
    
        {menuItems.map((item) => (
        <div class="tm-list-item" key={item.id}>          
          <img src={`http://localhost:8000/source/image/product/${item.image}`} class="tm-list-item-img"/>
          <div class="tm-black-bg tm-list-item-text">
            <h3 class="tm-list-item-name">{item.name}<span class="tm-list-item-price">${item.unit_price}</span></h3>
            <p class="tm-list-item-description">{item.description}</p>
            <button type="sbn" class="tm-btn-primary tm-align-right">
            Add to cart
          </button>
          </div>
       
        </div>
          ))}
  
                               
      </div>
    </div> 
   

    
  </div>

  )}
  export default Drink;
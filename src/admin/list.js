import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu GET tới API để lấy danh sách sản phẩm
    axios.get('http://127.0.0.1:8000/api/get-product')
      .then((response) => {
        // Cập nhật state products với danh sách sản phẩm từ API
        setProducts(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error(error);
      });
  }, []);

  return (
    <div>
     <Link to="/add" className="tm-page-link" style={{ width: '50px'}}>
                  <i className="fas fa-glass-martini tm-page-link-icon"></i>
                  <span>Add Product</span>
                </Link>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>

            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>

            {/* Thêm các cột khác tại đây */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.image}</td>

              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              {/* Hiển thị các cột khác tại đây */}
              <td><button type="sbm" backgr='red'>Edit</button><button type="sbm" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;

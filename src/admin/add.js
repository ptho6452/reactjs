import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    image: null
  });

  const handleChange = e => {
    if (e.target.name === 'image') {
      setProduct({ ...product, image: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('image', product.image);

    axios.post('http://127.0.0.1:8000/api/get-product', formData)
      .then(response => {
        console.log('Product added:', response.data);
        setProduct({ name: '', price: 0, description: '', image: null });
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div								
    className="modal fade"								
    id="modelAddProduct"								
    tabIndex={-1}								
    role="dialog"								
    aria-labelledby="modelTitleId"								
    aria-hidden="true"								
    >								
      <div className="modal-dialog" role="document">								
        <div className="modal-content">								
          <div className="modal-header">								
             <h5 className="modal-title">Modal Add Product</h5>								
              <button type="button"className="close"								
                data-dismiss="modal"								
                aria-label="Close"								
                id="closeModalAddBtn"								
                >								
      <span aria-hidden="true">×</span>								
      </button>								
      </div>								
      <div className="modal-body">								
      <form								
      onSubmit={this.onSubmitHandle}								
      encType="multipart/form-data"								
      >								
      <div className="form-group">								
      <label htmlFor="inputName">Name</label>								
      <input								
      type="text"								
      className="form-control"								
      name="inputName"								
      id="inputName"								
      placeholder="Enter name"								
      required								
      />								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputPrice">Price</label>								
      <input								
      type="number"								
      min={10000}								
      className="form-control"								
      name="inputPrice"								
      id="inputPrice"								
      placeholder="Enter price"								
      required								
      />								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputPromotionPrice">								
      Promotion Price								
      </label>								
      <input								
      type="number"								
      min={10000}								
      className="form-control"								
      name="inputPromotionPrice"								
      id="inputPromotionPrice"								
      placeholder="Enter promotion price"								
      />								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputUnit">Unit</label>								
      <input								
      type="text"								
      className="form-control"								
      name="inputUnit"								
      id="inputUnit"								
      placeholder="Enter unit"								
      required								
      />								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputNew">New</label>								
      <input								
      type="number"								
      min={0}								
      className="form-control"								
      name="inputNew"								
      id="inputNew"								
      placeholder="Enter new"								
      required								
      />								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputType">Type</label>								
      <input								
      type="number"								
      min={1}								
      className="form-control"								
      name="inputType"								
      id="inputType"								
      placeholder="Enter type"								
      required								
      />								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputImage">Image file</label>								
      <input								
      type="file"								
      className="form-control-file"								
      name="inputImage"								
      id="inputImage"								
      onChange={(e) => this.handleChange(e.target.files)}								
      required								
      />								
      </div>								
      <div className="form-group">								
      <img								
      id="preview-image-before-upload"								
      src="https://www.riobeauty.co.uk/images/product_image_not_found.gif"								
      alt="xem trước"								
      style={{ maxHeight: 250 }}								
      />								
      {this.previewImage()}								
      </div>								
      <div className="form-group">								
      <label htmlFor="inputDescription">Description</label>								
      <input								
      type="text"								
      name="inputDescription"								
      className="form-control"								
      defaultValue={""}								
      />								
      </div>								
      <button type="submit" className="btn btn-primary">								
      Submit								
      </button>								
      </form>								
      </div>								
      </div>								
      </div>	
    </div>
  );
}

export default AddProduct;

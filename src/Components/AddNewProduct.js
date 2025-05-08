import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function AddNewProduct() {

        const [title, setTitle] = useState('');
        const [price, setPrice] = useState(0);
        let navigate = useNavigate();



    const Submit = (event) => {
        // event.preventDefault();
        fetch('http://localhost:9000/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                price,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));
            Swal.fire({
                title: 'Success!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            }).then(() => {
                navigate('/')
            })
            navigate('/')
    }
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        Product Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Product Name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
      <label htmlFor="exampleFormControlInput2" className="form-label">
      Price
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={ () => {Submit()} } className="btn btn-success mt-4">Add Product</button>
        </div>
    </>
  );
}
export default AddNewProduct;

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
function Edit() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // Fetch existing product data when the component mounts
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
      })
      
  }, [productId]);

  // Handle form submission to update product
  const handleUpdate = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Updated Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    fetch(`http://localhost:9000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/"); // Redirect after successful update
      })
      
  };

  return (
    <div>
      <h1>Edit Product</h1>

      <div className="mb-3">
        <label htmlFor="productTitle" className="form-label">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="productTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button onClick={handleUpdate} className="btn btn-success">Update</button>
    </div>
  );
}

export default Edit;

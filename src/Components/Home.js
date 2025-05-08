import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../App.css';
function Home() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
      GetAllProducts() }, []);



    
      const GetAllProducts = () => {
        fetch('http://localhost:9000/products')
              .then(response => response.json())
              .then(data => setProducts(data));
      }
      
    
    
      const DeleteProduct = (Product) => {
        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your Product has been deleted.',
              'success'
            ).then(() => {
              GetAllProducts();
            });
          }
        })
        fetch(`http://localhost:9000/products/${Product.id}`,{
          method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {GetAllProducts()});
    }

  return (
    <div className="BTN">
        <h1>Product Page</h1>
        <br />
      <Link to="/products/add-new-product" className="btn btn-success">Add New Product</Link>
      <br /><br />
      <table className="table table-hover mt-10 table-1 p-20">
        <thead>
            <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            
                {products.map((product) => {
                    return(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                <Link type="button" className="btn btn-info BTN" to={`/products/${product.id}`}>View</Link>
                <Link  type="button" className="btn btn-warning BTN" to={`/products/edit/${product.id}`}>Edit</Link>
                <button onClick={()=>{DeleteProduct(product)}} type="button" className="btn btn-danger BTN">Delete</button></td>
            </tr>
                )})}
                
        </tbody>
      </table>
    </div>
  );
}
export default Home;
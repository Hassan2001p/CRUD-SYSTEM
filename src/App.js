import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Components/Home';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import View from './Components/View';
import SideBar from './Components/SideBar';
import { Route, Routes } from 'react-router-dom';
import AddNewProduct from './Components/AddNewProduct';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="row">
          <div className="col-2 sidebar">
            <SideBar />
            </div>
          <div className="col-10">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Products />} />
              <Route path='/products/add-new-product' element={<AddNewProduct />} />
              <Route path='/products/:ProductId' element={<View />} />
              <Route path='/products/edit/:productId' element={<Edit />} />
            </Routes>
          </div>
        </div>
      {/* <Home /> */}
    </div>
  );
}
export default App;

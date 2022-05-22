import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Products from './Components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/NotFound';

function App() {
  const products = [
    {
      id: 1,
      name: "T-shrt",
      price: 55,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg",
    },
    {
      id: 2,
      name: "Shorts",
      price: 96,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg",
    },
    {
      id: 3,
      name: "men-shoes",
      price: 196,
      image:
        "http://database.az/upload/Image/posts/12-2016/posts-2084.jpg"
    }]
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="*" element={<NotFound  />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
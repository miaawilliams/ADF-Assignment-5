import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import ProductDetails from './pages/ProductDetails';


const defaultProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://placehold.co/600x400',
    description: 'Premium noise-cancelling headphones with 30-hour battery life'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://placehold.co/600x400',
    description: 'Fitness tracker with heart rate monitor and GPS'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://placehold.co/600x400',
    description: 'Portable waterproof speaker with 360-degree sound'
  },
  {
    id: 4,
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://placehold.co/600x400',
    description: 'Ergonomic aluminum stand for laptops and tablets'
  },
  {
    id: 5,
    name: 'Webcam',
    price: 129.99,
    image: 'https://placehold.co/600x400',
    description: '4K webcam with auto-focus and noise reduction'
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 159.99,
    image: 'https://placehold.co/600x400',
    description: 'RGB backlit keyboard with custom switches'
  }
];

function App() {

  const [products, setProducts] = useState(() => { 
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });

  useEffect(() => {
    try {
      localStorage.setItem('products', JSON.stringify(products)); 
    } 
    catch (error) {
      console.warn('Could not save cart to localStorage:', error);
    }
   }, [products]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };


  return (
    <BrowserRouter>
      <div className='app'>
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={addToCart}/>} />
          <Route path="/products/:id" element={<ProductsPage products={products} addToCart={addToCart}/>}/>
          <Route path="/cart" element={<CartPage products={cart} removeFromCart={removeFromCart}/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
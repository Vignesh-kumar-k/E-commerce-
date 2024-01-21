import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


function App() {
  const [cartitems,setcartitems] = useState([]);
  return ( 
    <div className="App">
      <Router>
       <div>
        <ToastContainer position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" />
        <Header cartitems={cartitems}/>
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/search" element={<Home/>}/>
            <Route path ="/product/:id" element={<ProductDetail cartitems={cartitems} setcartitems={setcartitems} />}/>
            <Route path ="/cart" element={<Cart cartitems={cartitems} setcartitems={setcartitems} />}/>

          </Routes> 
        </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;

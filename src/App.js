
import './App.css';
import Menubar from './Components/Menu/Menubar';
import Category from './Pages/Category';
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom"
import Purchases from './Pages/Purchases';
import Product from './Pages/Product';
import Customer from './Pages/Customer';
import Supliers from './Pages/Supliers';
import Sales from './Pages/Sales';
import Users from './Pages/Users';
import Report from './Pages/Report';

function App() {
  return (
  <>
  <Menubar/>
  <main className='main'>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/supplier" element={<Supliers/>} />
        <Route path="/purchases" element={<Purchases/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/report" element={<Report/>} />
        
      
      </Routes>

  </main>
  
  </>
  );
}

export default App;

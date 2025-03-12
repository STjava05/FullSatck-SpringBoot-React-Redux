
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ViewProduct from './pages/ViewProduct';
import OrdineProduct from './components/OrdineProduct';



function App() {
  return (
    <div >
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='addProduct' element={<AddProduct />} />
          <Route exact path='editProduct/:id' element={<EditProduct />} />
          <Route exact path='viewProduct/:id' element={<ViewProduct />} />
          <Route path='ordineProduct/:id' element={<OrdineProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

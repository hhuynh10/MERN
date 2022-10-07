import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductForm from './components/ProductForm';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addProduct" element={<ProductForm />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path= "/:number" element={<Number />} />
        <Route path= "/:word" element={<Word />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

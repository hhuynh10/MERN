import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import AddPet from './components/AddPet';
import ViewPet from './components/ViewPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/new" element={<AddPet />} />
          <Route path="/pets/:id" element={<ViewPet />} />
          <Route path="/pets/:id/edit" element={<EditPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

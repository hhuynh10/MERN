import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import AddPlayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/players/list" element={<Home />} />
          <Route path="/player/addplayer" element={<AddPlayer />} />
          <Route path="/players/:id/edit" element={<EditPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

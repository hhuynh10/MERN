import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './components/List';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/players/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

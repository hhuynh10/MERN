import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents ';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App" style={{
      height: 'auto',
      width: '960px',
      margin: 'auto',
      marginTop: '50px',
      backgroundColor: 'grey',
      padding: '10px'
    }}>
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;

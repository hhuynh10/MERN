import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents ';
import Advertisement from './components/Advertisement';
import Body from './components/Body';
import TopSub from './components/TopSub';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body>
        <Navigation />
        <Main>
          <TopSub>
            <SubContents />
            <SubContents />
            <SubContents />
          </TopSub>
          <Advertisement />
        </Main>
      </Body>
    </div>
  );
}

export default App;

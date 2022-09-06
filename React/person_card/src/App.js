import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
function App() {
  return (
    <div className="App">
      <Component firstName = {'Jane'} lastName = {'Doe'} age = {'45'} hairColor = {'Black'}  />
      <Component firstName = {'John'} lastName = {'Smith'} age = {'88'} hairColor = {'Brown'}  />
      <Component firstName = {'Millard'} lastName = {'Fillmore'} age = {'50'} hairColor = {'Brown'}  />
      <Component firstName = {'Maria'} lastName = {'Smith'} age = {'62'} hairColor = {'Brown'}  />
    </div>
  );
}

export default App;

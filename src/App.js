import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Routing from './Components/Routing/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;

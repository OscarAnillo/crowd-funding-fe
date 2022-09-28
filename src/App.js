import HeroComponent from './Components/hero-component';

import './App.css';
import MainComponent from './Components/main-component';


function App() {
  return (
    <div className="App">
        <HeroComponent />
      <div className="container">
        <MainComponent />
      </div>
    </div>
  );
}

export default App;

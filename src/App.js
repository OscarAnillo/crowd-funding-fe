import HeroComponent from './Components/hero-component';
import MainComponent from './Components/main-component';

import './App.css';



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

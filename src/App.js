import { useState, useEffect } from 'react';
import HeroComponent from './Components/hero-component';
import MainComponent from './Components/main-component';

import './App.css';



function App() {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if(showMenu){
      document.body.style.background = 'rgb(181, 181, 181)';
    } else {
      document.body.style.background = '#fff';
    }
  }, [showMenu])
  return (
    <div className="App">
        <HeroComponent showMenu={showMenu} clickHandler={clickHandler}/>
      <div className="container">
        <MainComponent />
      </div>
    </div>
  );
}

export default App;

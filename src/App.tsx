import { useState } from 'react';
import './App.css';
import darKLogo from './assets/qcLogoDark.png';
import whiteLogo from './assets/qcLogoWhite.png';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <main className={darkMode ? 'dark' : 'light'}>
      <div className='main-container'>
        <header>
          <span className='box'></span>
          <span className='box title'>
            <img src={darkMode ? whiteLogo : darKLogo} alt="logo" />
            <h1>QuestCritic</h1>
          </span>
          <span className='box log-reg'>
            <p className='login'>LOGIN</p>
            <div className='reg-container'>
              <p className='register'>REGISTER</p>
            </div>
          </span>
        </header>
      </div>
    </main>
  );

};

export default App;
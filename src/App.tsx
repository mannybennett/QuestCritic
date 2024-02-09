import { useState, ChangeEvent } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import darkLogo from './assets/qcLogoDark.png';
import whiteLogo from './assets/qcLogoWhite.png';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSearch = (): void => {
    input ? setSearch(input) : setSearch('');
  };

  return (
    <main className={darkMode ? 'dark' : 'light'}>
      <div className='main-container'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <section>
          <div className='section-container'>
            <div className='searchbar'>
              <input onChange={e => handleInput(e)} value={input} placeholder='SEARCH' type="text"/>
              <button onClick={handleSearch}>
                <img className='search-sword' src={darkMode ? darkLogo : whiteLogo} alt="logo" />
              </button>
            </div>
            <div className='content-container'>
              <h2>{search ? `Results for "${search}"` : 'Featured Games'}</h2>
              <div className='games-container'></div>
            </div>
          </div>
        </section>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </main>
  );

};

export default App;
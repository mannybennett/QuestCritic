import { useState, ChangeEvent, useRef } from 'react';
import './App.css';
import games from './games.json';
import Header from './components/Header';
import Footer from './components/Footer';
import darkLogo from './assets/qcLogoDark.png';
import whiteLogo from './assets/qcLogoWhite.png';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSearch = (): void => {
    input ? setSearch(input) : setSearch('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // const fetchGames = async () : Promise<void> => {
  //   const url = '/api/games';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Client-ID': import.meta.env.VITE_CLIENT,
  //       'Authorization': import.meta.env.VITE_BEARER
  //     },
  //     body: 'fields name, cover.url, release_dates.human, platforms.name, summary; where cover!=null & summary!=null; sort release_dates.date desc; limit 15;'
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   };
  // };

  // useEffect(() => {
  //   fetchGames();
  // }, []);

  return (
    <main className={darkMode ? 'dark' : 'light'}>
      <div className='main-container'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className='content-container'>
          <div className='search-container'>
            <div className='searchbar'>
              <input ref={inputRef} onChange={e => handleInput(e)} onKeyDown={handleKeyDown} value={input} placeholder='SEARCH' type="text"/>
              <button onClick={handleSearch}>
                <img className='search-sword' src={darkMode ? darkLogo : whiteLogo} alt="logo" />
              </button>
            </div>
            <h2>{search ? `Results for "${search}"` : 'Featured Games'}</h2>
          </div>
        </div>
        <section>
          <div className='section-container'>
              <div className='games-container'>
                {games.map((game, key) => {
                  return (
                    <div className='game' key={key}>
                      <div className='cover-container'>
                        <img className='cover' src={`https:${game.cover.url}`} alt="cover" />
                      </div>
                      <div className='info-container'>
                        <Tooltip enterDelay={300} title={game.name} placement="top-start">
                          <h3>{game.name}</h3>
                        </Tooltip>
                        <Rating
                          sx={{'& .MuiRating-iconEmpty': {fill: 'transparent', color: 'grey' }}}
                          name="read-only"
                          value={0}
                          max={10}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
        </section>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </main>
  );

};

export default App;
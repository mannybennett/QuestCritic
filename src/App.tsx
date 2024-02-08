import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <main className={darkMode ? 'dark' : 'light'}>
      <div className='main-container'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <section></section>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </main>
  );

};

export default App;
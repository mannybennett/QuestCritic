import { GitHubLogoIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Props } from '../types';

const Footer = ({darkMode, setDarkMode}:Props) => {

  const handleMode = () : void => {
    setDarkMode(!darkMode);
  }

  return (
    <footer>
      <a className='github' target='_blank' href="https://github.com/mannybennett/QuestCritic">
        <GitHubLogoIcon className='icon'/>
      </a>
      <button onClick={handleMode} className='mode'>
        {darkMode ? <MoonIcon className='icon'/> : <SunIcon className='icon'/>}
      </button>
    </footer>
  );
};
 
export default Footer;
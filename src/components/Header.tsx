import darkLogo from '../assets/qcLogoDark.png';
import whiteLogo from '../assets/qcLogoWhite.png';
import { Props } from '../types';

const Header = ({darkMode}:Props) => {

  return (
    <header>
      <span className='box'></span>
      <span className='box title'>
        <img className='header-sword' src={darkMode ? whiteLogo : darkLogo} alt="logo" />
        <h1>QuestCritic</h1>
      </span>
      <span className='box log-reg'>
        <p className='login'>LOGIN</p>
        <div className='reg-container'>
          <p className='register'>REGISTER</p>
        </div>
      </span>
    </header>
  );

};

export default Header;
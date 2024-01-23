import * as React from 'react';

import language from '../assets/images/Language.png';
import logoTale from '../assets/images/LogoTale.png';
import backgroundImage from '../assets/images/BlueBackground.png';
import '../styles/leftBackgroundStyle.css';


function LeftBackground() {
  return (
    <div
      className="leftBg"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <text className='forgetPwd'>Forget PWD?</text>
      <text className='detailsText'>Don't worry</text>
      <div className="logoTale" style={{ backgroundImage: `url(${logoTale})` }} />
      <div className="language" style={{ backgroundImage: `url(${language})` }} />

    </div>

  );
}

export default LeftBackground;
import * as React from 'react';

import language from '../assets/images/Language.png';
import logoTale from '../assets/images/LogoTale.png';
import backgroundImage from '../assets/images/Left_background.png';
import '../styles/rightBackgroundStyle.css';


function RightBackground() {
  return (
    <div
      className="leftSide"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <text className='helloText'>Hello, Friend!</text>
      <text className='detailsText'>Enter your personal details and start journey with us</text>
      <div className="logoTale" style={{ backgroundImage: `url(${logoTale})` }} />
      <div className="language" style={{ backgroundImage: `url(${language})` }} />

    </div>
    

  );
}

export default RightBackground;
import * as React from 'react';

import backgroundImage from '../assets/images/Left_background.png';
import '../styles/backgroundStyle.css';


function LeftBackground() {
  return (
    <div
      className="leftSide"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <text className='helloText'>Hello, Friend!</text>
      <text className='detailsText'>Enter your personal details and start journey with us</text>
    </div>

  );
}

export default LeftBackground;
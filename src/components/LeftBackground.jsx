import * as React from 'react';

import language from '../assets/images/Language.png';
import group from '../assets/images/Group.png';

import logoTale from '../assets/images/LogoTale.png';
import backgroundImage from '../assets/images/BlueBackground.png';
import '../styles/leftBackgroundStyle.css'

function LeftBackground({ mainText, detailsText }) {
  return (
    <div>
      <div
        className="leftBg"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='mainText'>{mainText}</div>
        <div className='detailsText'>{detailsText}</div>
        <div className="logoTale" style={{ backgroundImage: `url(${logoTale})` }} />
        

          <div className="languageStyle">
            <img src={group} alt="Language" />
            <select className="language-dropdown" style={{ border: 'none' }}>
              <option value="en" style={{ width: '12px', height: '12px' }} >EN</option>
              <option value="fr">FR</option>
            </select>
          </div>

      </div>
    </div>
  );
}

export default LeftBackground;
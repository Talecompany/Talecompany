import React from 'react'
import iconoir_language from '../assets/images/iconoir_language.png';
import Logo_Tale from '../assets/images/Logo_Tale.png';
function Header() {
    const imglogo = {
        width: '160px',
        height: 'auto',
        padding: '10px',

    }
    const imglanguage = {
        position: 'absolute',
        top: '16px',
        right: '0',
        width: '500px',
        height: 'auto',
    }
    return (
        <div className="row-4" >
            <div>
                <img src={Logo_Tale} alt="Logo" style={imglogo} />
            </div>
            <div className="d-flex" style={imglanguage}>
                <img src={iconoir_language} alt="Language" />
                <select className="language-dropdown" style={{ border: 'none' }}>
                    <option value="en" style={{ width: '12px', height: '12px' }} >EN</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </div>

    )
}

export default Header
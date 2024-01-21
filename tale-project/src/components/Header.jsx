import React from 'react'
import iconoir_language from '../images/iconoir_language.png';
import Logo_Tale from '../images/Logo_Tale.png';
function Header() {
    const imglogo = {
        width: '126px',
        height: 'auto',
        padding: '16px',

    }
    const imglanguage = {
        position: 'absolute',
        top: '16px',
        right: '0',
        width: '500px',
        height: 'auto',
    }
    return (
        <div class="row-4" >
            <div>
                <img src={Logo_Tale} alt="Logo" style={imglogo} />
            </div>
            <div class="d-flex" style={imglanguage}>
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
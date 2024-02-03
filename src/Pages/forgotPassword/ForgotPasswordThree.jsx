import React, { useState } from 'react'
import LeftBackground from '../../components/LeftBackground';

function ForgotPasswordThree() {

  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked1password, setChecked1] = useState(false);
  const [isChecked2password, setChecked2] = useState(false);
  const [isChecked3password, setChecked3] = useState(false);




  const [isPasswordVerified, setIsPasswordVerified] = useState(false);


  const [checked, setChecked] = React.useState(false);


  const handleClick = () => {
    setChecked(!checked);
    const isVerified = document.querySelector('input[type="password"]').value.trim() !== '';
    setIsPasswordVerified(isVerified);
    const isWeak = !password.toLowerCase().includes('name') && !password.toLowerCase().includes('@' || '.com' || '.tn');
    const isGood = password.length >= 8;
    const isStrong = /[!@#$%^&*()_+\-={};':"\\|,.<>?0-9]/.test(password);

    setChecked1(isWeak);
    setChecked2(isGood);
    setChecked3(isStrong);

    console.log('Checkbox states:', isChecked1password, isChecked2password, isChecked3password);
  };


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleCheckboxChangep1 = () => {
    setIsChecked1(true);
  };

  const validatePassword = () => {
    const containsNameEmail = !password.toLowerCase().includes('name') && !password.toLowerCase().includes('@' || '.com' || '.tn');
    const containsSymbolNumber = /[!@#$%^&*()_+\-{};':"\\|,.<>?0-9]/.test(password);
    const hasValidLength = password.length >= 8;

    if (containsNameEmail && containsSymbolNumber && hasValidLength) {
      setStrength('strong');
    } else if ((containsNameEmail && hasValidLength)) {
      setStrength('Good');
    } else if (containsNameEmail || containsSymbolNumber || hasValidLength) {
      setStrength('weak');
    } else {
      setStrength('');
    }


  };
  // Function to determine color dynamically
  const getColor = () => {
    switch (strength) {
      case 'strong':
        return '#198754';
      case 'Good':
        return '#0d6efd';
      case 'weak':
        return '#dc3545';
      default:
        return '#000';
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Password:', password);

  };

  const passwordStyle = {
    padding: '100px',
    paddingTop: '100px',
    paddingLeft: '300px',
    textAlign: 'center',
    height: '700px',
    position: 'relative',
  }

  return (

    <div className="container" style={passwordStyle}>
      <LeftBackground mainText={"Forget PWD?"} detailsText={"Don't worry :))"} />
      <div>
        <h1>Create Password</h1>
      </div>
      <div style={{ textAlign: 'Left', paddingTop: '30px', position: 'relative', left: '324px' }}>
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-3">
            <label htmlFor="formGroupPassword" className="form-label" >
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              id="formGroupPassword"
              placeholder="Enter a password"
              style={{ width: '400px !important', height: '51px', border: '2px solid #00C0FC', padding: '12px', transition: 'border-color 0.3s ease', borderColor: '#00C0FC' }}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword();
              }}
              required />

            <div style={{ paddingTop: '20px', display: 'flex', color: '#666666', fontSize: '16' }}>Password Strength: <div style={{ color: getColor(), paddingLeft: '15px' }}>{strength}</div></div>
            {/**CHeck valid of Password */}
            <div>
              <div style={{ display: "flex" }}>
                <div className="form-check">
                  <input className="form-check-input" style={{
                    marginTop: '5px',
                    border: '2px solid', // Border color
                    borderRadius: '14px', // Border radius
                    marginBottom: '15px',
                    height: '20px', // Height
                    marginRight: '5px',// Optional: Add margin for better spacing,
                    color: '#00BDA9',
                    width: '24px', height: '24px', backgroundColor: isChecked1 ? '#00BDA9' : '#ffffff',
                  }}

                    onChange={() => handleCheckboxChangep1(isChecked1password)} checked={isChecked1password} type="checkbox" id="gridCheckp1" />
                  <label className="form-check-label" htmlFor="gridCheckp1" style={{ paddingLeft: '12px', color: '#666666' }} >
                    Must not contain your name or email
                  </label>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="form-check">
                  <input className="form-check-input" style={{
                    border: '2px solid', // Border color
                    borderRadius: '14px', // Border radius
                    marginBottom: '15px',
                    height: '20px', // Height
                    marginRight: '5px',// Optional: Add margin for better spacing,
                    color: '#00BDA9',
                    width: '24px', height: '24px', backgroundColor: isChecked1 ? '#00BDA9' : '#ffffff',
                  }}
                    onChange={handleChange} checked={isChecked2password} type="checkbox" id="gridCheckp2" />
                  <label className="form-check-label" htmlFor="gridCheckp2" style={{ paddingLeft: '12px', color: '#666666' }} required>
                    At least 8 characters
                  </label>
                </div>
              </div>
              <div style={{ display: "flex", paddingBottom: '24px' }}>
                <div className="form-check" >
                  <input className="form-check-input" style={{
                    border: '2px solid',
                    borderRadius: '14px',
                    height: '20px', // Height
                    marginRight: '5px',// Optional: Add margin for better spacing,
                    color: '#00BDA9',
                    width: '24px', height: '24px', backgroundColor: isChecked1 ? '#00BDA9' : '#ffffff',
                  }}
                    checked={isChecked3password} onChange={handleChange} type="checkbox" id="gridCheckp3" />
                  <label className="form-check-label" htmlFor="gridCheckp3" style={{ paddingLeft: '12px', color: '#666666' }} required>
                    Contains a symbol or a number
                  </label>
                </div>
              </div>


            </div>
            {/**Button Reset Password */}
            <div className="container" style={{ display: 'flex', padding: '24px!important' }}>
              <button style={{
                width: '400px',
                height: '51px',
                top: ' 463px',
                left: ' 649px',
                borderRadius: '10px', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                cursor: 'pointer',
                transition: 'background 300ms ease-out',
                border: 'none',
                color: '#FFFFFF',
                justifyContent: 'center !important',
              }} onClick={handleClick}>Reset Password</button>
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}
export default ForgotPasswordThree
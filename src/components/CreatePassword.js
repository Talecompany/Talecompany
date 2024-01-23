import React from 'react'
import RightBackground from './RightBackground';

import '../styles/createPassword.css';


function CreatePassword() {
    return (
        <div className="rightSide">
            <text className="createPassword">Create Password</text>
            <div className="subscribeForm">
                <form>
                    <label className="password">Password</label>
                    <input className="passwordPlaceholder" placeholder="Enter a password" type="password" required />
                </form>
            </div>

            <div className="conditions">
                <text className="pwdStrengh">Password Strengh:</text>
                <text className="cond1">Must not contain your name or email</text>
                <text className="cond2">At least 8 characters</text>
                <text className="cond3">Contains a symbol or a number</text>
            </div>

            <div>
                <button className="previousButton">Previous</button>
                <button className="nextButton">Next</button>
            </div>
            <RightBackground/>
        </div>
    )
}

export default CreatePassword
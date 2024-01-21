import React from 'react';
import Button from './Button';
import FB from '../images/FB.png';
import X from '../images/X.png';
import Linkedin from '../images/Linkedin.png';
import Gmail from '../images/Gmail.png';
import { Link } from 'react-router-dom';


function Form() {
    const FormStyle = {
        backgroundColor: '#FFFFF !important',
        padding: '90px',
        top: '50 %',
        paddingLeft: '70 %',
        textAlign: 'center',
        // fontFamily: 'Open Sans',
        fontSize: 'px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0em'

    };

    return (


        <div class="container" style={FormStyle} >

            <div><h1>Create Account</h1></div>
            <div>
                <span>
                    <Link to="https://www.linkedin.com">
                        <img src={FB} class="rounded" alt="Facebook" />
                    </Link>
                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    <Link to="https://www.linkedin.com">
                        <img src={Gmail} class="rounded" alt="Gmail" />
                    </Link>
                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    <Link to="https://www.facebook.com">
                        <img src={X} class="rounded" alt="X" />
                    </Link>
                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    <Link to="https://www.linkedin.com">
                        <img src={Linkedin} class="rounded" alt="Linkedin" />
                    </Link>
                </span>
            </div>
            <div style={{ color: '#666666', paddingTop: '15px' }}> Or use your email account</div>

            <div style={{
                padding: '90px', textAlign: 'Left',
            }}>
                <form action="">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label" ><strong>Email Address</strong></label>
                        <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter your email" style={{ width: '400px !important', Height: '96px', Top: '295px', Left: '230px', border: '2px solid #00C0FC', padding: '10px', transition: 'border-color 0.3s ease', borderColor: '#00C0FC' }} />
                    </div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                You agree to the <u><strong>Terms of Use</strong></u> and <strong><u>Privacy Notice</u></strong>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                By agreeing, you'll receive information and special offers about <br /> our products via email. You can unsubscribe from these emails at <br /> any time through the My Account page
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <Button />
            <div style={{ color: '#666666', paddingTop: '20px' }}>Don't have an account? <Link to="/login" style={{ color: '#000000' }}>
                Sign-Up
            </Link></div>
        </div>
    )
}

export default Form
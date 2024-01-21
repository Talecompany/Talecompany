import React from 'react'
import Form from '../components/Navbar';
import Navbar from '../components/Form';
import Header from '../components/Header';

function Register() {
    const registerStyle = {
        display: 'flex',
    }
    return (
        <div class="row">
            <div class="container-d-flex" style={registerStyle}>
                <div class="d-flex flex-column">
                    <div class="row-8">
                        <Header />
                    </div>
                    <div class="row-8">
                        <Navbar />
                    </div>
                </div>
                <Form />
            </div>
        </div>

    );
};
export default Register
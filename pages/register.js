import React from 'react';
import Header from '../components/UI/header/header';
import Navigation from '../components/UI/navigation/nav';

import RegisterFields from '../components/UI/pages/register/fields'
import card from '../components/UI/pages/register/card';

import Footer from '../components/UI/footer/footer';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    register() {
        
        // Check that the .edu email is valid
        console.log("test")

    }

    render() {

        const pages = [
            [
                'Home',
                false,
                '/',
            ],
            [
                'About',
                false,
                '/about',
            ],
            [
                'Register',
                true,
                '/register',
            ]
        ];

        return (
            <React.Fragment>
                <Header
                    page={{ title: 'Register', }}
                />
                <Navigation
                    pages={pages}
                />

                <div className="row">
                    <div className="col s6">
                        <RegisterFields 
                            
                        />

                        <button onClick={this.register} className="waves-effect waves-light btn-large">
                            REGISTER
                        </button>
                    </div>

                    <div className="col s6">
                        { card }
                    </div>
                </div>
                <Footer 
                    pages={pages}
                />
            </React.Fragment>
        )
    }
}

export default Register;

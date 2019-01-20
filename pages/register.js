import React from 'react';
import Header from '../components/UI/header/header';
import Navigation from '../components/UI/navigation/nav';

import fields from '../components/UI/pages/register/fields'
import card from '../components/UI/pages/register/card';

import Footer from '../components/UI/footer/footer';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    page={{ title: 'Register', }}
                />
                <Navigation
                    pages={[
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
                    ]}
                />

                <div className="row">
                    <div className="col s6">
                        { fields }
                    </div>
                    <div className="col s6">
                        { card }
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Register;

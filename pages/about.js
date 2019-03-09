import React from 'react';
import Header from '../components/UI/header/header';
import Navigation from '../components/UI/navigation/nav'
import Footer from '../components/UI/footer/footer';

class About extends React.Component {
    constructor(props) {
        super(props);
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
                true,
                '/about',
            ],
            [
                'Register',
                false,
                '/register',
            ]
        ];

        return (
            <React.Fragment>
                <Header
                    page={{ title: 'About', }}
                />
                <Navigation
                    pages={pages}
                />
                <Footer
                    pages={pages}
                />
            </React.Fragment>
        )
    }
}

export default About;

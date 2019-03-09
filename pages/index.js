import React from 'react';
import Header from '../components/UI/header/header';
import Navigation from '../components/UI/navigation/nav'
import Footer from '../components/UI/footer/footer';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const pages = [
            [
                'Home',
                true,
                '/',
            ],
            [
                'About',
                false,
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
                    page={{ title: 'Home' }}
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

export default Index;

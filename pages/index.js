import React from 'react';
import Header from '../components/UI/header/header';
import Navigation from '../components/UI/navigation/nav'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    page={{ title: 'Home', }}
                />
                <Navigation
                    pages={[
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
                    ]}
                />
            </React.Fragment>
        )
    }
}

export default Index;

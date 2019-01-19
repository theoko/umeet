import React from 'react';
import Head from 'next/head';

class Header extends React.Component {
    render() {
        return (
            <Head>
                <title>{this.props.page.title}</title>

                {/* Import Google Icon Font */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

                {/* Import materialize.css */}
                <link type="text/css" rel="stylesheet" href="/static/css/materialize.min.css" media="screen,projection" />

                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
                )
            }
        }
        
export default Header;
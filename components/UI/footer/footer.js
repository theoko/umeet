import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: this.props.pages,
        }
    }

    render() {

        const links = this.state.links.map((page) => {
                return (
                    <li>
                        <a style={{ color: '#e57373' }} href={page[2]} key={page[0]}>{page[0]}</a>
                    </li>
                )
            });

        return (
            <footer className="page-footer white">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 style={{ color: '#e57373' }}>Footer Header</h5>
                            <p style={{ color: '#e57373' }}>You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 style={{ color: '#e57373' }}>Links</h5>
                            <ul>
                                {links}    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <p style={{ color: '#e57373' }}>© 2019 UMEET</p>
                        <a className="right" style={{ color: '#e57373' }} href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
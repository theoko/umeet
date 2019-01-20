import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                                <li><a style={{ color: '#e57373' }} href="#!">Link 1</a></li>
                                <li><a style={{ color: '#e57373' }} href="#!">Link 2</a></li>
                                <li><a style={{ color: '#e57373' }} href="#!">Link 3</a></li>
                                <li><a style={{ color: '#e57373' }} href="#!">Link 4</a></li>
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
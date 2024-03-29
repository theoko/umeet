import React from 'react';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: this.props.pages,
        }
    }

    generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }

    render() {

        return (
            <nav className="white">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center" style={{color: '#e57373'}}>UMEET</a>
                    <ul className="left hide-on-med-and-down">
                        {
                            this.state.links.map(page => {
                                return (
                                    <li className={page[1] === true ? "active" : "not-active" } key={this.generateKey(page[0])}>
                                        <a href={page[2]} style={{color: '#e57373'}}>
                                            {page[0]}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;
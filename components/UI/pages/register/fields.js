import React from 'react';

const fields = (
    <React.Fragment>
        <h3 style={{ color: '#e57373' }}>Register</h3>
        <form>
        
        <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input id="email" type="email" placeholder="Email" className="validate" style={{ color: '#e57373' }} />
                    {/* <label htmlFor="email">Email</label> */}
                </div>
            </div>
        </div>
            
            <div className="row">
                <div className="col s6">
                    <div className="input-field">
                        <input id="firstName" type="text" placeholder="First Name" className="validate" style={{ color: '#e57373' }} />
                        {/* <label htmlFor="firstName">First Name</label> */}
                    </div>
                </div>
                <div className="col s6">
                    <div className="input-field">
                        <input id="lastName" type="text" placeholder="Last Name" className="validate" style={{ color: '#e57373' }} />
                        {/* <label htmlFor="lastName">Last Name</label> */}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input id="password" type="password" placeholder="New password" className="validate" style={{ color: '#e57373' }} />
                        {/* <label htmlFor="password">New password</label> */}
                    </div>
                </div>
            </div>
            
        </form>
    </React.Fragment>
)

export default fields;
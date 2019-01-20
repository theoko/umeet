import React from 'react';

const fields = (
    <React.Fragment>
        <h3 style={{ color: '#e57373' }}>Register</h3>
        <form>
            <div className="input-field">
                <input id="email" type="email" className="validate" style={{ color: '#e57373' }} />
                <label htmlFor="email">Email</label>
            </div>
        </form>
    </React.Fragment>
)

export default fields;
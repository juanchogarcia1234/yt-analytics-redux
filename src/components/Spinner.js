import React from 'react';

const Spinner = () => {
    return (
            <div className="ui active dimmer" style={{ opacity: 0.5 }}>
                <div className="ui big text loader">Loading</div>
            </div>
    )
}

export default Spinner;
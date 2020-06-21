import React from 'react';

import { withRouter } from 'react-router-dom';

import {
    Button
} from '@material-ui/core';
import './4XX.css';

function FourOfour(props) {

    const onClickHandler = () => {
        props.history.push('/');
    };

    return (
        <div className="fourxx-container">
            <div className="page-not-found-text">
                <h2>Page not found</h2>
            </div>

            <div>
                <Button variant="contained" color="primary" onClick={ onClickHandler }>
                    Go homepage
                </Button>
            </div>
        </div>
    );
}

export default withRouter(FourOfour);
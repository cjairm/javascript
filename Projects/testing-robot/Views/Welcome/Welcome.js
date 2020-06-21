import React from 'react';

import { withRouter } from 'react-router-dom'
import { 
    Button,
    ButtonGroup
} from '@material-ui/core';
import './Welcome.css';

function Welcome(props) {
    return (
        <div className="welcome-container">
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                <Button onClick={ () => props.history.push('/approach/1') }>First approach example</Button>
                <Button onClick={ () => props.history.push('/this-page-does-not-exists') }>Not found page</Button>
            </ButtonGroup>
        </div>
    );
}

export default withRouter(Welcome);
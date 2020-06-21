import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import {
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import HomeIcon from '@material-ui/icons/Home';
import './Footer.css';

function Footer(props) {
    const [value, setValue] = useState(0);

    const { pathname } = props.location;

    let bottomNavigation = (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className="fixed-bottom"
        >
            <BottomNavigationAction onClick={ props.onRedirect.bind(this, '/approach/1') } label="First approach" icon={ <Filter1Icon /> } />
        </BottomNavigation>
    );

    if (pathname !== '/') {
        bottomNavigation = (
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className="fixed-bottom"
            >
                <BottomNavigationAction onClick={ props.onRedirect.bind(this, '/') } label="Home" icon={ <HomeIcon /> } />
                <BottomNavigationAction onClick={ props.onRedirect.bind(this, '/approach/1') } label="First approach" icon={ <Filter1Icon /> } />
            </BottomNavigation>
        );
    }

    return bottomNavigation;
}

export default withRouter(Footer);
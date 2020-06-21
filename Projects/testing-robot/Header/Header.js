import React, { useState } from 'react';

import { Link, withRouter } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import HomeIcon from '@material-ui/icons/Home';
import './Header.css';

function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenuHandler = event => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenuHandler = path => {
        setAnchorEl(null);
        props.onRedirect(path);
    };

    const { pathname } = props.location;

    let menuNavigation = (
        <Menu
            id="simple-menu"
            anchorEl={ anchorEl }
            keepMounted
            open={ Boolean(anchorEl) }
            onClose={ closeMenuHandler }
        >
            <MenuItem onClick={ closeMenuHandler.bind(this, '/approach/1') }>
                <ListItemIcon>
                    <Filter1Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="First approach" />
            </MenuItem>
        </Menu>
    );

    if (pathname !== '/') {
        menuNavigation = (
            <Menu
                id="simple-menu"
                anchorEl={ anchorEl }
                keepMounted
                open={ Boolean(anchorEl) }
                onClose={ closeMenuHandler }
            >
                <MenuItem onClick={ closeMenuHandler.bind(this, '/') }>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </MenuItem>
                <MenuItem  onClick={ closeMenuHandler.bind(this, '/approach/1') }>
                    <ListItemIcon>
                        <Filter1Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="First approach" />
                </MenuItem>
            </Menu>
        );
    }

    return (
        <div className="header-container">
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <p className="app-name">
                        <Link to="/">Example</Link>
                    </p>

                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        aria-controls="simple-menu" 
                        aria-haspopup="true" 
                        onClick={ openMenuHandler }>
                        <MenuIcon />
                    </IconButton>

                    { menuNavigation }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Header);
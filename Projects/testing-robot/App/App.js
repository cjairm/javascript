import React, { Suspense, lazy } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import {
    Hidden,
    Backdrop
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Welcome = lazy(() => {
    const component = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('../Views/Welcome/Welcome'));
        }, 500);
    });
    return component;
});

const NotFound = lazy(() => {
    const component = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('../Views/Errors/4XX/404'));
        }, 500);
    });
    return component;
});

const Approach = lazy(() => {
    const component = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('../Views/Approach/Approach'));
        }, 500);
    });
    return component;
});

function App(props) {
    const loader = (
        <Backdrop style={{zIndex: 1000}} open={ true }>
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    const redirectApproachHandler = path => {
        props.history.push(path);
    };
    
    return (
        <div>
            <Hidden only={['xs']}>
                <Header onRedirect={ redirectApproachHandler } />
            </Hidden>
            
            <Suspense fallback={ loader }>
                <Switch>
                    <Route path="/approach/:number" component={ Approach } />

                    <Route path="/" exact component={ Welcome } />
                    
                    <Route component={ NotFound } />
                </Switch>
            </Suspense>

            <Hidden only={['sm', 'md', 'lg', 'xl']}>
                <Footer onRedirect={ redirectApproachHandler } />
            </Hidden>
        </div>
    );
}

export default withRouter(App);

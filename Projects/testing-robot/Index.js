import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App/App';
import './Index.css';

export default function Index(props) {
    return ( <App /> );
}

const app = (
    <BrowserRouter> 
        <Index />
    </BrowserRouter>
);

if (document.getElementById('app')) {
    ReactDOM.render(app, document.getElementById('app'));
}

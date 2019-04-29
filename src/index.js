import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom';
import Home from './components/Home';
import FormularioCliente from './components/FormularioCliente';
import Nav from './components/Nav';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            <Route path='/' component={Nav}/>
            <Route path='/' exact component={Home}/>
            <Route path='/formularioCliente' component={FormularioCliente}/>
            <Route path='/home' component={Home}/>   
        </div>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

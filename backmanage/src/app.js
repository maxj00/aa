import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import './common/common.css'
import store from './redux/configStore.js'
import LoginComponent from './components/login/logincomponent.js'
import routes from './router/router.js'
import RootComponent from './components/root/rootcomponent.js'
import HomeComponent from './components/home/homecomponent.js'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router>
    </Provider>,
    document.getElementById('app')
)
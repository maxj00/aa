import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';

import routes from './router/router';
import './common/font-awesome-4.7.0/css/font-awesome.css';
import './common/base.scss';
import store from './redux/configStore';
import {Provider} from 'react-redux';
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
)

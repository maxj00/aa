import React from 'react';
import {Route} from 'react-router';
import {Router, hashHistory} from 'react-router';
import Goodlistcomponent from '../components/li_goodslist/Goodlistcomponent';
import Classificationcomponent from '../components/li_classification/classification';
import DetailsComponent from '../components/li_details/detailsComponent';
import Logincomponent from '../components/login/Logincomponent';
import Registercomponent from '../components/register/Registercomponent';
// import Mycomponent from '../components/my_yg/MyComponent';
import Homecomponent from '../components/home/Homecomponent';
import Carlist from '../components/carlist/Carlist';
import Order from '../components/order/Order';
import Address from '../components/address/Address';
import Mine from '../components/Mine/Minecomponent';


export default (
	<Route history={hashHistory}>
		<Route path="/goodslist(/:name)" component={Goodlistcomponent}></Route>,
		<Route path="/classification" component={Classificationcomponent}></Route>,
		<Route path="/details(/:id)" component={DetailsComponent}></Route>,
		<Route path="/login" component={Logincomponent}></Route>,
		<Route path="/register" component={Registercomponent}></Route>,
		<Route path="/" component={Homecomponent}></Route>,
		<Route path="/home" component={Homecomponent}></Route>,
		<Route path="/carlist" component={Carlist}></Route>,
	    <Route path="/order" component={Order}></Route>,
	    <Route path="/address" component={Address}></Route>,
	    <Route path="/mine" component={Mine}></Route>
	</Route>
)
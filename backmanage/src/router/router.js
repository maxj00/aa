import React,{Component} from 'react';
import {Route} from 'react-router';

import LoginComponent from '../components/login/logincomponent.js';
import HomeComponent from '../components/home/homecomponent.js'
import HomeindexComponent from '../components/tables/homeindex/HomeindexComponent.js'
import NavComponent from '../components/tables/nav/navcomponent.js'
import UserAdd from '../components/tables/modal/useradd.js'
import SeachComponent from '../components/tables/modal/seach.js'
import ProductAdd from '../components/tables/modal/productadd.js'
import UserComponent from '../components/tables/user/UserComponent.js'
import ProductComponent from '../components/tables/product/ProductComponent.js'
import RootComponent from '../components/root/rootcomponent.js'


export default (
    <Route path="/root" component={RootComponent}>
        <Route path="/home" component={HomeComponent}>
            <Route path="nav" component={NavComponent} />
            <Route path="user" component={UserComponent} />
            <Route path="product" component={ProductComponent} />
            <Route path="homeindex" component={HomeindexComponent} />
        </Route>
         <Route path="/login" component={LoginComponent} />
    </Route>
)
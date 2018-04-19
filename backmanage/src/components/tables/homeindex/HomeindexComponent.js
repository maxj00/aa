import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import http from '../../../utils/httpclient.js'

import './header.scss'
import '../../../common/base.scss'
export default class HeaderComponent extends React.Component{
    state = {
        show: false,
        username: ""
    }
    componentWillMount(){
    }
    render(){
        return(
            <div className="mj_homeindex">
                <img src="http://cdn.duitang.com/uploads/item/201410/24/20141024162301_SdhCe.jpeg" alt="" />
            </div>
        )
    }
}
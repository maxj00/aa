import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'

import './nav.scss'
export default class NavComponent extends React.Component{
    state = {
        show: false
    }
    showu(){
        this.props.showu()
    }
    render(){
        return(
            <div className="mj_nav">
                <h2 className="logo">ZHONGJIU</h2>
                <ul className="mj_item_box">
                    <li className="mj_item"><Link to="/home/homeindex">中酒后管首页</Link></li>
                    <li className="mj_item"><Link to="/home/product">商品管理</Link></li>
                    <li className="mj_item"><Link to="/home/user">用户管理</Link></li>
                    <li className="mj_item"><Link to="/login">登录</Link></li>
                </ul>    
            </div>
        )
    }
}
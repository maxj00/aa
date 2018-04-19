import React,{Component} from 'react';
import { BrowserRouter as Router, Link,IndexLink} from "react-router";
import {hashHistory} from 'react-router';

import './footer.scss'

class Footercomponent extends Component{
	gotoCarlist(){
		let username=window.sessionStorage.getItem('username');
		if(username){
			hashHistory.push('/carlist');
		}else{
			this.refs.li_warn.style.display="block";
			setTimeout(function(){
				hashHistory.push('/login');
			},1000)
		}
	}
	gotoMine(){
		if(window.sessionStorage.getItem('username')){
			hashHistory.push('/mine');
		}else{
			hashHistory.push('/login');
		}
	}
	render(){
		return (
			<div className="footer">
				<ul>
                    <li><Link to="/home"><i className="fa fa-home"></i><span>首页</span></Link></li>
					<li><Link to="/classification"><i className="fa  fa-list"></i><span>分类</span></Link></li>
					<li onClick={this.gotoCarlist.bind(this)}><Link><i className="fa fa-shopping-cart"></i><span>购物车</span></Link></li>
					<li onClick={this.gotoMine.bind(this)}>
						<Link>
							<i className="fa fa-user-circle-o"></i>
							<span>个人中心</span>
						</Link>
					</li>
                </ul>
                <div className="li_warn" style={{display:'none'}} ref="li_warn">
					<div className="li_warn_modul">
					</div>
					<p>你还未登录,请先登录</p>
				</div>
			</div>
		)
	}
}

export default Footercomponent;
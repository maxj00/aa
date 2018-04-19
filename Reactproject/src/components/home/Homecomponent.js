import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link,IndexLink} from "react-router";
import {hashHistory} from "react-router";

import http from '../../utils/httpclient'

import Headercomponent from '../header_w/Headercomponent'
import Bannercomponent from '../banner/Bannercomponent'
import Footercomponent from '../footer/Footercomponent'
import Baijiucomponent from '../baijiu/Baijiucomponent'
import Qipaojiucomponent from '../qipaojiu/Qipaojiucomponent'
import Putaojiucomponent from '../putaojiu/Putaojiucomponent'
import './home.scss'

class Homecomponent extends Component{
	render(){
		return (
			<div className="home">
				<Headercomponent></Headercomponent>
				<div className="home_body">
					<Bannercomponent></Bannercomponent>
					<div className="nav_w">
						<ul>
							<li><img src="./src/assets/imgs/jiu_w.png" alt="" /><a href="">天德佑</a></li>
							<li><img src="./src/assets/imgs/tuan_w.png" alt="" /><a href="">拼团列表</a></li>
							<li><img src="./src/assets/imgs/new_w.png" alt="" /><a href="">精品会场</a></li>
							<li><img src="./src/assets/imgs/te_w.png" alt="" /><a href="">买二赠一</a></li>
						</ul>
					</div>
					<div className="news_w">
						<img src="./src/assets/imgs/scroll_top.jpg" alt="" />					
					</div>
					<Baijiucomponent></Baijiucomponent>
					<Qipaojiucomponent></Qipaojiucomponent>
					<Putaojiucomponent></Putaojiucomponent>
				</div>
				<Footercomponent></Footercomponent>
			</div>
		)
	}
}

export default Homecomponent;


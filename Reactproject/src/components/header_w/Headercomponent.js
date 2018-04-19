import React,{Component} from 'react';
import {Link} from 'react-router';

import './header.scss'

class Headercomponent extends Component{
	render(){
		return (
			<div className="header">
				<div className="header_w">
					<i><img src="./src/assets/imgs/logo.png" alt="" /></i>
					<Link><input type="text"/></Link>
					<i className="sou"><img src="./src/assets/imgs/搜索.svg" /></i>
				</div>
			</div>
		)
	}
}

export default Headercomponent;
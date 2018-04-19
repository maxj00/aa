import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import './Minecomponent.scss';
class MineComponent extends Component{
	componentWillMount(){
		this.setState({username:window.sessionStorage.getItem('username')});
	}
	l_out(){
		window.sessionStorage.removeItem('username');
		this.setState({username:window.sessionStorage.getItem('username')});
		if(!window.sessionStorage.getItem('username')){
			this.refs.lili_out.style.display="none";
		}
		hashHistory.push('/login');
	}
	gotohome(){
		hashHistory.push('/');
	}
	state={
		username:null
	}
	render(){
		return(
			<div className="li_mine">
				<i className="fa fa-university" onClick={this.gotohome.bind(this)}></i>
				<div className="li_me">
					<i className="fa fa-user-circle"></i>
					<span>
					<em>{this.state.username}</em>
					<b onClick={this.l_out.bind(this)} ref="lili_out" style={{display:'block'}}>退出</b>
					</span>
				</div>
			</div>
		)
	}
}
export default MineComponent;
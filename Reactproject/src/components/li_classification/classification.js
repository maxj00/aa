import React,{Component} from 'react';
import {hashHistory}  from 'react-router';
import Searchcomponent from '../search/searchcomponent';
import './classification.scss';
import Datagridcomponent from './li_datagrid/datagridcomponent';
import http from '../../utils/httpclient';
class Classificationcomponent extends Component{
	componentWillMount(){
		http.post('ligetlogo',{type:'白酒'}).then(res=>{
			this.setState({dataset:JSON.parse(res.text).data.results});
			// console.log(this.state.dataset);
		})
	}
	change(e){
		for(var i=0;i<e.target.parentElement.children.length;i++){
			e.target.parentElement.children[i].classList.remove('li_classification_active');
		}
		e.target.classList.add('li_classification_active');
		this.setState({type:e.target.innerText});
		let _type=e.target.innerText;
		http.post('ligetlogo',{type:_type}).then(res=>{
			this.setState({dataset:JSON.parse(res.text).data.results});
			// console.log(this.state.dataset);
		})
	}
	showup(){
		this.setState({show:!this.state.show});
	}
	state={
		dataset:[],
		type:'白酒',
		show:false
	}
	gotoHome(){
		hashHistory.push('/');
	}
	gotoCarlist(){
		hashHistory.push('/carlist');
	}
	render(){
		let content = this.state.show ? (<div className="wx_aside_item">
	                        <a className="home" onClick={this.gotoHome.bind(this)}>首页</a>
							<a className="f-cart" onClick={this.gotoHome.bind(this)}>购物车</a>
	                	</div>) : null;
		return (
			<div className="li_classification">
				<Searchcomponent classificationparent={true}></Searchcomponent>
				<div className="li_brand">
					<div className="li_brand_box">
						<ul className="li_brand_name" onClick={this.change.bind(this)}>
							<li className="li_classification_active">白酒</li>
							<li>葡萄酒</li>
							<li>洋酒</li>
							<li>果酒</li>
							<li>黄酒</li>
							<li>啤酒</li>
							<li>保健酒</li>
							<li>酒具</li>
							<li>其他</li>
						</ul>
					</div>
					<div className="li_brand_logo">
						<Datagridcomponent dataset={this.state.dataset} type={this.state.type}></Datagridcomponent>
					</div>
					<div className="wx_aside">
	            		<a className="btn_more" onClick={this.showup.bind(this)}></a>
	            		{content}
    				</div>
				</div>
			</div>
		)
	}
}

export default Classificationcomponent;
import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import http from '../../utils/httpclient';
import './searchcomponent.scss';
class Searchcomponent extends Component{
	search(){
		if(this.props.goodlistparent){
			if(this.refs.searchval.value.trim()!=''){
				http.post('livaguesearch',{name:this.refs.searchval.value}).then(res=>{
					this.props.parentSearch(JSON.parse(res.text));
				})
			}
		}
		if(this.props.classificationparent){
			if(this.refs.searchval.value.trim()!=''){
				let val=this.refs.searchval.value.trim();
				hashHistory.push('/goodslist/'+val);
			}
		}
	}
	render(){
		return (
			<div className="li_goodlist_header">
					<div className="li_header_content">
						<div className="li_goodlist_logo">
							<img src="http://img5.zhongjiu.cn/logo.png"/>
						</div>
						<div className="li_goodlist_search">
							<div>
								<span>商品</span>
								<span></span>
								<span></span>
							</div>
							<input type="text" ref="searchval"/>
							<i className="fa fa-search" onClick={this.search.bind(this)}></i>
						</div>
					</div>
			</div>
		)
	}
}

export default Searchcomponent;
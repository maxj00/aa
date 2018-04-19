import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import http from '../../utils/httpclient';
import $ from 'jquery';
import './goodlist.scss';
import Searchcomponent from '../search/searchcomponent';
class Goodlistcomponent extends Component{
	componentWillMount(){
		// console.log(this.props.params.name);
		if(this.props.params.name==undefined){
			http.post('ligetproducts').then(res=>{
				if(JSON.parse(res.text).status){
					this.setState({
						dataset:JSON.parse(res.text).data.results,
						qty:JSON.parse(res.text).data.results.length
					});
				}
			})
		}else{
			http.post('livaguesearch',{name:this.props.params.name}).then(res=>{
				this.setState({dataset:JSON.parse(res.text),qty:JSON.parse(res.text).length});
			})
		}
	}
	state={
		dataset:[],
		qty:0,
		show:true
	}
	showup(){
		this.setState({show:!this.state.show});
		let _classname= this.refs.li_goodlist_list.className;
		if(_classname =="li_goodlist_style1"){
			this.refs.li_goodlist_list.className="li_goodlist_style2";
		}else if(_classname =="li_goodlist_style2"){
			this.refs.li_goodlist_list.className="li_goodlist_style1";
		}
	}
	priceSort(){
		$('.li_goodlist_price').siblings().removeClass('li_goodlist_find_active');
		if($('.li_goodlist_price').hasClass('li_goodlist_find_active')){
			$('.li_goodlist_price').removeClass('li_goodlist_find_active');
			this.Sort(true,'goodsprice');
		}else{
			$('.li_goodlist_price').addClass('li_goodlist_find_active');
			this.Sort(false,'goodsprice');
		}
	}
	evaluateSort(){
		$('.li_evaluate').siblings().removeClass('li_goodlist_find_active');
		if($('.li_evaluate').hasClass('li_goodlist_find_active')){
			$('.li_evaluate').removeClass('li_goodlist_find_active');
			this.Sort(true,'evaluate');
		}else{
			$('.li_evaluate').addClass('li_goodlist_find_active');
			this.Sort(false,'evaluate');
		}
	}
	Sort(a,name){
		let arr=this.state.dataset;
		if(a){
			arr.sort(function(a,b){
				return a[name]-b[name];
			})
			this.setState({dataset:arr});
		}else{
			arr.sort(function(a,b){
				return b[name]-a[name];
			})
			this.setState({dataset:arr});
		}
	}
	search(result){
		// console.log(result);
		this.setState({dataset:result,qty:result.length});
	}
	gotoClassifition(){
		hashHistory.push('/classification');
	}
	gotoDetails(a){
		hashHistory.push('/details/'+a);
	}
	render(){
		let content = this.state.show ? <i className="fa fa-th-large"></i> : <i className="fa fa-th-list"></i>
		return (
			<div className="li_goodlist">
				<Searchcomponent parentSearch={this.search.bind(this)} goodlistparent={true}></Searchcomponent>
				<div className="li_goodlist_nav">
					<ul>
						<li>默认</li>
						<li onClick={this.priceSort.bind(this)} className="li_goodlist_price">价格
							<span>
								<i className="fa fa-caret-up"></i>
								<i className="fa fa-caret-down"></i>
							</span>
						</li>
						<li>销量<i className="fa fa-arrow-circle-o-down" ></i></li>
						<li onClick={this.evaluateSort.bind(this)} className="li_evaluate">评价数<i className="fa fa-arrow-circle-o-down"></i></li>
						<li onClick={this.showup.bind(this)}>
							{content}
						</li>
					</ul>
				</div>
				<div className="li_goodlist_goods">
					<p className="li_goodlist_find">
					<span>找到相关商品<i>{this.state.qty}</i>件</span>
					<span onClick={this.gotoClassifition.bind(this)}>分类</span>
					</p>
					<ul className="li_goodlist_style1" ref="li_goodlist_list">
						{
							this.state.dataset.map((item)=>{
								return  <li key={item.id} data-id={item.id} onClick={this.gotoDetails.bind(this,item.id)}>
											<a>
												<img src={'src/photo/'+item.imgurl}/>
											</a>
											<h3>{item.goodsname}</h3>
											<p>￥<i>{item.goodsprice}</i></p>
											<p><i>{item.evaluate}</i>人评价</p>
										</li>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default Goodlistcomponent; 
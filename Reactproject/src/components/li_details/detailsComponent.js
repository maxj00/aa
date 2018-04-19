import React,{Component} from 'react';
import http from '../../utils/httpclient'; 
import {hashHistory} from 'react-router';
import ShadeComponent from '../li_shade/shadeComponent';

import '../../libs/swiper/swiper-4.2.0.min.css';
import Swiper from '../../libs/swiper/swiper-4.2.0.min.js';

import './detailsComponent.scss';
class DetailsComponent extends Component{
	componentWillMount(){
		let _id=this.props.params.id;
		if(_id!=undefined){
			http.post('lidetailspro',{id:_id}).then(res=>{
				this.setState({dataset:JSON.parse(res.text).data});
				// console.log(JSON.parse(res.text).data[0].goodsprice);
			})
		}
	}
	componentDidMount(){
		var mySwiper = new Swiper('.swiper-container',{
			autoplay:{
				delay:2000,
				stopOnLastSlide:false,
				disableOnInteraction:false
			},
			pagination: {
			    el: '.swiper-pagination',
			    clickable :true
			}
		})
	}
	state={
		dataset:[],
		show:false
	}
	showup(){
		this.setState({show:!this.state.show});
	}
	showShade(){
		let username=window.sessionStorage.getItem('username');
		if(username){
			this.refs.Shade.showShade('close');
		}else{
			this.refs.li_warn.style.display="block";
			setTimeout(function(){
				hashHistory.push('/login');
			},1000)
		}
	}
	gotoHome(){
		hashHistory.push('/');
	}
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
	render(){
		// console.log(this.state.dataset);
		let data = this.state.dataset[0] ? this.state.dataset[0] : {};
		let img = this.state.dataset[0] ? <img src={'src/photo/'+this.state.dataset[0].imgurl}/> :null;
		// console.log(data);
		let content = this.state.show ? (<div className="wx_aside_item">
	                        <a onClick={this.gotoHome}>首页</a>
							<a className="f-cart" onClick={this.gotoCarlist.bind(this)}>购物车</a>
	                	</div>) : null;
		return (
			<div className="li_details">
				<div className="swiper-container li_details_lunbo ">
					<div className="swiper-wrapper">
						<div className="swiper-slide">{img}</div>
						<div className="swiper-slide"><img src="src/photo/2_350.png"/></div>
						<div className="swiper-slide"><img src="src/photo/3_350.png"/></div>
						<div className="swiper-slide"><img src="src/photo/4_350.png"/></div>
						<div className="swiper-slide"><img src="src/photo/5_350.png"/></div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
				<div className="li_details_content">
					<div className="goods-info">
						<div className="goods-item">
							<h3>￥<i>{data.goodsprice}</i></h3>
							<p>{data.goodsname}</p>
							<p>五粮之精华,永恒之经典</p>
						</div>
						<div className="promotion-wrap">
							<p><i>优惠券</i>7 张券可领</p>
							<p><i className="bonus-tip">满额免</i>满99.00免运费</p>
							<div className="goods-address">
							    <p className="address-icon pull-left">北京 北京市</p>
							</div>
							<ul className="ensary">
	                            <li className="flex-center"><i>及时发货</i></li>
	    					</ul>
						</div>
					</div>
					<div className="details_link">
						<p>查看更多详情</p>
					</div>
					<div className="details_goods_img">
						<h4>商品图文详情</h4>
						<p>
							<img src="src/photo/details01.jpg" alt=""/>
							<img src="src/photo/details02.jpg" alt=""/>
							<img src="src/photo/details03.jpg" alt=""/>
							<img src="src/photo/details04.jpg" alt=""/>
							<img src="src/photo/details05.jpg" alt=""/>
							<img src="src/photo/details06.jpg" alt=""/>
						</p>
					</div>
					<div className="wx_aside">
	            		<a className="btn_more" onClick={this.showup.bind(this)}></a>
	            		{content}
    				</div>
				</div>
				<div className="li_details_footer">
					<span onClick={this.gotoCarlist.bind(this)}><i></i><em>购物车</em></span>
					<button onClick={this.showShade.bind(this)}>加入购物车</button>
					<button onClick={this.showShade.bind(this)}>立即购买</button>
					<span><i></i><em>收藏</em></span>
				</div>
				<div className="li_warn" style={{display:'none'}} ref="li_warn">
					<div className="li_warn_modul">
					</div>
					<p>你还未登录,请先登录</p>
				</div>
				<ShadeComponent ref="Shade" data={this.state.dataset[0]}></ShadeComponent>
			</div>
		)
	}
}

export default DetailsComponent;
import React,{Component} from 'react';
import http from '../../utils/httpclient';
import './shadeComponent.scss';

class ShadeComponent extends Component{
	state={
		show:false
	}
	arithmetic(a){
		if(a=='add'){
			this.refs.good_qty.value++;
		}else if(a=='reduce'){
			this.refs.good_qty.value--;
			if(this.refs.good_qty.value<=0){
				this.refs.good_qty.value=1;
			}
		}else{
			if(isNaN(this.refs.good_qty.value*1)){
				this.refs.good_qty.value=1;
				console.log(this.refs.good_qty.value);
			}
		}
	}
	showShade(b){
		if(b =='sure'){
			// console.log(this.props.data);
			let obj={id:null,goodsname:null,goodsprice:null,imgurl:null};
			for(var attr in obj){
				obj[attr] = this.props.data[attr]
			}
			obj.username= window.sessionStorage.getItem('username');
			obj.qty=this.refs.good_qty.value*1;
			// console.log(obj);
			http.post('insertnewcarlist',{obj:JSON.stringify(obj)}).then(res=>{
				if(JSON.parse(res.text).status){
					this.setState({show:!this.state.show});
				}
			})
		}else{
			this.setState({show:!this.state.show});
		}
	}
	render(){
		let data = this.props.data ? this.props.data :{};
		// console.log(data);
		let content = (<div className="li_shade">
				<div className="li_modul"></div>
				<div className="li_modul_container">
					<div className="att-popup-header">
            			<div className="li_thumb">
            				<img className="img-responsive" src={"src/photo/"+data.imgurl}/>
            			</div>
        				<div className="li_info ">
                			<div className="li_price_con">￥<em id="li_jd_price">{data.goodsprice}</em></div>
                			<div className="li_stock_control">库存 <em id="li_stockNum">881</em> 件</div>
        				</div>
        				<span onClick={this.showShade.bind(this,'close')}>&times;</span>
        			</div>
        			<div className="att-popup-body">
        				<div className="li_buy_num">
        					<label htmlFor="li_input_xs">数量</label>
        					<div className="li_wrap_num">
	        					<span onClick={this.arithmetic.bind(this,'reduce')}>-</span>
	        					<input type="text" id="li_input_xs" defaultValue="1" ref="good_qty" onBlur={this.arithmetic.bind(this,'enter')}/>
	        					<span onClick={this.arithmetic.bind(this,'add')}>+</span>
        					</div>
        				</div>
        			</div>
        			<div className="att-popup-footer" onClick={this.showShade.bind(this,'sure')}>确定</div>
				</div>
			</div>);
		return  this.state.show ? content : null;
	}
}

export default ShadeComponent;
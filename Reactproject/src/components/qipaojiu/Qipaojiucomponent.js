import React,{Component} from 'react';
import {Link} from 'react-router';

import http from '../../utils/httpclient'

import './qipaojiu.scss'

class Qipaojiucomponent extends Component{
    state = {
        dataset : []
	}
	componentWillMount(){
        http.get('qipaojiu',{page:0,limit:6}).then((res)=>{
            this.setState({
				dataset: JSON.parse(res.text).data.data.results
            })
        })
    }
	render(){
		return (
			<div className="qipaojiu">
                <div className="j-swipe">
                    <img src="./src/assets/imgs/jiuguan.jpg" alt="" />
                </div>
                <div className="members_goodspic">
                    <ul>
                        {
                            this.state.dataset.map((item) => {
                                return <li key={item.id}>
                                        <Link to ={{pathname:`/details/${item.id}`}} key={item.id}> 
                                            <img src={'src/photo/'+item.imgurl}/>
                                            <p>{item.goodsname}</p>
                                            <span id="price">￥{item.goodsprice}</span>
                                            <i className="fa fa-shopping-cart"></i>
                                        </Link>
                                    </li>
                            })
                        } 
                    </ul>
                </div>
			</div>
		)
	}
}
export default Qipaojiucomponent;
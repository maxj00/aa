import React,{Component} from 'react';
import { Carousel } from 'antd';

import './banner.scss'
import '../../../node_modules/antd/lib/carousel/style/css'

class Bannercomponent extends Component{
	render(){
		return (
			<Carousel autoplay>
			    <div><img src="./src/assets/imgs/1.jpg" alt="" /></div>
				<div><img src="./src/assets/imgs/2.jpg" alt="" /></div>
				<div><img src="./src/assets/imgs/3.jpg" alt="" /></div>
			</Carousel>
		)
	}
}

export default Bannercomponent;

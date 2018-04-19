import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import './datagridcomponent.scss';

class Datagridcomponent extends Component{
	brandddd(a){
		hashHistory.push('/goodslist/' + this.refs[a].children[1].innerText);
	}
	render(){
		// console.log(this.props.dataset,this.props.type);
		return(
			<div className="licategory">
				<dl>
					<dt>{this.props.type}</dt>
					<dd>
						{
							this.props.dataset.map((item)=>{
								return <a key={item.id} onClick={this.brandddd.bind(this,item.id)} ref={item.id}>
											<img src={'src/classifition_photo/'+item.img}/>
											<p>{item.name}</p>
									   </a>
							})
						}
					</dd>
				</dl>
			</div>
		)
	}
}

export default Datagridcomponent;
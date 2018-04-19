import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import ProductComponent from '../../tables/product/ProductComponent.js'
import http from '../../../utils/httpclient.js'

export default class ProductUp extends React.Component{
    state={
      goodsname: "",
      goodsprice: "",
      xiangxin: ""
    }
    AddProname(e){
      let proname = e.target.value;
      this.setState({
         goodsname: proname,
      });
    }
    AddProprice(e){
      let pce =e.target.value;
      this.setState({
        goodsprice: pce,
      })
    }
    AddProCategory(e){
      let uphone =e.target.value;
      this.setState({
        xiangxin: uphone,
      })
    }
    guan(){
        this.props.guan();
    }
    componentWillMount(){
        // this.props.up
        
    }
    zadd(){
        // console.log(this.props.up)
        http.get('upproduct',{goodsname: ''+   this.state.goodsname + '',goodsprice:  ''+ this.state.goodsprice + '',xiangxin:  ''+ this.state.xiangxin + '',id:this.props.upda.id}).then((res) => {
          if(res.status){
                alert('修改成功');
                location.reload()
            }
        })
    }
    render(){
        var goodsname = '';
        var goodsprice = '';
        var xiangxin = '';
        if(this.props.upda){
            goodsname = this.props.upda.goodsname;
            goodsprice = this.props.upda.goodsprice;
            xiangxin = this.props.upda.xiangxin;
        }
        let html =(
          <div  className="mj_modal">
            <form role="form" className="useradd">
              <div className="form-group">
                <label htmlFor="name">商品名</label>
                <input type="text" className="form-control" placeholder={goodsname} id="goodsname" onChange={this.AddProname.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="name">价格</label>
                <input type="text" className="form-control" placeholder={goodsprice} id="goodsprice" onChange={this.AddProprice.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">类型</label>
                <input type="text" className="form-control" placeholder={xiangxin} id="xiangxin" onChange={this.AddProCategory.bind(this)}/>
              </div>
              <button type="submit" className="btn btn-success" onClick={this.zadd.bind(this)}>修改</button>
              <button type="submit" className="btn btn-danger" onClick={this.guan.bind(this)}>
                关闭
              </button>
            </form>
          </div>
        )
        return this.props.show ? html : null;
    }
}

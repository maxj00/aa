import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import ProductComponent from '../product/ProductComponent.js'
import http from '../../../utils/httpclient.js'

export default class ProductAdd extends React.Component{
    state={
      goodsname: "",
      goodsprice: "",
      xiangxin: ""
    }
    changegoodsname(e){
      let uname = e.target.value;
      this.setState({
         goodsname: uname,
      });
    }
    changegoodsprice(e){
      let upwd =e.target.value;
      this.setState({
        goodsprice: upwd,
      })
    }
    changexiangxin(e){
      let uphone =e.target.value;
      this.setState({
        xiangxin: uphone,
      })
    }
    guan(){
        this.props.guan();
    }
    zadd(){
       http.get('inproduct',{goodsname: ''+   this.state.goodsname + '',goodsprice:  ''+ this.state.goodsprice + '',xiangxin:  ''+ this.state.xiangxin + ''}).then((res) => {
          if(res.status){
                alert('提交成功');
                location.reload()
            }
        })
    }
    render(){
        let html =(
            <form role="form" className="useradd">
              <div className="form-group">
                <label htmlFor="name">商品名</label>
                <input type="text" className="form-control" id="goodsname" placeholder="请输入商品名" onChange={this.changegoodsname.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">价格</label>
                <input type="text" className="form-control" id="goodsprice" placeholder="请输入价格" onChange={this.changegoodsprice.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">类型</label>
                <input type="text" className="form-control" id="xiangxin" placeholder="请输入类型" onChange={this.changexiangxin.bind(this)}/>
              </div>
              <button type="submit" className="btn btn-default" onClick={this.zadd.bind(this)}>提交</button>
              <button type="submit" className="btn btn-default" onClick={this.guan.bind(this)}>
                关闭
              </button>
            </form>
        )
        return this.props.show ? html : null;
    }
}

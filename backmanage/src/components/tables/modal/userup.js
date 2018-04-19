import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import ProductComponent from '../../tables/user/UserComponent.js'
import http from '../../../utils/httpclient.js'

export default class UserUp extends React.Component{
    state={
      username: "",
      password: "",
      phone: ""
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
        http.get('upUser',{username: ''+   this.state.username + '',password:  ''+ this.state.password + '',phone:  ''+ this.state.phone + '',id:this.props.upda.id}).then((res) => {
          if(res.status){
                alert('修改成功');
                location.reload()
            }
        })
    }
    render(){
        var username = '';
        var password = '';
        var phone = '';
        if(this.props.upda){
            username = this.props.upda.username;
            password = this.props.upda.password;
            phone = this.props.upda.phone;
        }
        let html =(
          <div  className="mj_modal">
            <form role="form" className="useradd">
              <div className="form-group">
                <label htmlFor="name">商品名</label>
                <input type="text" className="form-control" placeholder={username} id="username" onChange={this.AddProname.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="name">价格</label>
                <input type="text" className="form-control" placeholder={password} id="phone1" onChange={this.AddProprice.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">类型</label>
                <input type="text" className="form-control" placeholder={phone} id="userpassword" onChange={this.AddProCategory.bind(this)}/>
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

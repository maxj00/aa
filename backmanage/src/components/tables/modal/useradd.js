import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import UserComponent from '../user/UserComponent.js'
import http from '../../../utils/httpclient.js'

export default class UserAdd extends React.Component{
    state={
      username: "",
      password: "",
      phone: ""
    }
    changeUsername(e){
      let uname = e.target.value;
      this.setState({
        username: uname,
      });
    }
    changePassword(e){
      let upwd =e.target.value;
      this.setState({
        password: upwd,
      })
    }
    changePhone(e){
      let uphone =e.target.value;
      this.setState({
        phone: uphone,
      })
    }
    guan(){
        this.props.guan();
    }
    zadd(){
       http.get('inusers',{username: ''+   this.state.username + '',password:  ''+ this.state.password + '',phone:  ''+ this.state.phone + ''}).then((res) => {
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
                <label htmlFor="name">姓名</label>
                <input type="text" className="form-control" id="username" placeholder="请输入姓名" onChange={this.changeUsername.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">手机</label>
                <input type="text" className="form-control" id="phone1" placeholder="请输入手机" onChange={this.changePhone.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">密码</label>
                <input type="password" className="form-control" id="userpassword" placeholder="请输入密码" onChange={this.changePassword.bind(this)}/>
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

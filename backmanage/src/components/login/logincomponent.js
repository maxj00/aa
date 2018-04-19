import React from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import http from '../../utils/httpclient.js'
import * as actions from './UserAction.js'
// import routes from '../../router/router.js'
import './login.scss'
import '../font/bootstrap.css'
class LoginComponent extends React.Component{
    state ={
      userName: "",
      userPassword: "",
      unameHelp: "",
      upwdHelp: ""
    }
    changeUsername(e){
      let uname = e.target.value;
      this.setState({
        userName: uname,
      });
    }
    changePassword(e){
      let upwd =e.target.value;
      this.setState({
        userPassword: upwd,
      })
    }
    mj_login(){
        if(this.state.userName === ""||this.state.userName === null){
             this.setState({
                unameHelp: "* 用户名不能为空"
            })
             return false;
        } else if(this.state.userPassword === ""||this.state.userPassword === null){
            this.setState({
                unameHelp: "",
                upwdHelp: "* 密码不能为空"
            })
            return false;
        }else{
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });
            // console.log(this.state);
        }
        http.get('login',{username: ''+  this.state.userName + '',password:  ''+ this.state.userPassword + ''}).then((res) => {
          if(res.data.results !=0){
                window.sessionStorage.setItem('dktoken',res.data.results[0].username);
                console.log( window.sessionStorage.getItem('dktoken'));
                this.props.router.push('/home/homeindex')
            } else {
                alert('登录信息错误')
            }
        })
    }
    render(){
        return (
            <div className="login">
                <div role="form" className="login-box">
                ZHONGJIU ADMIN
                    <div className="form-group">
                      <label htmlFor="name" className=" glyphicon glyphicon-user"></label>
                      <input type="text" name="username" className="form-control" id="name" placeholder="请输入名称" onChange={this.changeUsername.bind(this)} />
                                 <span className="help-block">{this.state.unameHelp}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className=" glyphicon glyphicon-lock"></label>
                      <input type="password" name="password" className="form-control" id="password" placeholder="请输入密码" onChange={this.changePassword.bind(this)} />
                                <span className="help-block">{this.state.upwdHelp}</span>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.mj_login.bind(this,this.state.userName,this.state.userPassword)} >提交</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {console.log(state)
    return {
        // dataset: state.user.user ? state.user.user.dataset : [],
        // show: state.datagrid.show,
        // error: state.user.error
    }
}
export default connect(mapStateToProps,actions)(LoginComponent);
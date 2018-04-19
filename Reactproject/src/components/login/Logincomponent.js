import React,{Component} from 'react'
import './login.scss'
import '../../common/base.scss'
import ReactDOM from 'react-dom'
import http from '../../utils/httpclient.js'
import {hashHistory,Link} from 'react-router';
    
 class Logincomponent extends Component{
    btnLogin(){
        let username = this.refs.phone.value;
        let password= this.refs.password.value;
        if(username!=''&&password!=''){
            http.get('login',{username,password}).then(res=>{
                if(JSON.parse(res.text).status){
                    window.sessionStorage.setItem('username',username);
                    hashHistory.push('/');
                }else{
                    this.refs.phone.value='';
                    this.refs.password.value='';
                    this.refs.phone_modul.style.display ="block";
                    setTimeout(()=>{
                        this.refs.phone_modul.style.display = "none";
                    },1000)
                }
            })
        }
    }
    render(){
        return(
            <div id="bigbox">
                <div className="header">
                    <img src="/src/assets/images/logo_2.png"/>
                </div>
                <div className="header_r">
                    <p>账号 <input type='text' placeholder="请输入账号" ref="phone"/></p>
                    <p>密码 <input type='password' placeholder="密码" ref="password"/></p>   
                </div>
                <div className="denglu" onClick={this.btnLogin.bind(this)}>登录</div>
                <div className="header_b">
                    <i><img src="/src/assets/images/iphone.png"/></i>
                    <Link to="/register"><span>注册</span></Link><span className="s_1">忘记密码</span>
                </div>
                <div className="foot-b">
                    <span>
                    <i><img src="/src/assets/images/loginr4.jpg"/></i>第三方登录<i></i>
                    </span>
                </div>
                <div className="foot-bb">
                <span>登录即表示你同意中酒网<a href="#">《用户使用协议》</a></span>
                </div>
                <div className="phone_modul" style={{display:'none'}} ref="phone_modul">用户名不存在或密码错误</div>
            </div>
        )
    }
}
export default Logincomponent;
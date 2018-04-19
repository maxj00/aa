import React,{Component} from 'react';
import http from '../../utils/httpclient.js'
import './register.scss';
import '../../common/base.scss';
import {hashHistory} from 'react-router';
 class Registercomponent extends Component{
    state={
        p:false,
        phone:null,
        mima:false,
        password:null
    }
    regphone(){
        var p=/^1[34578]\d{9}$/.test(this.refs.phone.value);
        if(!p){
            this.setState({p:false});
        }else{
            this.setState({p:true,phone:this.refs.phone.value});
        }
    }
    regpassword(){
        let pwd=/^\S{6,12}$/.test(this.refs.password.value);
        if(!pwd){
            this.setState({mima:false});
        }else{
            this.setState({mima:true,password:this.refs.password.value});
        }
    }
    register(){
        if(this.state.p&&this.state.mima){
            let username =this.state.phone;
            let password =this.state.password;
            http.get('reg',{username,password}).then(res=>{
                if(JSON.parse(res.text).status){
                    hashHistory.push('/login');
                }else{
                    this.refs.config_modul.style.display ="block";
                    setTimeout(()=>{
                        this.refs.config_modul.style.display = "none";
                    },1000)
                }
            })
        }else{
            this.refs.phone.value='';
            this.refs.password.value='';
            this.refs.phone_modul.style.display ="block";
            setTimeout(()=>{
                this.refs.phone_modul.style.display = "none";
            },1000)
        }
    }
    login(){
        hashHistory.push('/login');
    }
    render(){
        return(
            <div id="bigbox">
                <div className="header">
                    <img src="/src/assets/images/logo_2.png"/>
                    <span onClick={this.login.bind(this)}>
                        <i className="fa fa-user"></i>
                        <i>登录</i>
                    </span>
                </div>
                <div className="header_r">
                    <p>账号 
                        <input type='text' ref= "phone" placeholder="请输入手机号" onBlur={this.regphone.bind(this)}/>
                    </p>
                    <p>密码
                        <input type='password' ref="password" placeholder="密码不能为空,长度不能低于6位" onBlur={this.regpassword.bind(this)}/>
                    </p>   
                </div>
                <div className="denglu" onClick={this.register.bind(this)}>注册</div>
                <div className="foot-b" style={{marginTop:'80px'}}>
                    <span>
                    <i><img src="/src/assets/images/loginr4.jpg"/></i><i></i>
                    </span>
                </div>
                <div className="foot-bb">
                <span>注册即表示你同意中酒网<a href="#">《用户使用协议》</a></span>
                </div>
                <div className="phone_modul" style={{display:'none'}} ref="phone_modul">手机号或密码不正确</div>
                <div className="phone_modul" style={{display:'none'}} ref="config_modul">用户名已被注册</div>
            </div>
        )
    }
}
export default Registercomponent ;
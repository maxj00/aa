import React,{Component} from 'react'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import {connect} from 'react-redux'

import './home.scss'
import '../../common/base.scss'
import * as actions from './UserAction.js'
import NavComponent from '../tables/nav/navcomponent.js'
import UserComponent from '../tables/user/UserComponent.js'
import ProductComponent from '../tables/product/ProductComponent.js'
import HomeindexComponent from '../tables/homeindex/HomeindexComponent.js'
import http from '../../utils/httpclient.js'
import SeachComponent from '../tables/modal/seach.js'
import DatagridComponent from '../tables/datagrid/datagridcomponent.js'


class HomeComponent extends Component{
        state ={
            show: false,
            config:{},
            username: "未登录"
        }
        showuser =() =>{
            this.setState({
                show: true
            })
        }
        hiddenup = () =>{
            this.setState({
                show: false
            })
        }
        out(){
            window.sessionStorage.removeItem('dktoken');
                alert('退出登录')
                this.props.router.push('/login')
        }
        mhSeach =(e) =>{
            this.setState({
                show: true
            })
            // http.get('mhseach',{params:mj_val}).then((res)=> {
            //     if(res.status){
            //         this.setState({
            //             show: true
            //         });
            //     }
            // })
        }
        componentWillMount(){
            if(window.sessionStorage.getItem('dktoken')){console.log(window.sessionStorage.getItem('dktoken'))
                this.setState({
                    username: window.sessionStorage.getItem('dktoken')
                })
            }
        }
    render(){
        return(
            <div className="home">
                <SeachComponent show={this.state.show}  guan={this.hiddenup}/>
                    <div className="mj_manage fl"><NavComponent /></div>
                    <div className="mj_r fl">
                        <div className="mj_header">
                                <div className="input-group mj_search fl">
                                    <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={this.mhSeach.bind(this)}>搜索!</button>
                                    </span>
                                </div>
                            <div className="fr">
                                当前用户：<b>{this.state.username}</b><button className="btn btn-default" type="button" onClick={this.out.bind(this)}>退出</button>
                            </div>
                        </div>
                        <div className="mj_tables">
                            {this.props.children}
                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // dataset: state.user.products ? state.user.products.dataset : [],
        // show: state.datagrid.show,
        // error: state.user.error
    }
}
export default connect(mapStateToProps,actions)(HomeComponent);
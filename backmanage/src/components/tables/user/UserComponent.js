import React from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import UserUp from '../modal/userup.js'
import UserAdd from '../modal/useradd.js'
import * as actions from './UserAction.js'
import SpinnerComponent from '../../spinner/SpinnerComponent.js'
import http from '../../../utils/httpclient.js'

class UserComponent extends React.Component{
    state = {
        show: false,
        html: null,
        config:{url:'users',type:'user',name:'users'}
    }
    showup(){
        this.setState({
            show: true
        })
    }
    hiddenup = () =>{
        this.setState({
            show: false
        })
    }
    showupd(item){
        this.setState({
            show: true,
            item
        })
    }
    delTr(e){
        let trs = e.target.parentNode
        let pID = e.target.parentNode.parentNode.children[0].innerText
        http.get('deluser',{id:pID}).then((res)=> {
            if(res.status){
                trs.parentNode.remove(trs)
            }
        })
    }
    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    componentWillMount(){
        this.props.refresh(this.state.config) 
    }
    render(){
        return(
            <div className="mj_box" >
                <p><Link to="/">首页</Link> / 用户管理</p>
                <div className="mj_userT">
                    <button type="button" className="btn btn-primary" onClick={this.showup.bind(this)}>
                    增加
                    </button>
                </div>
                <div className="mj_user">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                            {
                                this.getKeys(this.props.dataset[0]).map((key) => {
                                    return <th key={Math.random()}>{key}</th>
                                })
                            }
                        </tr>
                      </thead>
                      <tbody>
                        {
                            this.props.dataset.map((item) => {
                                return (
                                    <tr key={item.id || item.indexid}>
                                        {
                                            this.getKeys(item).map((key) => {
                                                return <td key={Math.random()}>{item[key]}</td>
                                            })
                                        }
                                        <td><button type="button" className="btn btn-primary" data-toggle="button"
                                        onClick={this.delTr.bind(this)}>
                                         删除</button>
                                         </td>
                                         <td>
                                            <button type="button" className="btn btn-primary updata"
                                             onClick={this.showupd.bind(this,item)}
                                             data-toggle="button"> 
                                                更新
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                      </tbody>
                    </table>
                </div>
                <div className="mj_modal">
                    <SpinnerComponent show={this.props.show}/>
                    <UserUp show={this.state.show} guan={this.hiddenup} upda={this.state.item}/>
                    <UserAdd show={this.state.show} guan={this.hiddenup}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataset: state.user.users ? state.user.users.dataset : [],
        show: state.user.show,
        error: state.user.error
    }
}
export default connect(mapStateToProps,actions)(UserComponent);
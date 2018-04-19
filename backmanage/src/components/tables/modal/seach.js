import React from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import UserComponent from '../user/UserComponent.js'
import DatagridComponent from '../datagrid/datagridcomponent.js'
import http from '../../../utils/httpclient.js'
import * as actions from './UserAction.js'
import '../../home/home.scss'
export default class SeachComponent extends React.Component{
    state={
        show: false,
        b: [],
    }
    guan(){
        this.props.guan();
    }
    mhSeach1(e){
            let mj_val1 =e.target.parentNode.previousSibling.value;
            http.get('mhseach',{params:mj_val1}).then((res)=> {
                console.log(res);
                console.log(this);
                this.setState({b:res.data});
            })
    }
    getKeys(item){
        return item ? Object.keys(item) : [];
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
    // componentWillReceiveProps(a){
    //     if(a.dataset[a.config.name]){
    //         this.setState({
    //             ds :a.dataset[a.config.name].dataset, 
    //         });
    //     }
        
    // }
    render(){
        // let content =null;
        // if(this.props.config.type= 'datagrid'){
        //     content = <DatagridComponent config={this.props.config}/>
        // } else {
        //     content = <p>modal</p>
        // }
        let html =(
            <div className="mj_seachList" >
            <div className="input-group mj_search fl">
                        <input type="text" className="form-control s" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.mhSeach1.bind(this)}>Go! </button>
                        </span>
                    </div>
                <div className="mj_seachT">
                <button type="submit" className="btn btn-default g" onClick={this.guan.bind(this)}>
                关闭
                </button>
                </div>
                <div className="mj_seachbox">
                     <table className="table table-striped">
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.state.b[0]).map((key) => {
                                    return <th key={Math.random()}>{key}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.b.map((item) => {
                                return (
                                    <tr key={Math.random()}>
                                        {
                                            this.getKeys(item).map((key) => {
                                                return <td key={Math.random()}>{item[key]}</td>
                                            })
                                        }
                                        <td>
                                            <input type="button" value="修改" className="btn btn-default" onClick={this.showupd.bind(this,item)} />
                                            <input type="button" value="删除" className="btn btn-danger" onClick={this.delTr.bind(this)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr></tr>
                    </tbody>
                </table>
                </div>
                
            </div>
        )
        return this.props.show ? html : null;
    }
}

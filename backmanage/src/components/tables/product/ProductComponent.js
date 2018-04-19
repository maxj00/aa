import React from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import ProductAdd from '../modal/productadd.js'
import ProductUp from '../modal/productup.js'
import * as actions from '../user/UserAction.js'
import SpinnerComponent from '../../spinner/SpinnerComponent.js'
import http from '../../../utils/httpclient.js'

class ProductComponent extends React.Component{
    state = {
        show: false,
        html: null,
        config:{url:'products',type:'product',name:'products'},
        item:null
    }
    showup(){
        this.setState({
            show: true
        })
    }
    showupd(item){
        this.setState({
            show: true,
            item
        })
    }
    hiddenup = () =>{
        this.setState({
            show: false
        })
    }
    delTr(e){
        let trs = e.target.parentNode
        let pID = e.target.parentNode.parentNode.children[0].innerText
        http.get('delproduct',{id:pID}).then((res)=> {
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
                <p><Link to="/">首页</Link> / 商品管理</p>
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
                                        <td>
                                            <button type="button" className="btn btn-primary del"
                                             onClick={this.delTr.bind(this)}
                                             data-toggle="button"> 
                                                删除
                                            </button>
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
                    <ProductAdd show={this.state.show} guan={this.hiddenup}/>
                    <ProductUp show={this.state.show} guan={this.hiddenup} upda={this.state.item}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {console.log(state)
    return {
        dataset: state.user.products ? state.user.products.dataset : [],
        show: state.user.show
        // error: state.user.error
    }
}
export default connect(mapStateToProps,actions)(ProductComponent);
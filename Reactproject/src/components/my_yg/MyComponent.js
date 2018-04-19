import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import "./My.scss"
class MyComponent extends React.Component{
    state = {
        
    }
    
    render(){
        return(
            <div className = "my">
                <div className = "my_top">
                    <a className = "goback">
                        <img src = "//i1.ygimg.cn/m/images/new-back.7076ee24.png" />
                    </a>
                    <h2>我的地盘</h2>
                    <a className = "mainnav">
                        <img src="//i1.ygimg.cn/m/images/ico-menu.d62fefbc.png"/>
                    </a>
                </div>
                <div className = "my_menu">
                    <div className ="menu_item">
                        <a className = "item1">首页</a>
                    </div>
                    <div className ="menu_item">
                        <a className = "item2">分类</a>
                    </div>
                    <div className ="menu_item">
                        <a className = "item3">购物车</a>
                    </div>
                    <div className ="menu_item menu_active">
                        <a className = "item4">我的优购</a>
                    </div>
                </div>
                <div className = "my_guanli">
                    <div className = "manage">

                    </div>
                    <p className ="userphone" ref = "userphone">1340256919</p>
                    <span className="memberclass">
                        <a></a>
                    </span>
                    <a className="newsbox"></a>
                    <span className="zhanghuguanli">
                        <Link to="/manageaccount">订单管理 ></Link>
                    </span>


                </div>
                <div className = "my_order">
                    <a className="userorderList">
                        <p>我的订单</p>
                        <span>
                            <a>全部订单 > </a>
                        </span>
                    </a>
                    <div className="ordermanage">
                        <a className="unpaidOrder">
                            <img src="//i1.ygimg.cn/m/images/myYG/pay.d50ce1d8.png"/>
                            <p className="p1">待付款</p>
                        </a>
                        <a className="checkDeliver">
                            <img src="//i1.ygimg.cn/m/images/myYG/logistics.efb3a1b5.png"/>
                            <p>查看物流</p>
                        </a>
                        <a className="unevaluate">
                            <img src="//i1.ygimg.cn/m/images/myYG/evaluate.0ce2d944.png"/>
                            <p>待评价</p>
                        </a>
                    </div>
                    
                    
                </div>
                <div className = "my_purse">
                    <a className="userpurse">
                        <p>我的钱包</p>
                        
                    </a>
                    <div className="pursemanage">
                        <a className="lipinka">
                            <p className="jiacu">0</p>
                            <p>礼品卡</p>
                        </a>
                        <a className="coupon">
                            <p className="jiacu">3</p>
                            <p>优惠券</p>
                        </a>
                        <a className="unevaluate">
                            <p className="jiacu">100</p>
                            <p>积分</p>
                        </a>
                        <a className="coupon">
                            <img src="//i1.ygimg.cn/m/images/myYG/dividend.357037f5.png"/>
                            <p>红包兑换</p>
                        </a>
                    </div>
                    
                    
                </div>
                <div className="userList bt">
                        <a className="yonghuzhongxin">
                            <img src="//i1.ygimg.cn/m/images/myYG/member.fe1f9c33.png"/>
                             <p>用户中心</p>
                        </a>
                        <a className="jifenshangcheng">
                            <img src="//i1.ygimg.cn/m/images/myYG/integration.a1ff5d43.png"/>
                            <p>积分商城</p>
                        </a>
                        <a className="meiriqiandao">
                            <img src="//i1.ygimg.cn/m/images/myYG/past.e675fb7d.png"/>
                            <p>每日签到</p>
                        </a>
                        <a className="lianxikefu">
                            <img src="//i1.ygimg.cn/m/images/myYG/service.fcbbc14c.png"/>
                            <p>联系客服</p>
                        </a>
                </div>
                <div className="userList">
                        <a className="wodeshoucang">
                            <img src="//i1.ygimg.cn/m/images/myYG/collection.b0aedb99.png"/>
                           <p>我的收藏</p>
                        </a>
                        <a className="bangzhuzhongxin">
                            <img src="//i1.ygimg.cn/m/images/myYG/help.babaeccc.png"/>
                           <p>帮助中心</p>
                        </a>
                        <a className="yijianfankui">
                            <img src="//i1.ygimg.cn/m/images/myYG/suguession.55847042.png"/>
                            <p>意见反馈</p>
                        </a>
                        
                </div>
                <div className="my_footer">
                    <div className="loginbar">
                        <span>
                        
                                <a >13420156919</a>
                                <em>|</em>
                                <a >退出</a>
                        </span>
                        <p>
                        
                            <a>电脑版</a>
                            <a>客户端</a>
                            <a>微信</a>
                        </p>
                    </div>
                    <section className="version">
                        <p className="footerInfor footerInforName">百丽国际旗下购物网站</p>
                        <p className="footerInfor">Copyright © 2011-2018 优购 m.yougou.com</p>
                    </section>
                </div>
            </div>
        )
    }
}


export default MyComponent
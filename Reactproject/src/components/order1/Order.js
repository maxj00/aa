import React ,{Component} from 'react'
import http from '../../utils/httpclient'
import './Order.scss'
export default class Order extends Component{
    state={
        dataset:[],
        total:0,
        address:[],
        show:{'display':'block'},
    }
    componentWillMount(){
       
        var a=window.sessionStorage.getItem('id').split(',')
        var params={id:a}
        // console.log(params)
        var total=0;
        var piece=0;
        http.post('order',params).then((res)=>{
            res.body.data.results.forEach(function(key,idx){
                    total+=key.qty*key.goodsprice*1;
                    piece+=key.qty*1;
               })
            this.setState({
                dataset:res.body.data.results,
                total:total,
            })
        })


          http.get('getaddress').then((res)=>{
            console.log(res.body.data.results)
            if(res.body.data.results.length>0){
             this.setState({
               address:res.body.data.results,
               show:{'display':'none'}
             })
            }
         })

    }
    address(){
        // console.log(222)
        this.props.router.push('/address')
    }
   updateAddress(){
        http.get('deladdress').then((res)=>{
            if(res.body.status){
                this.props.router.push('/address')
            }
        })
   }
   car(){
    this.props.router.push('/carlist')
   }
    componentDidMount(){
        $('input.one').on('focus',function(){
             $(this).addClass('active');
        })

        $('input.one').on('blur',function(){
             $(this).removeClass('active');
        })
        $('input.two').on('focus',function(){
             $(this).addClass('active');
        })

        $('input.two').on('blur',function(){
             $(this).removeClass('active');
        })
    }
    render(){
        var data=this.state.dataset
        var address=this.state.address
        var show=this.state.show
        console.log(show)
        return(

            <div id="order">

            
            <div className="body">
                <div className="adr">
                <span style={this.state.show} className="kobe">你还没有填写收货地址<a onClick={this.address.bind(this)}>去新增</a></span>
               
                {
                    address.map((key,idx)=>{
                        return <div className="address" key={idx}>
                            <p className="person"><span>收货人: {key.name}</span><span>{key.phonenum}</span></p>
                            <p className="add"><i className="fa fa-map-marker" aria-hidden="true"></i> <span>{key.province}省 {key.city} {key.county}  <em>{key.totaladdress}</em></span> <b onClick={this.updateAddress.bind(this)}>编辑</b></p>
                        </div>
                    })
                }
               
                </div>
                <div className="payway">
                    <span>支付方式</span>
                    <span>在线支付</span>
                </div>
                <div className="brand">
                    <span>中酒自营</span>
                </div>
                <div className="goods">
                    {
                        data.map((key,idx)=>{
                            return <div className="onegood" key={idx} onClick={this.car.bind(this)}>
                            <img src={'/src/assets/photo/'+key.imgurl} />
                            <span><i className="name">{key.goodsname}</i><i className="price">￥{key.goodsprice}.00</i></span>
                            <span className="qty">x {key.qty} 件</span>
                           </div>
                        })
                    }
                </div>
                <div className="config configone">
                    <span>使用优惠券券码 :</span>
                    <input type="text" className="one"/>
                    <i><button>确认</button></i>   
                </div>
                <div className="config configtwo">
                    <span>配送方式 :</span>
                    <select>
                        <option value="送货">送货</option>
                        <option value="自提">自提</option>
                    </select>
                </div>
                <div className="config configthree">
                    <span>送货快递 :</span>
                    <span>0.00元</span>
                </div>
                <div className="config configfour">
                    <span>给卖家留言 :</span>
                    <input type="text" placeholder="选填" className="two"/>
                </div>
                <div className="config configfive">
                    <span className="pay">在线支付</span>
                    <span >小计 ￥<i>{this.state.total}.00</i></span>
                </div>
                <div className="bottom"></div>
            </div>
             <div className="footer">
                <div className="cal">
                <span>商品金额: <i>￥{this.state.total}.00</i></span>
                <span>优惠金额: <i>￥0.00</i></span>
                <span>运费: <i>￥0.00</i></span>
                <span>订单实付金额: <i>￥{this.state.total}.00</i></span>
                </div>
                <button>提交订单</button>
             </div>
            </div>
        )
    }
}
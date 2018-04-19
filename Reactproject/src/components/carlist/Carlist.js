import React ,{Component} from 'react'
import http from '../../utils/httpclient'
import './Carlist.scss'
import {connect} from 'react-redux'
import * as action from './Carlistaction'

class Carlist extends Component{
      state={
        dataset:[],
        onegood:0,
        onepiece:0,
        username:null
    }
  
    componentWillMount(){
        var total=0;
        var piece=0;
        var username=window.sessionStorage.getItem('username');
        this.props.first({type:'carlist',url:'carlist',data:username});
         http.get('carlist',{data:username}).then((res)=>{
            // console.log(res)
              res.body.data.results.forEach(function(key,idx){
                   total+=key.qty*key.goodsprice*1;
                   piece+=key.qty*1;
              })
              this.setState({
                  dataset:res.body.data.results,
                  onegood:total,
                  onepiece:piece,
                  username:username
              })
           })

    }  
   delAll(){
     var username=this.state.username
      this.props.first({type:'updatecarlist',url:'nimabi',method:'post',username})
        
         http.post('nimabi',{username}).then((res)=>{
          // console.log(res.body.data.results)
             this.setState({
                  dataset:res.body.data.results,
              })
         })
   }
   jian(id,e){
      if($(e.target).closest('.cargoods').children('i').attr('class')!="active"){
        return;
      }
      let qty=$(e.target).siblings('input').val();
      qty--;
      if(qty<=1){
        $(e.target).siblings('input').val(1)
        return;
      }
      $(e.target).siblings('input').val(qty)

      this.props.first({type:'updatecarlist',url:'jiancarlist',method:'post',data:{id}})
            var num1=1;
            var pi1=$(e.target).closest('.cargoods').children('p').children('span').text().slice(1)*1
            var total=this.state.onegood-pi1;
            var piece=this.state.onepiece-num1;
            this.setState({
                onegood:total,
                onepiece:piece
            })
      
   }
    jia(id,e){
        if($(e.target).closest('.cargoods').children('i').attr('class')!="active"){
        return;
      }
      let qty=$(e.target).siblings('input').val();
      qty++;
      $(e.target).siblings('input').val(qty)
     this.props.first({type:'updatecarlist',url:'jiacarlist',method:'post',data:{id}})
           var num1=1;
            var pi1=$(e.target).closest('.cargoods').children('p').children('span').text().slice(1)*1
            var total=this.state.onegood+pi1;
            var piece=this.state.onepiece+num1;
            this.setState({
                onegood:total,
                onepiece:piece
            })
    }
    put(id,e){
        var qty=$(e.target).val()*1
        if(typeof(qty)=="number"&&qty>0){
            // console.log(typeof(qty))
        var price=$(e.target).closest('.cargoods').children('p').children('span').text().slice(1)
        this.props.first({type:'updatecarlist',url:'updatecarlist',method:'post',data:{id,qty}})
              var total=0;
              var piece=0;
           http.post('updatecarlist1',{data:this.state.username,qty:qty,id:id}).then((res)=>{
              res.body.data.results.forEach(function(key,idx){
                   total+=key.qty*key.goodsprice*1;
                   piece+=key.qty*1;
              })
              this.setState({
                  dataset:res.body.data.results,
                  onegood:total,
                  onepiece:piece
              })
           })
         }else{
            $(e.target).val(1)
              // console.log(222)
         }
    }
   delcurrentgood(id,e){
          if($(e.target).closest('.cargoods').children('i').attr('class')!="active"){
            return;
            }
            // console.log(id)
            // console.log(8888)
            var username=window.sessionStorage.getItem('username');
            this.props.first({type:'updatecarlist',url:'delcarlist',method:'post',data:{id,username}})
             var total=0;
               var piece=0;
            http.get('carlist',{data:this.state.username}).then((res)=>{
              console.log(res.body.data.results)
               res.body.data.results.forEach(function(key,idx){
                    total+=key.qty*key.goodsprice*1;
                    piece+=key.qty*1;
               })
               this.setState({
                   dataset:res.body.data.results,
                   onegood:total,
                   onepiece:piece
               })
            })

    }
    selectALL(e){
        if( $(e.target).attr('class')=="active"){
            $(e.target).removeClass('active');
            $('.cargoods i').removeClass('active');
            $('.cargoods input').prop('disabled',true)
            http.get('carlist',{data:this.state.username}).then((res)=>{
               this.setState({
                   dataset:res.body.data.results,
                   onegood:0,
                   onepiece:0
               })
            })
        }else{
             $(e.target).addClass('active');
             $('.cargoods i').addClass('active');
              $('.cargoods input').prop('disabled',false)
                var total=0;
                var piece=0;
             http.get('carlist',{data:this.state.username}).then((res)=>{
                res.body.data.results.forEach(function(key,idx){
                     total+=key.qty*key.goodsprice*1;
                     piece+=key.qty*1;
                })
                this.setState({
                    dataset:res.body.data.results,
                    onegood:total,
                    onepiece:piece
                })
             })
        }
    }
    selectONE(id,e){
           
        if( $(e.target).attr('class')=="active"){
            $(e.target).removeClass('active');
            $('#all').removeClass('active');
            $(e.target).siblings('.cal').children('input').prop('disabled',true)
            var num=$(e.target).siblings('.cal').children('input').val()*1
            var pi=$(e.target).siblings('p').children('span').text().slice(1)*1
            var curtotal=num*pi
            // console.log(curtotal)
            

            // console.log(this.state)
            var mintotal=this.state.onegood-curtotal
            var minpiece=this.state.onepiece-num
             this.setState({
                 onegood:mintotal,
                 onepiece:minpiece
             })
            
        }else{
             $(e.target).addClass('active');
             $(e.target).siblings('.cal').children('input').prop('disabled',false)
          $('.cargoods i').each(function(idx,item){
            if($(item).attr('class')!="active"){
                $('#all').removeClass('active');
               return false;
            }
            $('#all').addClass('active');
          })
            var num1=$(e.target).siblings('.cal').children('input').val()*1
            var pi1=$(e.target).siblings('p').children('span').text().slice(1)*1
            var curtotal1=num1*pi1
            // console.log(curtotal1)
            var maxtotal=this.state.onegood+curtotal1
            var maxpiece=this.state.onepiece+num1

             this.setState({
                 onegood:maxtotal,
                 onepiece:maxpiece
             })
          
        }  
    }
    buy(e){
            var kk=0;
            $('.cargoods i').each(function(idx,item){
               if($(item).hasClass('active')){
                    kk++;
               }
            })
            if(kk>0){

                this.props.router.push('/order')
                var idarr=[];
                $('.cargoods i.active').each(function(idx,item){
                    idarr.push($(item).data('id'))
                })
                window.sessionStorage.setItem('id',idarr)
              
            }else{
                $('.cover').css("display","block");
                var timer=setTimeout(function(){
                    $('.cover').css("display","none");
                },1500)
            }
    }
    home(){
      // console.log(222)
      this.props.router.push('/')
    }
    render(){
         var data;
        var propsdata=this.props.dataset.results ? this.props.dataset.results : []
        var statedata=this.state.dataset
        // console.log()
        if(statedata.length>0){
            var total=0
            var piece=0
            data=statedata;
            total=this.state.onegood;
            piece=this.state.onepiece;
        }else{
            data=propsdata;
            var total=0
            var piece=0
            data.forEach((key,idx)=>{
            total+=key.qty*key.goodsprice*1;
            piece+=key.qty*1;
            })
        }
        return(
         <div id="carlist">
         <div className="cover"><span className="fa fa-times" aria-hidden="true"></span><span className="tip">请选择结算的商品！</span></div>
            <div className="header"><a onClick={this.delAll.bind(this)}>删除商品</a></div>
            <div className="body">
                <div className="carshop">
                    <a onClick={this.home.bind(this)}>中酒自营</a>
                </div> 
                    {
                        data.map((key,idx) => {
                            return <div  className="cargoods"  key={'a'+idx}>
                            <i data-id={key.id} className="active" onClick={this.selectONE.bind(this,key.id)}></i>
                            <img src={'/src/assets/photo/'+key.imgurl} key={idx}/>
                            <p>{key.goodsname}<span>￥{key.goodsprice}</span></p>
                            <div className="cal">
                            <span className="jian" onClick={this.jian.bind(this,key.id)}>-</span>
                            <input type="text" defaultValue={key.qty} onBlur={this.put.bind(this,key.id)}/>
                            <span className="jia" onClick={this.jia.bind(this,key.id)}>+</span>
                            <span className="del" onClick={this.delcurrentgood.bind(this,key.id)}>删除</span>
                            </div>
                            </div>
                        })
                    }
            </div>
            <div className="footer">
            <div className="sel"><i id="all"  className="active" onClick={this.selectALL.bind(this)}></i><span>全选</span></div>
                <div className="calprice">
                <span>金额:<b>￥{total}.00</b></span>
                <span>立减:<b>￥0.00</b></span>
                    <span>合计:<b>￥{total}.00</b></span>
                </div>
                <div className="buy" onClick={this.buy.bind(this)}>去结算<span>( {piece} )</span></div>
            </div> 
         </div>
        )
    }
}
const mapStateToProps = (state) => {
  // console.log(state.Carlist.dataset)
    return {
        dataset:state.Carlist.dataset||[]
    }
}


export default connect(mapStateToProps, action)(Carlist);
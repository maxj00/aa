import React,{Component} from 'react'
import './region3.scss'
import http from '../../utils/httpclient'

export default class Address extends Component{
       componentDidMount(){
            $.get("/src/assets/region.json",function(res){
                var data=res.regions;
                // console.log(data)
                var province=$('#province')[0];
                var city=$('#city')[0];
                var county=$('#county')[0];
                // 生成省列表
                for(var i=0;i<data.length;i++){
                    var option_province=document.createElement('option');
                    option_province.value=data[i].name;
                    option_province.innerText=data[i].name;
                    province.appendChild(option_province);
                }

                // 根据选择的省生成相应的城市列表
                province.onclick=function(e){
                    for(var i=0;i<data.length;i++){
                        if(data[i].name == e.target.value){
                            var data_city=data[i].regions;
                            var option_city=data_city.map(function(item){
                                return `<option value="${item.name}">${item.name}</option>`
                            }).join('');
                            // 根据选择的城市生成相应的县级列表
                            city.onclick=function(evt){
                                for(var j=0;j<data_city.length;j++){
                                    if(data_city[j].name == evt.target.value){
                                        var data_county=data_city[j].regions;
                                        var option_count=data_county.map(function(items){
                                            return `<option value="${items.name}">${items.name}</option>`
                                        }).join('');
                                    }
                                }
                                county.innerHTML="<option value='请选择'>请选择</option>"+option_count;
                            }
                        }
                    }
                    city.innerHTML="<option value='请选择'>请选择</option>"+option_city;
                }
            },'json')
        
    }
    saveRegion(e){
        var msg={
            province:$('#province').val(),
            city:$('#city').val(),
            county:$('#county').val(),
            name:$('#name').val(),
            phone:$('#phone').val(),
            address:$('#address').val()
        }
        // var add=`${msg.province}-${msg.city}-${msg.county}`
       http.post('address',msg).then((res)=>{
        console.log(res)
            if(res.body.status){
                this.props.router.push('/order')
            }
       })
       
        
    }
    render(){
        var html=(
                <div id="locate">
                <div className="header">收货地址新增</div>
                <input type="text" placeholder="收货人姓名" id="name"/>
                <input type="text" placeholder="联系电话" id="phone"/>
                <p><select name="province"  id="province">
                <option value="省份">省份</option>
                </select></p>
                <p><select name="city" id="city">
                <option value="城市">城市</option>
                </select></p>
                <p><select name="county" id="county">
                <option value="县区">县区</option>
                </select></p>
                <input type="text" placeholder="详细地址" id="address"/>
                <button onClick={this.saveRegion.bind(this)}>确认</button>
                </div>
        )
        return html;
    }
}
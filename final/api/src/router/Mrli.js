const apiResult =require('../utils/apiResult');
const filter =require('../utils/filter');
const db=require('../db/index.js');

  module.exports={
  	register(app){
  		app.post('/ligetproducts',(req,res)=>{
        var productsGetSql = 'SELECT * FROM goods2';
        db.mysql.select(productsGetSql,function(result){
            res.send(apiResult(result.status,result.data));
        })
  		})

      app.post('/ligetlogo',(req,res)=>{
         var _type=req.body.type;
         var sql= `SELECT * FROM brand WHERE type='${_type}'`;
         db.mysql.select(sql,function(result){
              res.send(result);
         })
      })

      app.post('/livaguesearch',(req,res)=>{
         var name=req.body.name;
         var arr=[];
         var sql= `SELECT * FROM goods2 WHERE goodsname LIKE '%${name}%'`;
         var _sql= `SELECT * FROM goods2 WHERE category LIKE '%${name}%'`;
         db.mysql.select(sql,function(result){
              if(result.status){
                  arr.push(result.data.results);
              }
              db.mysql.select(_sql,function(_result){
                  if(_result.status){
                    _result.data.results.forEach(function(item){
                        for(var i=0;i<arr[0].length;i++){
                            if(arr[0][i].id == item.id){
                                arr[0].splice(i,1);
                            }
                        } 
                    })
                    for(var j=0;j<_result.data.results.length;j++){
                          arr[0].push(_result.data.results[j]);
                    }
                  }
                  res.send(arr[0]);
              })
         })
      })

      app.post('/lidetailspro',(req,res)=>{
          var id = req.body.id;
          var sql = `SELECT * FROM goods2 WHERE id='${id}'`;
          db.mysql.select(sql,function(result){
            if(result.status){
              res.send(apiResult(result.status,result.data.results));
            }else{
              res.send(result);
            }
          })
      })

      app.post('/insertnewcarlist',(req,res)=>{
        // INSERT into administrator(admin,pass) VALUES ('xiaoming','123456'),('xiaohong','123456');
        let obj=JSON.parse(req.body.obj);
        let arr1=Object.keys(obj);
        let str1=arr1.toString();
        let arr2=[];
        for(var i in arr1){
          arr2[i] = `'${obj[arr1[i]]}'`
        }
        let str2=arr2.toString();
        console.log(str1,str2);
        let sql= `INSERT into carlist (${str1}) VALUES (${str2})`;
        let username = obj.username;
        let id = obj.id;
        let qty=obj.qty;
        let _sql = `SELECT * FROM carlist WHERE id='${id}' and username='${username}'`;
        let updatesql=`UPDATE carlist SET qty = qty +'${qty}' WHERE id='${id}' and username='${username}'`;
        db.mysql.select(_sql,function(_result){
             // console.log(_result.status,_result.data.results.length);
            if(_result.data.results.length != 0){
              db.mysql.update(updatesql,function(up_result){
                  res.send(up_result);
              })
            }else{
              db.mysql.insert(sql,function(result){
                  res.send(result);
              })
            }
        })
      })

  	}
  } 

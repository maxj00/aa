var apiResult =require('../utils/apiResult.js')
var filter =require('../utils/filter.js')
var  db =require ('../db/index.js')

module.exports={
    register(app){
        app.get('/carlist',(req,res)=>{
            var username=req.query.data;
            console.log(username)
        var userGetSql = `SELECT * FROM carlist where username='${username}'`;
        db.mysql.select(userGetSql,function(result){
            res.send(result);
          })
        })

        app.post('/jiancarlist',(req,res)=>{

            console.log(req.body.id)
             var jianSql = `update carlist set qty=qty-1 where id='${req.body.id}'`;
             var userGetSql = 'SELECT * FROM carlist';
             db.mysql.select(jianSql,function(res2){
                if(res2.status){
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
            }
             })
        })
         app.post('/jiacarlist',(req,res)=>{
            // console.log(req.body.id)
             var jiaSql = `update carlist set qty=qty+1 where id='${req.body.id}'`;
             var userGetSql = 'SELECT * FROM carlist';
             db.mysql.select(jiaSql,function(res2){
                if(res2.status){
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
            }
             })
        })
         app.post('/updatecarlist',(req,res)=>{
            // console.log(req.body.id)
             var updateSql = `update carlist set qty=${req.body.qty}*1 where id='${req.body.id}'`;
             var userGetSql = 'SELECT * FROM carlist';
             db.mysql.select(updateSql,function(res2){
                if(res2.status){
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
                }
             })
        })
          app.post('/updatecarlist1',(req,res)=>{
            // console.log(req.body.id)
             var updateSql = `update carlist set qty=${req.body.qty}*1 where id='${req.body.id}'`;
             var userGetSql = `SELECT * FROM carlist where username='${req.body.data}'`;
             db.mysql.select(updateSql,function(res2){
                if(res2.status){
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
                }
             })
        })
          app.post('/updatecarlist2',(req,res)=>{
            // console.log(req.body.id)
             var userGetSql = `SELECT * FROM carlist where id='${req.body.id}'`;
            
                
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
                

        })

        app.post('/delcarlist',(req,res)=>{
            var delSql = `DELETE FROM carlist where id='${req.body.id}'`
            var userGetSql = 'SELECT * FROM carlist';
            db.mysql.select(delSql,function(res2){
                if(res2.status){
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
                }
            })
        })
        app.post('/shangchucarlist',(req,res)=>{
            var delSql = `DELETE FROM carlist`
            var userGetSql = 'SELECT * FROM carlist';
            db.mysql.select(delSql,function(res2){
                if(res2.status){
                db.mysql.select(userGetSql,function(result){
                    res.send(result)
                })
                }
            })
        })

         app.post('/order',(req,res)=>{
         let idarr=req.body.id;
         if(typeof(idarr)=="string"){
            var userGetSql = 'SELECT * FROM carlist where id='+idarr;
         }else{
             var userGetSql = 'SELECT * FROM carlist where';
            idarr.forEach(function(item){
           userGetSql+=' id='+item+' or'
            })
            userGetSql+=' 1=2';
             }
            db.mysql.select(userGetSql,function(result){
                    res.send(result)
             })
         })
        
        app.post('/address',(req,res)=>{
            console.log(req.body)
            var insertSql=`insert into address (name,phonenum,province,city,county,totaladdress) values ('${req.body.name}','${req.body.phone}','${req.body.province}','${req.body.city}','${req.body.county}','${req.body.address}')`
              db.mysql.select(insertSql,function(result){
                            res.send(result)
             })
        })

        app.get('/getaddress',(req,res)=>{
            var userGetSql = 'SELECT * FROM address'
             db.mysql.select(userGetSql,function(result){
                    res.send(result)
             })
        })

        app.get('/deladdress',(req,res)=>{
            var userGetSql = 'DELETE FROM address'
             db.mysql.select(userGetSql,function(result){
                    res.send(result)
             })
        })



    }
}

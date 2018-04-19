const db = require('../db/index.js');
const filter =require('../utils/filter');
const apiResult = require('../utils/apiResult.js')

module.exports = {
    productget(app){
        app.get('/products',(req,res)=>{
            var productGet ='SELECT * FROM goods';
            db.mysql.select(productGet,function(result){
                res.send(result);
            });
        })

        app.get('/inproduct',(req,res)=>{
            let goodsname = req.query.goodsname;
            let goodsprice = req.query.goodsprice;
            let xiangxin = req.query.xiangxin;
            let userInSql = `INSERT into goods(goodsname,goodsprice,xiangxin) VALUES ('${goodsname}','${goodsprice}','${xiangxin}')`;
            db.mysql.insert(userInSql,function(result){
                console.log(result)
                res.send(result);
            })
        })

        app.get('/delproduct',function(req,res){
            let pid = req.query.id;
            db.mysql.delete(`delete from goods where pID="${pid}" `,function(result){
                var status = result.status;
                if(status){
                    res.send({status:'ok',lg:result.data.results[0]});
                }else{
                    res.send({status:'error'});
                }
            });
        });

         app.get('/upproduct',(req,res)=>{
            let goodsname = req.query.goodsname;
            let goodsprice = req.query.goodsprice;
            let xiangxin = req.query.xiangxin;
            let id = req.query.id;
            let sql = `update goods set goodsname='${goodsname}', goodsprice=${goodsprice*1},xiangxin='${xiangxin}' where id='${id}'`;
            db.mysql.update(sql,function(result){
                var status = result.status;
                if(status){
                    res.send({status:true,data:result.data.results});
                }else{
                    res.send({status:'error'});
                }
            });
        });

        app.get('/mhseach',function(req,res){

            let params = req.query.params;

            db.mysql.select(`select * from goods where goodsname like "%${params}%" or id like "%${params}%" or goodsprice like "%${params}%" or xiangxin like "%${params}%"`,
                function(result){
                    console.log(result);
                    var status = result.status;
                    if(status){
                        res.send({status:true,data:result.data.results});
                        //res.send({status: true, data: result});
                    }else{
                        res.send({status:'error'});
                    }
                }
            );    
        });

    },
    register(app){
        app.get('/users',(req,res)=>{
            var userGetSql = 'SELECT * FROM user';
            db.mysql.select(userGetSql,function(result){
                res.send(result);
            })
        })

        app.get('/login',(req,res) => {
            let username=req.query.username;
            let password=req.query.password;
            var sql= `select * from user where username='${username}' and password='${password}'`;
            // sql +=";select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql, function(data){
                console.log(data);
                res.send(data)
            })
        })

        // app.get('/login',(req,res)=>{
        //     var userGetlog = 'SELECT * FROM user where username="${username}"';
        //     db.mysql.select(userGetlog,function(result){
        //         res.send(result);
        //     })
        // })

        app.get('/deluser',function(req,res){
            let pid = req.query.id;
            db.mysql.delete(`delete from user where id="${pid}" `,function(result){
                var status = result.status;
                if(status){
                    res.send({status:'ok',lg:result.data.results[0]});
                }else{
                    res.send({status:'error'});
                }
            });
        });

        app.get('/inusers',(req,res)=>{
            let username = req.query.username;
            let password = req.query.password;
            let iphone = req.query.phone;
            let userInSql = `INSERT into user(username,password,iphone) VALUES ('${username}','${password}','${iphone}')`;
            db.mysql.insert(userInSql,function(result){
                console.log(result)
                res.send(result);
            })
        })

        app.get('/upUser',(req,res)=>{
            let username = req.query.username;
            let password = req.query.password;
            let phone = req.query.phone;
            let id = req.query.id;
            let sql = `update goods set username='${username}', password=${password*1},phone='${phone}' where id='${id}'`;
            db.mysql.update(sql,function(result){
                var status = result.status;
                if(status){
                    res.send({status:true,data:result.data.results});
                }else{
                    res.send({status:'error'});
                }
            });
        });
    }


}
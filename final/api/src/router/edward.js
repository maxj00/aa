const apiResult =require('../utils/apiResult');
const filter =require('../utils/filter');
const db=require('../db/index.js');

module.exports = {
    register(app){

        app.get('/login',(req,res) => {
            let username=req.query.username;
            let password=req.query.password;
            console.log(username,password);
            var sql= `select * from user where username='${username}' and password='${password}'`;
            db.mysql.select(sql, function(data){
                if(data.data.results.length == 0){
                    res.send(apiResult(false));
                }else{
                    res.send(apiResult(true));
                }
            })
        })

        app.get('/reg', (req, res) => {
            let username=req.query.username;
            let password=req.query.password;
            // console.log(username,password);
            var sql1= `select * from user where username='${username}'`;
            var sql2 = `insert into user(username,password) values('${username}','${password}')`;
            db.mysql.select(sql1, function(data){
                if(data.data.results.length!=0){
                    res.send(apiResult(false));
                }else{
                    db.mysql.insert(sql2, function(_data){
                        res.send(apiResult(true));
                    })
                }
            })
        })
    }
}

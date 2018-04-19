const apiResult =require('../utils/apiResult');
const filter =require('../utils/filter');
const db=require('../db/index.js');

  module.exports={
  	register(app){
  		app.post('/ligetproducts',(req,res)=>{
  			console.log('000');
        console.log(req.body.username,req.body.pwd);
        var userGetSql = 'SELECT * FROM goods2';
        db.mysql.select(userGetSql,function(result){
            res.send(result);
        })
  		})

  		app.get('/ligetproducts1',(req,res)=>{
  			console.log('999');
        console.log(req.query.username,req.query.pwd);
        res.send('9999');
  		})
  	}
  } 

const apiResult =require('../utils/apiResult');
const filter =require('../utils/filter');
const db=require('../db/index.js');

module.exports={
		register(app){
  		app.get('/whome',(req,res)=>{
				var sql = 'SELECT * FROM goods2';
				db.mysql.select(sql,function(result){
					res.send(apiResult(result.length>1,result));
				})
			})

			app.get('/wbaijiu',(req,res)=>{
				var page = req.query.page;
				var limit = req.query.limit;
				// page1 = page ? (page-1)*limit :0;
				// limit1 = limit ? page*limit:9999;
				// console.log(req)
				//select * from goods2 where category="baijiu" limit 0,10
				var sql = 'SELECT * FROM goods2 WHERE category="白酒" limit '+ page +","+limit;
				console.log(sql)
				db.mysql.select(sql,function(result){
				res.send(apiResult(result.length>1,result));
				})
			})
			
			app.get('/qipaojiu',(req,res)=>{
				var page = req.query.page;
				var limit = req.query.limit;
				var sql = 'SELECT * FROM goods2 WHERE category="气泡酒" limit '+ page +","+limit;
				console.log(sql)
				db.mysql.select(sql,function(result){
				res.send(apiResult(result.length>1,result));
				})
			})
			
			app.get('/putaojiu',(req,res)=>{
				var page = req.query.page;
				var limit = req.query.limit;
				var sql = 'SELECT * FROM goods2 WHERE category="葡萄酒" limit '+ page +","+limit;
				console.log(sql)
				db.mysql.select(sql,function(result){
				res.send(apiResult(result.length>1,result));
				})
			})
		  
			// app.get('FuzzySearch',(req, res)=>{
			// 	let proproParams = req.query.proproParams
			// 	console.log(proproParams)
			// 	let val;
			// 	for(var key in proproParams){
			// 		val = proproParams[key]
			// 		let _sql = `select * from goods2 where goodsname like '%${val}'`
			// 		console.log(proproParams)
					
			// 		db.mysql.select(_sql, options =>{
			// 			res.send(options)
			// 		})
			// 	}
			// })
			app.get('/FuzzySearch',function(req,res){

				let proParams = req.query.proParams;
				console.log(proParams)
				db.mysql.select(`select * from goods where goodsname like "%${proParams}%" or id like "%${proParams}%" or goodsprice like "%${proParams}%" or xiangxin like "%${proParams}%"`,
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
  	}
} 
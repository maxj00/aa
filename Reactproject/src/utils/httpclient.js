
import http from 'superagent';

// const apiBaseUrl='http://localhost:8080/';
const apiBaseUrl='http://localhost:8080/';

export default{
    get(_url,params){
        var url = _url && _url.startsWith('http') ? _url : `${apiBaseUrl}${_url}`;
        return new Promise((resolve,reject) => {
            http.get(url).query(params||{}).end((error,res)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(res);
                }
            })
        })
    },
    post(_url,params){
        var url = _url && _url.startsWith('http') ? _url : `${apiBaseUrl}${_url}`;
        return new Promise((resolve,reject) => {
            http.post(url).send(params||{})
            .type('form')
            .end((error,res)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(res);
                }
            })
        })
    }
}

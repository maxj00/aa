import http from '../utils/httpclient'

export default function(api){
    return function(dispatch){
        return function(action){
            let {type,url,method="get",data}=action;
            if(!url){
                dispatch(action)
            }
            http[method](url,data).then((res)=>{
                console.log(res)
                let _action={
                    type,
                    result:res.body.data
                }
                dispatch(_action)
            })
        }
    }
}
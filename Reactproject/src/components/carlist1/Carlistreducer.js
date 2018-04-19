export default function datagrid(state={},action){
    console.log(action)
    let _state=JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch(action.type){
         case 'carlist':
         _state.dataset=action.result;
         // console.log(action.result)
        return _state;
        case 'updatecarlist':
        _state.dataset=action.result;
        return _state;
    }
     return _state;
}
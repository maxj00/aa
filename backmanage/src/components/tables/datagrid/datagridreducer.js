import * as constants from './datagridconstants'

export default function datagrid(state = {}, action){
    let _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.Requesting:
            _state.show = true;
            //
            break;
        case constants.Requested:
            _state.show = false;
            //action.name = 'a'
            if(action.name){
                //_state = {}
                //_state[action.name] == _state.a
                _state[action.name] = _state[action.name] || {};

                // if(!_state[action.name]){
                //     _state[action.name] = {}
                // } else {
                //     _state[action.name] = _state[action.name]
                // }

                //_state[action.name].dataset = {student: {dataset: []}, modal: {dataset: []}}
                //{dataset}
                _state[action.name].dataset = action.result;
            } else {
                //_state.dataset = [{}, {}]
                _state.dataset = action.result;
            }
            break;
        case constants.RequestError:
            _state.show =false;
            _state.error = action.error;
            break
    }
    return _state;
}
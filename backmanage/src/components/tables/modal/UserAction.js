import * as constants from './Userconstants.js'

export function refresh(_config){
    return {
        type:'datagrid',
        url: _config.url,
        method: _config.method || 'get',
        data: _config.data || {},
        name: _config.name
    }
}
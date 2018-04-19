import React from 'react'
import ReactDOM from 'react-dom'

import '../font/bootstrap.css'
import '../../common/common.css'

export default class RootComponent extends React.Component{
    render(){
        return(
            <div className="root">{this.props.children}</div>
        )
    }
}
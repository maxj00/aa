import React from 'react'
import {combineReducers} from 'redux'


import user from '../components/tables/user/UserReducer.js'
// import modal from '../components/modal/modalreducer'

export default combineReducers({
    user
})

// new Vuex.Store({
//     modules: {
//         student,
//         modal
//     }
// })

// this.$store.state.student
// this.$store.state.modal

//componenta
//component1 => component2
// const areducer = {name: 'Sam', age: 22}

// const breducer = {name: "Tom", age: 23}

// const obj = {
//     areducer: {

//     },
//     breducer:{}
// }

// const stroe = createStroe(obj)

// //component
// const mapStateToProps = (state) => {
//     return {

//     }
// }
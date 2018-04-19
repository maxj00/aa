import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import Rootreducer from './rootReducer'
import middleware from './middleware'

const store=createStore(Rootreducer,applyMiddleware(middleware));
export default store;
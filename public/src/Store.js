import { createStore, applyMiddleware } from 'redux'
import rootreducer from './reducers/Rootreducer'
import thunk from 'redux-thunk'


export const store = createStore(rootreducer, (applyMiddleware(thunk)));
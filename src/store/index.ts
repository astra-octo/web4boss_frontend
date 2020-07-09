import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers'

export default (): Store => {
    return createStore(rootReducers, applyMiddleware(thunk));
}


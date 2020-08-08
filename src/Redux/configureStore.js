import {Reducer,initialState} from './reducer';
import {createStore} from 'redux';

export const configureStore = () => {
        const store  = createStore(Reducer,initialState);
        return store;
}
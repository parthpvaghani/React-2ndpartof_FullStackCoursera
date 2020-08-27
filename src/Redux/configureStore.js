//reducers
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';

import { InitialFeedback } from './forms';
import { createForms } from 'react-redux-form';

import { createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(combineReducers({
        dishes: Dishes,
        leaders: Leaders,
        promotions: Promotions,
        comments: Comments,
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    applyMiddleware(thunk, logger)
    );
    return store;
}
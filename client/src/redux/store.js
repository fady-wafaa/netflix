import { createStore , applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getMoviesIDReducer, getMoviesReducer } from "./reducers/falms.reducer.js"
import { getTvReducer , getDetelsIdTv } from './reducers/TvShows.reducers';

const reducer = combineReducers({
    getMovies:getMoviesReducer,
    MoviesID:getMoviesIDReducer,
    getDataTV:getTvReducer,
    getTvID:getDetelsIdTv
})
const middleware = [thunk];

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
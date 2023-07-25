import {combineReducers} from '@reduxjs/toolkit';

import userDetailsSlice from './feature/user-details/usersSlice.js';

const rootReducer = combineReducers({
    userInfo: userDetailsSlice,
});

export default rootReducer;
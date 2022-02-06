import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';
import userReducer from './user';

// redux can combine all of reducers by using configureStore
// the idea of redux is only have one store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, user: userReducer },
});

export default store;
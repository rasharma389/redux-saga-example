import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { enableMapSet } from 'immer';
import rootSaga from "./sagas/rootSaga";
import Comp1Reducer from "./features/comp1Slice";
import Comp2Reducer from "./features/comp2Slice";
import ApiStatusReducer from "./features/apiStatusSlice";

enableMapSet();

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    comp1: Comp1Reducer,
    comp2: Comp2Reducer,
    apiStatus: ApiStatusReducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ serializableCheck: false }).concat(
        sagaMiddleware
      );
    },
  });
  
  sagaMiddleware.run(rootSaga);
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  export default store;
  
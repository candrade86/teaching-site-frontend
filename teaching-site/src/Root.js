import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default ({ children, initialState = {} }) => {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(reduxThunk, logger)
  );

  const persistor = persistStore(store)

  return <Provider store={store}><PersistGate loading={null} persistor={persistor}>{children}</PersistGate></Provider>;
};

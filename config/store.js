import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation', 'screen', 'remove', 'modals'],
};

const persistReducer = persistCombineReducers(persistConfig, reducer);

const configureStore = () => {
  const store = createStore(
    persistReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;

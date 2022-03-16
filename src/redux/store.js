import { combineReducers, createStore } from "redux";
import tweetReducer from "./tweetReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ tweets: tweetReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

function storeConfig() {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);
  return store, persistor;
}

export default storeConfig;

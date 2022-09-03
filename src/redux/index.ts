import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER } from "redux-persist"
import storageSession from 'redux-persist/lib/storage/session'
import historyReducer from "./reducer"

const rootReducer = combineReducers({
    history: historyReducer
})

const persistConfig = {
    key: "history",
    storage: storageSession,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

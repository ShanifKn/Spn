import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./Slice/userSlice";
import { adminSlice } from "./Slice/adminSlice";

const persistConfig = { key: "root", storage, version: 1 };

const userLoginPersistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
const adminLoginPersistedReducer = persistReducer(
  persistConfig,
  adminSlice.reducer
);

export const store = configureStore({
  reducer: {
    user: userLoginPersistedReducer,
    admin: adminLoginPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

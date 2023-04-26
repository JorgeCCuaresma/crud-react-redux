import userReducer from "./users/slice.ts";
import { configureStore } from "@reduxjs/toolkit";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persistanceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

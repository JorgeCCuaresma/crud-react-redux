import { notificationMiddleware, persistanceLocalStorageMiddleware } from "./middleware.ts";
import userReducer from "./users/slice.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, notificationMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

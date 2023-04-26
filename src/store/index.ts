import userReducer from "./users/slice.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
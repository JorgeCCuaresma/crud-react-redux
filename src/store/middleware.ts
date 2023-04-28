import { type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
	};

export const notificationMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type } = action;
		next(action);

		if (type === "user/deleteUserById") {
			toast.success("User deleted");
		}
		if (type === "user/addNewUser") {
			toast.success("User added");
		}
	};

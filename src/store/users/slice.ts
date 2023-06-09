import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "G0t9b@example.com",
		github: "peterdoe",
	},
	{
		id: "2",
		name: "John Doe",
		email: "G0t9b@example.com",
		github: "johndoe",
	},
	{
		id: "3",
		name: "Jane Doe",
		email: "G0t9b@example.com",
		github: "JaneDoe",
	},
	{
		id: "4",
		name: "Emma Twoo",
		email: "G0t9b@example.com",
		github: "EmmaTwoo",
	},
	{
		id: "5",
		name: "Julio Ben",
		email: "G0t9b@example.com",
		github: "JulioBen",
	},
];

let initialState : UserWithId[] = DEFAULT_STATE;
const persistStated = localStorage.getItem("__redux_state__");
if (persistStated) {
	initialState = JSON.parse(persistStated).users;
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		addNewUser: (state, action: PayloadAction<User>) => {
			const length = state.length + 1;
			const id = length.toString()
			state.push({id, ...action.payload})
		},
		upDateUserById: (state, action: PayloadAction<UserWithId>) => {
			const id = action.payload.id;
			const index = state.findIndex((user) => user.id === id);
			state[index] = action.payload;
			return state
		}
	},
});

export default userSlice.reducer;
export const { addNewUser, deleteUserById, upDateUserById } = userSlice.actions;

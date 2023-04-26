import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
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

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export default userSlice.reducer;

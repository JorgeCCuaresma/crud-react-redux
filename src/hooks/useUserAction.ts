import { User, UserId, UserWithId, addNewUser, deleteUserById, upDateUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();
	const addUser = ({ name, email, github }: User) => dispatch(addNewUser({ name, email, github }));
	const removeUserById = (id: UserId) => dispatch(deleteUserById(id));
	const editUser = (user: UserWithId) =>	dispatch(upDateUserById(user))

	return {
		addUser,
		removeUserById,
		editUser
	};
};

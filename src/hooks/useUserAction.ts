import { UserId, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
    const dispatch = useAppDispatch();
    const removeUserById = (userId: UserId) => dispatch(deleteUserById(userId));
    
    return{
        removeUserById
    }
}
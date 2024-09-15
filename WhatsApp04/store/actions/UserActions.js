import axios from "axios";
import { getUsers } from "../reducers/UserReducer";

export const getUsersAction = () => async (dispatch,getState) =>{
    try {
        const response = await axios.get('https://dummyjson.com/users');
        dispatch(getUsers(response.data.users));
    } catch (error) {
        console.error(error);
    }
}
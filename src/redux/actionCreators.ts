import IUser from "../interfaces/userInterface"
import { LOG_USER, LOG_OUT_USER } from "./actionTypes"

export const logUser = (user: IUser) => {
    return {type: LOG_USER, payload: user}
}

export const logOutUser = () => {
    return {type: LOG_OUT_USER}
}


import IUser from "./userInterface";

export default interface IStore {
    userLogged: boolean,
    user: IUser | undefined
}
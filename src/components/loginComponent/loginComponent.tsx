import {Button, TextField} from "@mui/material";
import { useEffect, useRef } from "react";
import './loginComponent.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logUser } from "../../redux/actionCreators";
import IUser from "../../interfaces/userInterface";
import IStore from "../../interfaces/storeInterface";

const users = [
    {
        id: 1,
        username: 'username',
        password: '12345',
        name: 'Poll',
        surname: 'James',
        age: 30
    }
]

const LoginComponent = () => {

    const logged: boolean = useSelector((store:IStore) => store.userLogged);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login: any = useRef('');
    const password: any = useRef('');


    useEffect(() => {
        if (logged) {
            navigate("/profile");
        }

    }, [])

    const handleFormSubmit = () => {

        const user = users.find((u:IUser) => u.username === login.current.value && u.password === password.current.value)
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(logUser(user));
            navigate("/profile");
        } else {
            alert('Wrong username or password.');
        }
    } 


    return <div className="login">
        <TextField inputRef={login} label="Login" variant="outlined" />
        <TextField inputRef={password} label="Password" variant="outlined" />
        <Button onClick={handleFormSubmit} >Login</Button>
    </div>
}

export default LoginComponent;
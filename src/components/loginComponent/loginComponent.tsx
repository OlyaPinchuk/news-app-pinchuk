import {Button, TextField} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { redirect } from "react-router";
import './loginComponent.css'
import { useNavigate } from 'react-router-dom';

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

    const [logged, setLogged] = useState(false)

    const login: any = useRef('')
    const password: any = useRef('')

    const navigate = useNavigate()


    useEffect(() :any => {
        if (logged) {
            console.log(logged)
            navigate("/profile")
        }

    }, [logged])

    const handleFormSubmit = () => {
        console.log(login.current.value)
        console.log(password.current.value)

        const user: any = users.find((u:any) => u.username === login.current.value && u.password === password.current.value)
        if (user) {
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user))
            setLogged(true)
        }
    } 


    return <div className="login">
        <TextField inputRef={login} label="Login" variant="outlined" />
        <TextField inputRef={password} label="Password" variant="outlined" />
        <Button onClick={handleFormSubmit} >Login</Button>
    </div>
}

export default LoginComponent;
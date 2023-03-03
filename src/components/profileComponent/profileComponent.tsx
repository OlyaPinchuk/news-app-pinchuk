import { useEffect, useState } from "react";
import { Route, redirect, useNavigate} from "react-router-dom";
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import './profileComponent.css'
import panda from '../../panda.png'
import IUser from "../../interfaces/userInterface";

const ProfileComponent = (props:any) => {

    const [user, setUser] = useState<IUser>()
    const navigate = useNavigate()
    

    useEffect(() => {
        if (localStorage.hasOwnProperty('user')) {
            // @ts-ignore
            setUser(JSON.parse(localStorage.getItem('user')))
        } else {
            navigate("/")
        }

    }, [])


    return <Card id='profile-card' sx={{ width: 500 }}>
   
      <CardContent>
        <Typography id="name" gutterBottom variant="h5" component="div">
          {user && user.name} {user && user.surname}
        </Typography>
        <CardMedia id='avatar' component='img' image={panda}/>
        <hr></hr>
        <Typography variant="body2" color="text.secondary">
          Age: { user && user.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some info
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some info
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Some info
        </Typography>
        <Button>Edit</Button>
      </CardContent>   
  </Card>
    
}

export default ProfileComponent;
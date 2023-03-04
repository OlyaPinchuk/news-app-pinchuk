import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import './profileComponent.css'
import panda from '../../panda.png'
import { useDispatch, useSelector } from "react-redux";
import IStore from "../../interfaces/storeInterface";
import { logUser } from "../../redux/actionCreators";
import IUser from '../../interfaces/userInterface'

const ProfileComponent = (props:any) => {

    const user: IUser | undefined = useSelector((store: IStore) => store.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (localStorage.hasOwnProperty('user')) {
            // @ts-ignore
            dispatch(logUser(JSON.parse(localStorage.getItem('user'))));
        } else {
            navigate("/");
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
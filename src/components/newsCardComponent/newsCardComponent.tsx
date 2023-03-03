import {Card, CardActionArea, CardContent, Typography, CardActions, Button} from '@mui/material';
import { useSelector } from 'react-redux';
import IStore from '../../interfaces/storeInterface';
import './newsCardComponent.css'

const NewsCardComponent = ({news, handleDelete}:any) => {

  const logged = useSelector((store:IStore) => store.userLogged)


    return <Card className='card' sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {news && news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news && news.body}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Read more
      </Button>
      {logged && 
      <Button size="small" color="primary" onClick={()=>handleDelete(news.id)}>
        Delete
      </Button>
      }
    </CardActions>
  </Card>
}

export default NewsCardComponent;
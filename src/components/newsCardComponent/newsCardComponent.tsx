import {Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import './newsCardComponent.css'

const NewsCardComponent = ({news, handleDelete}:any) => {

  


    return <Card className='card' sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <div>{news && news.id}</div>
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
      <Button size="small" color="primary" onClick={()=>handleDelete(news.id)}>
        Delete
      </Button>
    </CardActions>
  </Card>
}

export default NewsCardComponent;
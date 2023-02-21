import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './headerComponent.css';
// import MenuIcon from '@mui/icons-material/Menu';

const HeaderComponent = () => {

  const [userLogged, setLogged] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

  }, [])

    return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className="header">
        <Typography className="links" variant="h6" component="div" >
          <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
        {/* </Typography> */}
        {/* <Typography className="news-button" variant="h6" component="div" > */}
          <Link to='/news' style={{textDecoration: 'none', color: 'white'}}>News</Link>
          <Link to='/profile' style={{textDecoration: 'none', color: 'white'}}>Profile</Link>

        </Typography>
        <Button color="inherit">
          <Link to='/login' style={{textDecoration: 'none', color: 'white'}}>Login</Link>
            
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
}

export default HeaderComponent;
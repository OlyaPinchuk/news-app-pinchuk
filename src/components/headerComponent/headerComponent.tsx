import { Box, AppBar, Toolbar, Typography, Button, Select, MenuItem } from "@mui/material";
import { useEffect, useState, Suspense } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './headerComponent.css';
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/actionCreators";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import IStore from '../../interfaces/storeInterface'

const HeaderComponent = () => {

  const [lng, setLng] = useState<string>('en');
  const navigate = useNavigate();
  const logged = useSelector((store:IStore) => store.userLogged);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('posts');
    dispatch(logOutUser());
    navigate('/');
  }

  const handleLngChange = (e:any) => {
    setLng(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('i18nextLng', e.target.value);
  }

  useEffect(() => {
    if (localStorage.hasOwnProperty('i18nextLng')) {
      // @ts-ignore
      setLng(localStorage.getItem('i18nextLng'));
      // @ts-ignore
      i18n.changeLanguage(localStorage.getItem('i18nextLng'));
    }
    
  }, [logged])

    return <Suspense fallback='Loading...'>

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className="header">
        <Typography className="links" variant="h6" component="div" >
          <Link className="link" to='/'>{t('home')}</Link>
          <Link className="link" to='/news'>{t('news')}</Link>
          {logged && 
          <Link className="link" to='/profile'>{t('profile')}</Link>
          }

        </Typography>
        <div className="buttons">
          {!logged && 
            <Button color="inherit">
              <Link className="link" to='/login' style={{fontSize: '15px'}}>{t('logIn')}</Link>
            </Button>
          }
          {logged && 
            <Button style={{color: 'white',fontSize: '15px'}} onClick={handleLogOut}>
            {t('logOut')}
            </Button>
          }
          <Select disableUnderline variant="standard" value={lng} label="Lng" onChange={handleLngChange} style={{color: 'white', fontSize: '15px'}}>
            <MenuItem value='en'>EN</MenuItem>
            <MenuItem value='ua'>UA</MenuItem>

          </Select>
        </div>
      </Toolbar>
    </AppBar>
  </Box>
  </Suspense>
}

export default HeaderComponent;
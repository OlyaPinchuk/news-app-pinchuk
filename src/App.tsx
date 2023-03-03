import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import HomeComponent from './components/homeComponent/homeComponent';
import NewsComponent from './components/newsComponent/newsComponent';
import ProfileComponent from './components/profileComponent/profileComponent';
import HeaderComponent from './components/headerComponent/headerComponent';
import LoginComponent from './components/loginComponent/loginComponent';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/news-app-pinchuk' element={<Navigate to="/" replace />}/>
      
        <Route path='/' element={<HomeComponent></HomeComponent>} ></Route>
        {/* <Route path='/news-app-pinchuk' element={<HomeComponent></HomeComponent>} ></Route> */}

        <Route path='/news' element={<NewsComponent></NewsComponent>} ></Route>
        <Route path='/login' element={<LoginComponent></LoginComponent>} ></Route>
        <Route path='/profile' element={<ProfileComponent></ProfileComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;

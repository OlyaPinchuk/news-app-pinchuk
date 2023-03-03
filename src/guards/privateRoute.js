import {useEffect, useState} from 'react'
import { Outlet, redirect, Redirect, Route } from "react-router";
import HomeComponent from '../components/homeComponent/homeComponent'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ProtctedRoutes = () => {

  const [logged, setLogged] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.hasOwnProperty('user')) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [])

  if (logged) {
    return <Outlet/>
  } else {
    return <HomeComponent></HomeComponent>
  }
  
}

export default ProtctedRoutes;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Carclr from './components/carclr'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Homepost from './components/Homepost'
import Unmountsam from './components/Unmountsam'
import Car from './components/Car'
import Clrusestate from './components/Clrusestate'
import Useeff from './components/Useeff'
{/* <link href="/src/App.css" rel="stylesheet"> */}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
	<Route exact path='/' element={ <Home/>}/>
	<Route exact path='/login' element={ <Login favcol="yellow"/>}/>
	<Route exact path='/profile' element={ <Profile/>}/>
  <Route exact path='/carclr' element={ <Carclr/>}/>
  <Route exact path='/Counter' element={ <Counter/>}/>
  <Route exact path='/Navbar' element={ <Navbar favcol="yellow"/>}/>
  <Route exact path='/Homepost' element={ <Homepost/>}/>
  <Route exact path='/Unmountsam' element={ <Unmountsam/>}/>
  <Route exact path='/Car' element={ <Car/>}/>
  <Route exact path='/Clrusestate' element={ <Clrusestate/>}/>
  <Route exact path='/Useeff' element={ <Useeff/>}/>
 </Routes>
    </>
  )
}


export default App

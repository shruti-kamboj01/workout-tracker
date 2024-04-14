import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Page2 from './Pages/Page2'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Goals from './Pages/Goals'
import Workout from './Pages/Workout'
import Schedule from './Pages/Schedule'


function App() {


  return (
    <>
      <div className=''> 
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/page2' element={<Page2/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
       <Route path='/goals' element={<Goals/>} />
       <Route path='/workout' element={<Workout/>} />
       <Route path='/schedule' element={<Schedule/>} />
       </Routes>
      </div>
     
    </>
  )
}

export default App

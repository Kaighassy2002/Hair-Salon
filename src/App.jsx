import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'

import Services from './pages/Services'
import Team from './pages/Team'
import Booking from './pages/Booking'
// import Footer from './components/Footer'
import Profile from './components/Profile'
import Auth from './components/Auth'




function App() {
 

  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>} />
        
      </Routes>
    
      {/* <Footer/> */}
    </>
  )
}

export default App

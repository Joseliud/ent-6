import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import HotelPages from './Pages/HotelPages'
import LoginPages from './Pages/LoginPages'
import RegisterPages from './Pages/RegisterPages'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsTunk } from './store/states/hotels.slice'
import PrincipalHeader from './compontes/shared/PrincipalHeader'
import ResevartionPages from './Pages/ResevartionPages'
import ProtectRouter from './Pages/ProtectRouter'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels`
    dispatch(getHotelsTunk(url))
  },[])

  return (
   <div>
    <PrincipalHeader />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/hotels/:id' element={<HotelPages />} />
        <Route path='/register' element={<RegisterPages/>} />
        <Route path='/login' element={<LoginPages />} />
        <Route element={<ProtectRouter />}>
           <Route path='/revervations' element={<ResevartionPages />} />
        </Route>
       </Routes>
   </div>
  )
}

export default App

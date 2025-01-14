import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/About Us/AboutUs'
import Services from './Pages/Services/Services'
import Gallery from './Pages/Gallery/Gallery'
import ContactUs from './Pages/ContactUs/ContactUs'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App

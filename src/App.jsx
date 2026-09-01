import react from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit'
import Create from './components/Create'
import SecondCreate from './components/Secondproduct/Create'
import Home from './components/Home'
import Login from './components/Admin/Login'

function App() {


  return (
    <>

    
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/edit/:id' element = {<Edit />}/>
      <Route path='/create' element = {<Create />}/>

      <Route path='/admin/login' element ={<Login />}/>


      <Route path='/secondCreate' element = {<SecondCreate />}/>
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App

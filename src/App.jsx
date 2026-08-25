import react from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit'
import Create from './components/Create'
import Home from './components/Home'

function App() {


  return (
    <>

    
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/edit/:id' element = {<Edit />}/>
      <Route path='/create' element = {<Create />}/>
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App

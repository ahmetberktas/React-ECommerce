import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Checkout from './pages/Checkout'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
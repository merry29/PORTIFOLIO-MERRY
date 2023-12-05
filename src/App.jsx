import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import Projetos from './components/projetos/projetos'
import Formação from './components/formação/formação'
import Sobre from './components/sobre/sobre'
import Reset from './components/style/reset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Reset/>
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path="/" element ={<Formação/>}></Route>
          <Route path="/Projetos" element ={<Projetos/>}></Route>
          <Route path="/Sobre" element ={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
